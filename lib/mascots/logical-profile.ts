export type MascotState = 'standing' | 'trotting' | 'flying';

export interface MascotAnimationProfile {
  standingVariants: Array<{ src: string; weight: number }>;
  neutralStanding: string;
  trottingLoop: string;
  flyingLoop: string;
  boop: string;
  boopFly: string;
}

const BASE = '/logical';

export const LOGICAL_PROFILE: MascotAnimationProfile = {
  standingVariants: [
    { src: `${BASE}/pony-town-Logical%20Conquest-stand-blinking-padded-4x.gif`, weight: 0.34 },
    { src: `${BASE}/pony-town-Logical%20Conquest-nod-with-closed-eyes-blinking-padded-4x.gif`, weight: 0.21 },
    { src: `${BASE}/pony-town-Logical%20Conquest-head-shake-with-closed-eyes-blinking-padded-4x.gif`, weight: 0.15 },
    { src: `${BASE}/pony-town-Logical%20Conquest-yawn-blinking-padded-4x.gif`, weight: 0.12 },
    { src: `${BASE}/pony-town-Logical%20Conquest-sneeze-blinking-padded-4x.gif`, weight: 0.10 },
    { src: `${BASE}/pony-town-Logical%20Conquest-stand-blinking-padded-4x.gif`, weight: 0.08 },
  ],
  neutralStanding: `${BASE}/pony-town-Logical%20Conquest-stand-blinking-padded-4x.gif`,
  trottingLoop: `${BASE}/pony-town-Logical%20Conquest-trot-blinking-padded-4x.gif`,
  flyingLoop: `${BASE}/Logical%20Conquest%20Flying.gif`,
  boop: `${BASE}/pony-town-Logical%20Conquest-boop-blinking-padded-4x.gif`,
  boopFly: `${BASE}/pony-town-Logical%20Conquest-boop-fly-blinking-padded-4x.gif`,
};

export function pickWeightedStandingVariant(
  profile: MascotAnimationProfile,
  recent: string[],
  randomValue: number,
): string {
  const blocked = new Set(recent.slice(-2));
  const candidates = profile.standingVariants.filter((item) => !blocked.has(item.src));
  const pool = candidates.length > 0 ? candidates : profile.standingVariants;
  const totalWeight = pool.reduce((sum, item) => sum + item.weight, 0);

  let cursor = Math.max(0, Math.min(1, randomValue)) * totalWeight;

  for (const item of pool) {
    cursor -= item.weight;
    if (cursor <= 0) return item.src;
  }

  return pool[pool.length - 1]?.src ?? profile.neutralStanding;
}
