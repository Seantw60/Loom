'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { CLEAN_PROFILE, pickWeightedCleanStandingVariant } from '@/lib/mascots/clean-profile';
import { LOGICAL_PROFILE, MascotState, pickWeightedStandingVariant } from '@/lib/mascots/logical-profile';
import { isAllowedMascotProjectName } from '@/lib/mascots/project-gate';

const DESKTOP_QUERY = '(min-width: 1024px)';
const MASCOT_SIZE = 132;
const EDGE_PADDING = 16;
const FORWARD_SCALE_X = -1;
const BOOP_TIP_LEFT_X = 34;
const BOOP_TIP_RIGHT_X = MASCOT_SIZE - 34;
const BOOP_TIP_Y = 58;
const MIN_MASCOT_SEPARATION = 118;

interface Point {
  x: number;
  y: number;
}

interface MouseState {
  point: Point | null;
  active: boolean;
  lastSeenAt: number;
}

type MouseBehavior = 'watch' | 'approach' | 'sprint' | null;

interface Bounds {
  width: number;
  height: number;
}

interface Props {
  projectName: string | null;
  zoneSelector: string;
  targetSelector: string;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function resolveZoneElement(selector: string) {
  return document.querySelector<HTMLElement>(selector);
}

function resolveBounds(selector: string): Bounds {
  const element = resolveZoneElement(selector);
  if (!element) {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const rect = element.getBoundingClientRect();
  return { width: rect.width, height: rect.height };
}

function getTargetPoint(bounds: Bounds, current: Point, state: MascotState): Point {
  const minX = EDGE_PADDING;
  const maxX = Math.max(EDGE_PADDING, bounds.width - MASCOT_SIZE - EDGE_PADDING);
  const minY = EDGE_PADDING;
  const maxY = Math.max(EDGE_PADDING, bounds.height - MASCOT_SIZE - EDGE_PADDING);

  if (state === 'standing') {
    const driftX = randomBetween(0, 28);
    const driftY = randomBetween(-24, 24);
    return {
      x: clamp(current.x + driftX, minX, maxX),
      y: clamp(current.y + driftY, minY, maxY),
    };
  }

  if (state === 'trotting') {
    const bandY = clamp(current.y + randomBetween(-18, 18), minY + 24, maxY - 24);
    const nearEdge = current.x < bounds.width / 2 ? maxX : minX;
    const variation = randomBetween(-120, 120);
    return {
      x: clamp(nearEdge + variation, minX, maxX),
      y: bandY,
    };
  }

  return {
    x: clamp(randomBetween(minX, maxX), minX, maxX),
    y: clamp(randomBetween(minY, maxY * 0.6), minY, maxY),
  };
}

function enforceForwardTravel(bounds: Bounds, current: Point, state: MascotState, target: Point) {
  if (state === 'standing') {
    return { state, target };
  }

  const minX = EDGE_PADDING;
  const maxX = Math.max(EDGE_PADDING, bounds.width - MASCOT_SIZE - EDGE_PADDING);
  const requiredForward = state === 'trotting' ? 44 : 28;
  const minForwardX = current.x + requiredForward;

  if (minForwardX >= maxX - 2) {
    return {
      state: 'standing' as MascotState,
      target: getTargetPoint(bounds, current, 'standing'),
    };
  }

  if (target.x < minForwardX) {
    return {
      state,
      target: {
        ...target,
        x: clamp(minForwardX, minX, maxX),
      },
    };
  }

  return { state, target };
}

function getStateSpeed(state: MascotState) {
  if (state === 'standing') return randomBetween(12, 22);
  if (state === 'trotting') return randomBetween(34, 52);
  return randomBetween(58, 86);
}

function getStateDwell(state: MascotState, reducedMotion: boolean) {
  if (reducedMotion) {
    if (state === 'standing') return randomBetween(7.5, 13);
    if (state === 'trotting') return randomBetween(4.2, 6.4);
    return randomBetween(2.2, 3.2);
  }

  if (state === 'standing') return randomBetween(4.8, 11);
  if (state === 'trotting') return randomBetween(4.8, 9.6);
  return randomBetween(2.8, 5.6);
}

function weightedChoice(weights: Array<{ state: MascotState; weight: number }>) {
  const total = weights.reduce((sum, item) => sum + item.weight, 0);
  let cursor = Math.random() * total;

  for (const item of weights) {
    cursor -= item.weight;
    if (cursor <= 0) return item.state;
  }

  return weights[weights.length - 1]?.state ?? 'standing';
}

function distance(a: Point, b: Point) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function getTargetDistanceFromMascot(zoneSelector: string, targetSelector: string, position: Point) {
  const zone = resolveZoneElement(zoneSelector);
  if (!zone) return null;

  const zoneRect = zone.getBoundingClientRect();
  const mascotCenter = {
    x: zoneRect.left + position.x + MASCOT_SIZE / 2,
    y: zoneRect.top + position.y + MASCOT_SIZE / 2,
  };

  const targets = Array.from(document.querySelectorAll<HTMLElement>(targetSelector));
  let nearest: { element: HTMLElement; distance: number } | null = null;

  for (const target of targets) {
    const rect = target.getBoundingClientRect();
    const targetCenter = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    const gap = distance(mascotCenter, targetCenter);

    if (!nearest || gap < nearest.distance) {
      nearest = { element: target, distance: gap };
    }
  }

  return nearest;
}

function getMouseDistanceFromMascot(position: Point, mousePoint: Point | null) {
  if (!mousePoint) return null;

  return distance(getBoopTipPoint(position, FORWARD_SCALE_X), mousePoint);
}

function getBoopTipPoint(position: Point, scaleX: number): Point {
  return {
    x: position.x + (scaleX < 0 ? BOOP_TIP_RIGHT_X : BOOP_TIP_LEFT_X),
    y: position.y + BOOP_TIP_Y,
  };
}

function getPositionForBoopTip(mousePoint: Point, scaleX: number, minY: number, maxY: number, maxX: number): Point {
  const localTipX = scaleX < 0 ? BOOP_TIP_RIGHT_X : BOOP_TIP_LEFT_X;

  return {
    x: clamp(mousePoint.x - localTipX, EDGE_PADDING, maxX),
    y: clamp(mousePoint.y - BOOP_TIP_Y, minY, maxY),
  };
}

function enforceMinimumSeparation(target: Point, anchor: Point, minDistance: number, bounds: Bounds): Point {
  const gap = distance(target, anchor);
  if (gap >= minDistance) {
    return target;
  }

  const angle = gap === 0 ? Math.random() * Math.PI * 2 : Math.atan2(target.y - anchor.y, target.x - anchor.x);
  const nextDistance = minDistance + 4;
  const maxX = Math.max(EDGE_PADDING, bounds.width - MASCOT_SIZE - EDGE_PADDING);
  const maxY = Math.max(EDGE_PADDING, bounds.height - MASCOT_SIZE - EDGE_PADDING);

  return {
    x: clamp(anchor.x + Math.cos(angle) * nextDistance, EDGE_PADDING, maxX),
    y: clamp(anchor.y + Math.sin(angle) * nextDistance, EDGE_PADDING, maxY),
  };
}

function getMouseBehavior(
  mousePoint: Point | null,
  currentPosition: Point,
): { behavior: MouseBehavior; forwardDelta: number; distanceToMouse: number | null; verticalDelta: number } {
  if (!mousePoint) {
    return { behavior: null, forwardDelta: 0, distanceToMouse: null, verticalDelta: 0 };
  }

  const mascotCenter = {
    x: currentPosition.x + MASCOT_SIZE / 2,
    y: currentPosition.y + MASCOT_SIZE / 2,
  };
  const forwardDelta = mousePoint.x - mascotCenter.x;
  const verticalDelta = Math.abs(mousePoint.y - mascotCenter.y);
  const distanceToMouse = distance(mascotCenter, mousePoint);

  if (forwardDelta <= 24) {
    return { behavior: 'watch', forwardDelta, distanceToMouse, verticalDelta };
  }

  if (distanceToMouse > 260 || verticalDelta > 120) {
    return { behavior: 'sprint', forwardDelta, distanceToMouse, verticalDelta };
  }

  if (distanceToMouse > 96) {
    return { behavior: 'approach', forwardDelta, distanceToMouse, verticalDelta };
  }

  return { behavior: 'watch', forwardDelta, distanceToMouse, verticalDelta };
}

export default function WritingMascot({ projectName, zoneSelector, targetSelector }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const [position, setPosition] = useState<Point>({ x: 64, y: 64 });
  const [transitionSeconds, setTransitionSeconds] = useState(2.2);
  const [state, setState] = useState<MascotState>('standing');
  const [facingLeft, setFacingLeft] = useState(false);
  const [overrideClip, setOverrideClip] = useState<string | null>(null);
  const [currentClip, setCurrentClip] = useState(LOGICAL_PROFILE.neutralStanding);
  const [shellOpacity, setShellOpacity] = useState(1);
  const minimumTrotDistance = 128;
  const minimumTrotForwardDelta = 96;
  const minimumPartnerTrotDistance = 128;
  const minimumPartnerTrotForwardDelta = 96;

  const [partnerPosition, setPartnerPosition] = useState<Point>({ x: 220, y: 160 });
  const [partnerTransitionSeconds, setPartnerTransitionSeconds] = useState(2);
  const [partnerState, setPartnerState] = useState<'standing' | 'trotting' | 'sitting'>('standing');
  const [partnerFacingLeft, setPartnerFacingLeft] = useState(true);
  const [partnerMoveScaleX, setPartnerMoveScaleX] = useState(1);
  const [partnerOverrideClip, setPartnerOverrideClip] = useState<string | null>(null);
  const [partnerClip, setPartnerClip] = useState(CLEAN_PROFILE.neutralStanding);
  const partnerOpacity = 1;

  const cooldownRef = useRef<{ flyingUntil: number; trottingUntil: number; globalPokeUntil: number }>({
    flyingUntil: 0,
    trottingUntil: 0,
    globalPokeUntil: 0,
  });
  const targetPokeCooldownRef = useRef<Map<string, number>>(new Map());
  const standingHistoryRef = useRef<string[]>([]);
  const activeTimersRef = useRef<number[]>([]);
  const positionRef = useRef<Point>({ x: 64, y: 64 });
  const idleVariantCooldownUntilRef = useRef<number>(0);
  const mouseStateRef = useRef<MouseState>({ point: null, active: false, lastSeenAt: 0 });
  const mouseBoopCooldownUntilRef = useRef<number>(0);
  const mouseChaseCooldownUntilRef = useRef<number>(0);

  const partnerTimersRef = useRef<number[]>([]);
  const partnerPositionRef = useRef<Point>({ x: 220, y: 160 });
  const partnerIdleCooldownUntilRef = useRef<number>(0);
  const partnerBoopCooldownUntilRef = useRef<number>(0);
  const partnerChaseCooldownUntilRef = useRef<number>(0);
  const pairChatterCooldownUntilRef = useRef<number>(0);
  const partnerSitLockUntilRef = useRef<number>(0);
  const partnerSitTransitionUntilRef = useRef<number>(0);

  const enabled = useMemo(
    () => isDesktop && isAllowedMascotProjectName(projectName),
    [isDesktop, projectName],
  );

  const activeClip = overrideClip ?? currentClip;

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);
    const sync = () => setIsDesktop(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (!enabled) {
      mouseStateRef.current = { point: null, active: false, lastSeenAt: 0 };
      return;
    }

    const zone = resolveZoneElement(zoneSelector);
    if (!zone) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = zone.getBoundingClientRect();
      mouseStateRef.current = {
        point: {
          x: clamp(event.clientX - rect.left, EDGE_PADDING, Math.max(EDGE_PADDING, rect.width - EDGE_PADDING)),
          y: clamp(event.clientY - rect.top, EDGE_PADDING, Math.max(EDGE_PADDING, rect.height - EDGE_PADDING)),
        },
        active: true,
        lastSeenAt: Date.now(),
      };
    };

    const handleMouseLeave = () => {
      mouseStateRef.current = {
        ...mouseStateRef.current,
        active: false,
      };
    };

    zone.addEventListener('mousemove', handleMouseMove);
    zone.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      zone.removeEventListener('mousemove', handleMouseMove);
      zone.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, zoneSelector]);

  useEffect(() => {
    if (!enabled) {
      setOverrideClip(null);
      setState('standing');
      setCurrentClip(LOGICAL_PROFILE.neutralStanding);
      return;
    }

    const bounds = resolveBounds(zoneSelector);
    const spawn = {
      x: clamp(bounds.width * 0.2, EDGE_PADDING, Math.max(EDGE_PADDING, bounds.width - MASCOT_SIZE - EDGE_PADDING)),
      y: clamp(bounds.height * 0.28, EDGE_PADDING, Math.max(EDGE_PADDING, bounds.height - MASCOT_SIZE - EDGE_PADDING)),
    };

    positionRef.current = spawn;
    setPosition(spawn);
    idleVariantCooldownUntilRef.current = Date.now() + randomBetween(8000, 14000);
  }, [enabled, zoneSelector]);

  useEffect(() => {
    if (!enabled) {
      for (const timer of activeTimersRef.current) {
        window.clearTimeout(timer);
      }
      activeTimersRef.current = [];
      return;
    }

    const schedule = () => {
      const now = Date.now();
      const bounds = resolveBounds(zoneSelector);
      const currentPosition = positionRef.current;
      const maxX = Math.max(EDGE_PADDING, bounds.width - MASCOT_SIZE - EDGE_PADDING);
      const minY = EDGE_PADDING;
      const maxY = Math.max(EDGE_PADDING, bounds.height - MASCOT_SIZE - EDGE_PADDING);
      const mouseState = mouseStateRef.current;
      const recentMouse = mouseState.active || (now - mouseState.lastSeenAt < 2200 && mouseState.point);

      const nextWeights: Array<{ state: MascotState; weight: number }> = [
        { state: 'standing', weight: shouldReduceMotion ? 0.75 : 0.45 },
        { state: 'trotting', weight: shouldReduceMotion ? 0.2 : 0.35 },
        { state: 'flying', weight: shouldReduceMotion ? 0.05 : 0.2 },
      ];

      if (now < cooldownRef.current.flyingUntil) {
        nextWeights[2].weight = 0;
      }
      if (now < cooldownRef.current.trottingUntil) {
        nextWeights[1].weight *= 0.45;
      }

      let nextState = weightedChoice(nextWeights);
      let travelTarget = getTargetPoint(bounds, currentPosition, nextState);

      const mousePoint = recentMouse && mouseState.point ? mouseState.point : null;
      const mouseIntent = getMouseBehavior(mousePoint, currentPosition);
      const shouldApproachMouse =
        mouseIntent.behavior === 'approach'
        && now >= mouseChaseCooldownUntilRef.current
        && Math.random() < 0.22;
      const shouldSprintToMouse =
        mouseIntent.behavior === 'sprint'
        && now >= mouseChaseCooldownUntilRef.current
        && Math.random() < 0.4;

      if ((shouldApproachMouse || shouldSprintToMouse) && mousePoint) {
        nextState = shouldSprintToMouse ? 'flying' : 'trotting';
        travelTarget = getPositionForBoopTip(mousePoint, FORWARD_SCALE_X, minY, maxY, maxX);

        if (nextState === 'flying') {
          travelTarget = {
            ...travelTarget,
            y: clamp(travelTarget.y - 18, minY, maxY),
          };
        }

        mouseChaseCooldownUntilRef.current = now + (shouldSprintToMouse ? randomBetween(7000, 11000) : randomBetween(5000, 8500));
      }

      travelTarget = enforceMinimumSeparation(travelTarget, partnerPositionRef.current, MIN_MASCOT_SEPARATION, bounds);

      // When near the right edge, fly forward off-canvas and re-enter on the left.
      if (nextState !== 'standing' && currentPosition.x >= maxX - 72) {
        const wrapDuration = randomBetween(1.2, 1.8);
        const exitPoint = {
          x: maxX + 34,
          y: clamp(currentPosition.y - randomBetween(12, 40), minY, maxY),
        };
        const reEntryPoint = {
          x: clamp(EDGE_PADDING + randomBetween(10, 84), EDGE_PADDING, maxX),
          y: clamp(randomBetween(minY + 28, maxY * 0.58), minY, maxY),
        };

        setFacingLeft(false);
        setState('flying');
        setCurrentClip(LOGICAL_PROFILE.flyingLoop);
        setTransitionSeconds(wrapDuration);
        positionRef.current = exitPoint;
        setPosition(exitPoint);

        const fadeOutTimer = window.setTimeout(() => {
          setShellOpacity(0);
        }, Math.max(120, wrapDuration * 1000 - 180));

        const respawnTimer = window.setTimeout(() => {
          setTransitionSeconds(0.06);
          positionRef.current = reEntryPoint;
          setPosition(reEntryPoint);
        }, wrapDuration * 1000 + 20);

        const fadeInTimer = window.setTimeout(() => {
          setShellOpacity(1);
        }, wrapDuration * 1000 + 170);

        const settleTimer = window.setTimeout(() => {
          setState('standing');
          setCurrentClip(LOGICAL_PROFILE.neutralStanding);
        }, wrapDuration * 1000 + 220);

        const nextCycleTimer = window.setTimeout(schedule, (wrapDuration + randomBetween(3.8, 6.8)) * 1000);
        activeTimersRef.current.push(fadeOutTimer, respawnTimer, fadeInTimer, settleTimer, nextCycleTimer);
        return;
      }

      const forwardOnly = enforceForwardTravel(bounds, currentPosition, nextState, travelTarget);
      nextState = forwardOnly.state;
      travelTarget = forwardOnly.target;

      let travelDistance = distance(currentPosition, travelTarget);

      // Trotting should only happen when the mascot is truly moving forward.
      if (
        nextState === 'trotting'
        && (travelDistance < minimumTrotDistance || (travelTarget.x - currentPosition.x) < minimumTrotForwardDelta)
      ) {
        nextState = 'standing';
        travelTarget = getTargetPoint(bounds, currentPosition, nextState);
        travelDistance = distance(currentPosition, travelTarget);
      }

      const speed = getStateSpeed(nextState);
      const moveSeconds = clamp(travelDistance / speed, 1.4, 6.4);
      const dwellSeconds = getStateDwell(nextState, !!shouldReduceMotion);

      if (nextState === 'standing') {
        if (mousePoint) {
          const mascotCenterX = currentPosition.x + MASCOT_SIZE / 2;
          setFacingLeft(mousePoint.x < mascotCenterX);
        } else if (travelTarget.x < currentPosition.x - 2) {
          setFacingLeft(true);
        } else if (travelTarget.x > currentPosition.x + 2) {
          setFacingLeft(false);
        }
      } else {
        setFacingLeft(false);
      }

      if (nextState === 'standing') {
        setCurrentClip(LOGICAL_PROFILE.neutralStanding);

        const canPlayIdleVariant = now >= idleVariantCooldownUntilRef.current;
        const shouldPlayIdleVariant = canPlayIdleVariant && Math.random() < 0.24;

        if (shouldPlayIdleVariant) {
          const variant = pickWeightedStandingVariant(LOGICAL_PROFILE, standingHistoryRef.current, Math.random());
          standingHistoryRef.current = [...standingHistoryRef.current.slice(-1), variant];
          setCurrentClip(variant);

          const variantHoldMs = randomBetween(520, 900);
          const restoreNeutralTimer = window.setTimeout(() => {
            setCurrentClip(LOGICAL_PROFILE.neutralStanding);
          }, variantHoldMs);
          activeTimersRef.current.push(restoreNeutralTimer);

          idleVariantCooldownUntilRef.current = Date.now() + randomBetween(18000, 32000);
        }
      } else if (nextState === 'trotting') {
        setCurrentClip(LOGICAL_PROFILE.trottingLoop);
      } else {
        setCurrentClip(LOGICAL_PROFILE.flyingLoop);
      }

      setTransitionSeconds(moveSeconds);
      setState(nextState);
      positionRef.current = travelTarget;
      setPosition(travelTarget);

      if (nextState === 'flying') {
        cooldownRef.current.flyingUntil = now + 8000;
      }
      if (nextState === 'trotting') {
        cooldownRef.current.trottingUntil = now + 2500;
      }

      const movementTimer = window.setTimeout(() => {
        const mouseDistance = getMouseDistanceFromMascot(travelTarget, mousePoint);
        const pokeNow = Date.now();

        if (
          mouseDistance !== null
          && mouseDistance < 84
          && pokeNow >= mouseBoopCooldownUntilRef.current
          && mouseIntent.behavior !== 'watch'
        ) {
          const boopClip = nextState === 'flying' ? LOGICAL_PROFILE.boopFly : LOGICAL_PROFILE.boop;
          const boopHold = nextState === 'flying' ? randomBetween(360, 620) : randomBetween(420, 720);

          setOverrideClip(boopClip);
          const clearMouseBoopTimer = window.setTimeout(() => {
            setOverrideClip(null);
          }, boopHold);
          activeTimersRef.current.push(clearMouseBoopTimer);
          mouseBoopCooldownUntilRef.current = pokeNow + 9000;
          return;
        }

        const nearest = getTargetDistanceFromMascot(zoneSelector, targetSelector, travelTarget);
        const pokeThreshold = 150;
        if (!nearest || nearest.distance > pokeThreshold) {
          return;
        }

        const targetKey = nearest.element.dataset.mascotTarget || nearest.element.id || nearest.element.textContent?.slice(0, 16) || 'unknown';
        const targetCooldownUntil = targetPokeCooldownRef.current.get(targetKey) ?? 0;
        const uiPokeNow = Date.now();

        if (uiPokeNow < cooldownRef.current.globalPokeUntil || uiPokeNow < targetCooldownUntil) {
          return;
        }

        nearest.element.classList.add('mascot-poked');
        const removeClassTimer = window.setTimeout(() => {
          nearest.element.classList.remove('mascot-poked');
        }, 680);
        activeTimersRef.current.push(removeClassTimer);

        const boopClip = nextState === 'flying' ? LOGICAL_PROFILE.boopFly : LOGICAL_PROFILE.boop;
        const boopHold = nextState === 'flying' ? randomBetween(420, 720) : randomBetween(500, 850);

        setOverrideClip(boopClip);
        const clearBoopTimer = window.setTimeout(() => {
          setOverrideClip(null);
        }, boopHold);
        activeTimersRef.current.push(clearBoopTimer);

        cooldownRef.current.globalPokeUntil = uiPokeNow + 2200;
        targetPokeCooldownRef.current.set(targetKey, uiPokeNow + 5500);
      }, (moveSeconds + 0.1) * 1000);

      const nextCycleTimer = window.setTimeout(schedule, (moveSeconds + dwellSeconds) * 1000);
      activeTimersRef.current.push(movementTimer, nextCycleTimer);
    };

    const initialTimer = window.setTimeout(schedule, 300);
    activeTimersRef.current.push(initialTimer);

    return () => {
      for (const timer of activeTimersRef.current) {
        window.clearTimeout(timer);
      }
      activeTimersRef.current = [];
    };
  }, [enabled, shouldReduceMotion, targetSelector, zoneSelector]);

  useEffect(() => {
    if (!enabled) {
      setPartnerOverrideClip(null);
      setPartnerState('standing');
      setPartnerClip(CLEAN_PROFILE.neutralStanding);
      partnerSitLockUntilRef.current = 0;
      partnerSitTransitionUntilRef.current = 0;
      return;
    }

    const bounds = resolveBounds(zoneSelector);
    const spawn = {
      x: clamp(bounds.width * 0.6, EDGE_PADDING, Math.max(EDGE_PADDING, bounds.width - MASCOT_SIZE - EDGE_PADDING)),
      y: clamp(bounds.height * 0.34, EDGE_PADDING, Math.max(EDGE_PADDING, bounds.height - MASCOT_SIZE - EDGE_PADDING)),
    };

    partnerPositionRef.current = spawn;
    setPartnerPosition(spawn);
    partnerIdleCooldownUntilRef.current = Date.now() + randomBetween(6500, 11000);

    if (!enabled) return;

    const schedulePartner = () => {
      const now = Date.now();
      const currentBounds = resolveBounds(zoneSelector);
      const currentPosition = partnerPositionRef.current;
      const primaryPosition = positionRef.current;
      const maxX = Math.max(EDGE_PADDING, currentBounds.width - MASCOT_SIZE - EDGE_PADDING);
      const minY = EDGE_PADDING;
      const maxY = Math.max(EDGE_PADDING, currentBounds.height - MASCOT_SIZE - EDGE_PADDING);

      const primaryCenter = {
        x: primaryPosition.x + MASCOT_SIZE / 2,
        y: primaryPosition.y + MASCOT_SIZE / 2,
      };
      const partnerCenter = {
        x: currentPosition.x + MASCOT_SIZE / 2,
        y: currentPosition.y + MASCOT_SIZE / 2,
      };
      const distanceToPrimary = distance(partnerCenter, primaryCenter);
      const isClose = distanceToPrimary < 108;
      const isMidRange = distanceToPrimary >= 108 && distanceToPrimary < 190;
      const isSittingTransition = partnerSitTransitionUntilRef.current > now;

      const partnerWeights: Array<{ state: 'standing' | 'trotting'; weight: number }> = [
        { state: 'standing', weight: 0.58 },
        { state: 'trotting', weight: 0.42 },
      ];

      if (now < partnerChaseCooldownUntilRef.current) {
        partnerWeights[1].weight *= 0.35;
      }

      let nextState = weightedChoice(partnerWeights);
      let partnerVisualState: 'standing' | 'trotting' | 'sitting' = nextState === 'flying' ? 'standing' : nextState;
      let travelTarget: Point;

      if (distanceToPrimary > 220) {
        nextState = 'trotting';
        travelTarget = {
          x: clamp(primaryCenter.x - MASCOT_SIZE * 0.25, EDGE_PADDING, maxX),
          y: clamp(primaryCenter.y - MASCOT_SIZE * 0.36, minY, maxY),
        };
      } else if (isClose) {
        nextState = 'standing';
        travelTarget = {
          x: clamp(currentPosition.x + randomBetween(0, 22), EDGE_PADDING, maxX),
          y: clamp(currentPosition.y + randomBetween(-18, 18), minY, maxY),
        };
      } else {
        travelTarget = {
          x: clamp(primaryCenter.x - MASCOT_SIZE * 0.38, EDGE_PADDING, maxX),
          y: clamp(primaryCenter.y - MASCOT_SIZE * 0.44, minY, maxY),
        };
      }

      let partnerTravelDistance = distance(currentPosition, travelTarget);
      if (
        partnerVisualState === 'trotting'
        && (
          partnerTravelDistance < minimumPartnerTrotDistance
          || (travelTarget.x - currentPosition.x) < minimumPartnerTrotForwardDelta
        )
      ) {
        partnerVisualState = 'standing';
        travelTarget = {
          x: clamp(currentPosition.x + randomBetween(0, 20), EDGE_PADDING, maxX),
          y: clamp(currentPosition.y + randomBetween(-16, 16), minY, maxY),
        };
        partnerTravelDistance = distance(currentPosition, travelTarget);
      }

      travelTarget = enforceMinimumSeparation(travelTarget, primaryPosition, MIN_MASCOT_SEPARATION, currentBounds);

      const partnerTravelScaleX = travelTarget.x < currentPosition.x ? 1 : -1;

      if (isClose && now >= partnerBoopCooldownUntilRef.current) {
        const closingClip = distanceToPrimary < 86
          ? CLEAN_PROFILE.kissLiftHoof
          : distanceToPrimary < 122
            ? CLEAN_PROFILE.kiss
            : CLEAN_PROFILE.boop;
        setPartnerOverrideClip(closingClip);
        setPartnerFacingLeft(primaryCenter.x > partnerCenter.x);
        setFacingLeft(partnerCenter.x > primaryCenter.x);

        const partnerReactTimer = window.setTimeout(() => {
          setPartnerOverrideClip(null);
          setPartnerClip(CLEAN_PROFILE.sit);
        }, randomBetween(700, 1100));
        partnerTimersRef.current.push(partnerReactTimer);

        const primaryReactTimer = window.setTimeout(() => {
          setOverrideClip(LOGICAL_PROFILE.boop);
          const clearPrimary = window.setTimeout(() => setOverrideClip(null), randomBetween(420, 760));
          activeTimersRef.current.push(clearPrimary);
        }, 120);
        activeTimersRef.current.push(primaryReactTimer);

        partnerBoopCooldownUntilRef.current = now + randomBetween(7000, 11000);
        partnerChaseCooldownUntilRef.current = now + randomBetween(2600, 5200);
        pairChatterCooldownUntilRef.current = now + randomBetween(6500, 12000);
        partnerVisualState = 'sitting';
        travelTarget = currentPosition;
        partnerTravelDistance = 0;
        partnerSitLockUntilRef.current = now + randomBetween(7000, 14000);
        partnerSitTransitionUntilRef.current = now + randomBetween(500, 900);
      }

      if (isMidRange && now >= pairChatterCooldownUntilRef.current && Math.random() < 0.34) {
        const primaryVariant = pickWeightedStandingVariant(LOGICAL_PROFILE, standingHistoryRef.current, Math.random());
        standingHistoryRef.current = [...standingHistoryRef.current.slice(-1), primaryVariant];
        setCurrentClip(primaryVariant);
        setFacingLeft(partnerCenter.x > primaryCenter.x);

        setPartnerClip(Math.random() < 0.45 ? CLEAN_PROFILE.sit : Math.random() < 0.7 ? CLEAN_PROFILE.kiss : CLEAN_PROFILE.neutralStanding);
        setPartnerFacingLeft(primaryCenter.x > partnerCenter.x);

        const restorePairTimer = window.setTimeout(() => {
          setCurrentClip(LOGICAL_PROFILE.neutralStanding);
          setPartnerClip(CLEAN_PROFILE.neutralStanding);
        }, randomBetween(650, 1050));
        partnerTimersRef.current.push(restorePairTimer);

        pairChatterCooldownUntilRef.current = now + randomBetween(9000, 15000);
      }

      if (partnerVisualState === 'standing') {
        if (distanceToPrimary > 140 && now >= partnerIdleCooldownUntilRef.current && Math.random() < 0.2) {
          const idleRoll = Math.random();
          const idleClip = idleRoll < 0.35
            ? pickWeightedCleanStandingVariant(idleRoll)
            : idleRoll < 0.6
              ? CLEAN_PROFILE.kiss
              : idleRoll < 0.82
                ? CLEAN_PROFILE.boop
                : CLEAN_PROFILE.neutralStanding;
          setPartnerClip(idleClip);
          setPartnerFacingLeft(primaryCenter.x > partnerCenter.x);
          const restoreTimer = window.setTimeout(() => {
            setPartnerClip(CLEAN_PROFILE.neutralStanding);
          }, randomBetween(550, 900));
          partnerTimersRef.current.push(restoreTimer);
          partnerIdleCooldownUntilRef.current = now + randomBetween(14000, 24000);
        } else {
          setPartnerClip(CLEAN_PROFILE.neutralStanding);
          setPartnerFacingLeft(primaryCenter.x > partnerCenter.x);
        }
      } else if (partnerVisualState === 'sitting') {
        travelTarget = currentPosition;
        partnerTravelDistance = 0;
        if (isSittingTransition) {
          setPartnerClip(CLEAN_PROFILE.sittingDown);
        } else {
          setPartnerClip(CLEAN_PROFILE.sit);
        }
        setPartnerFacingLeft(primaryCenter.x > partnerCenter.x);
      } else if (partnerVisualState === 'trotting') {
        setPartnerClip(CLEAN_PROFILE.trottingLoop);
        setPartnerMoveScaleX(partnerTravelScaleX);
      }

      const speed = partnerVisualState === 'trotting' ? randomBetween(30, 46) : randomBetween(10, 18);
      const moveSeconds = partnerVisualState === 'sitting' ? 0.05 : clamp(partnerTravelDistance / speed, 1.1, 5.6);
      const dwellSeconds = partnerVisualState === 'trotting'
        ? randomBetween(3.5, 6.5)
        : partnerVisualState === 'sitting'
          ? randomBetween(5.5, 10.5)
          : randomBetween(4.5, 10.5);

      setPartnerTransitionSeconds(moveSeconds);
      setPartnerState(partnerVisualState);
      if (partnerVisualState === 'standing') {
        setPartnerMoveScaleX(partnerTravelScaleX);
      } else if (partnerVisualState === 'sitting') {
        setPartnerMoveScaleX(partnerFacingLeft ? -1 : 1);
      }
      partnerPositionRef.current = travelTarget;
      setPartnerPosition(travelTarget);

      if (partnerVisualState === 'sitting' && isSittingTransition) {
        const settleTimer = window.setTimeout(() => {
          if (partnerSitLockUntilRef.current > Date.now()) {
            setPartnerClip(CLEAN_PROFILE.sit);
          }
        }, randomBetween(520, 880));
        partnerTimersRef.current.push(settleTimer);
      }

      const nextCycleTimer = window.setTimeout(schedulePartner, (moveSeconds + dwellSeconds) * 1000);
      partnerTimersRef.current.push(nextCycleTimer);
    };

    const initialTimer = window.setTimeout(schedulePartner, 500);
    partnerTimersRef.current.push(initialTimer);

    return () => {
      for (const timer of partnerTimersRef.current) {
        window.clearTimeout(timer);
      }
      partnerTimersRef.current = [];
    };
  }, [enabled, zoneSelector]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="mascot-shell pointer-events-none absolute left-0 top-0 z-20"
        animate={{
          x: partnerPosition.x,
          y: partnerPosition.y,
          scaleX: partnerState === 'standing' || partnerState === 'sitting' ? (partnerFacingLeft ? -1 : 1) : partnerMoveScaleX,
          opacity: partnerOpacity,
        }}
        transition={{
          x: { duration: partnerTransitionSeconds, ease: 'easeOut' },
          y: { duration: partnerTransitionSeconds, ease: 'easeOut' },
          scaleX: { duration: 0.2, ease: 'easeOut' },
          opacity: { duration: 0.18, ease: 'easeOut' },
        }}
        style={{ width: MASCOT_SIZE, height: MASCOT_SIZE }}
      >
        <div className={`mascot-shadow ${partnerState === 'trotting' ? 'mascot-shadow-air' : ''}`} />
        <AnimatePresence mode="wait">
          <motion.img
            key={`partner-${partnerState}-${partnerOverrideClip ?? partnerClip}`}
            src={partnerOverrideClip ?? partnerClip}
            alt=""
            draggable={false}
            className="h-full w-full select-none object-contain pixelated"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: randomBetween(0.18, 0.26), ease: 'easeOut' }}
          />
        </AnimatePresence>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="mascot-shell pointer-events-none absolute left-0 top-0 z-30"
        animate={{
          x: position.x,
          y: position.y,
          scaleX: state === 'standing' ? (facingLeft ? -1 : 1) : FORWARD_SCALE_X,
          opacity: shellOpacity,
        }}
        transition={{
          x: { duration: transitionSeconds, ease: state === 'flying' ? 'easeInOut' : 'easeOut' },
          y: { duration: transitionSeconds, ease: state === 'flying' ? 'easeInOut' : 'easeOut' },
          scaleX: { duration: 0.2, ease: 'easeOut' },
          opacity: { duration: 0.18, ease: 'easeOut' },
        }}
        style={{ width: MASCOT_SIZE, height: MASCOT_SIZE }}
      >
        <div className={`mascot-shadow ${state === 'flying' ? 'mascot-shadow-air' : ''}`} />
        <AnimatePresence mode="wait">
          <motion.img
            key={`${state}-${activeClip}`}
            src={activeClip}
            alt=""
            draggable={false}
            className="h-full w-full select-none object-contain pixelated"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: randomBetween(0.18, 0.26), ease: 'easeOut' }}
          />
        </AnimatePresence>
      </motion.div>
    </>
  );
}
