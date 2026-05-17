export interface CleanMascotProfile {
  neutralStanding: string;
  sit: string;
  sittingDown: string;
  standingVariants: Array<{ src: string; weight: number }>;
  trottingLoop: string;
  boop: string;
  kiss: string;
  kissLiftHoof: string;
}

const BASE = '/clean';

export const CLEAN_PROFILE: CleanMascotProfile = {
  neutralStanding: `${BASE}/pony-town-Clean%20Sweep-stand-blinking-padded-4x.gif`,
  sit: `${BASE}/pony-town-Clean%20Sweep-sit-blinking-padded-4x.gif`,
  sittingDown: `${BASE}/pony-town-Clean%20Sweep-sittingdown-blinking-padded-4x.gif`,
  standingVariants: [
    { src: `${BASE}/pony-town-Clean%20Sweep-stand-blinking-padded-4x.gif`, weight: 0.42 },
    { src: `${BASE}/pony-town-Clean%20Sweep-sit-blinking-padded-4x.gif`, weight: 0.26 },
    { src: `${BASE}/pony-town-Clean%20Sweep-kiss-blinking-padded-4x.gif`, weight: 0.18 },
    { src: `${BASE}/pony-town-Clean%20Sweep-kiss-lift-hoof-blinking-padded-4x.gif`, weight: 0.14 },
  ],
  trottingLoop: `${BASE}/pony-town-Clean%20Sweep-trot-blinking-padded-4x.gif`,
  boop: `${BASE}/pony-town-Clean%20Sweep-boop-blinking-padded-4x.gif`,
  kiss: `${BASE}/pony-town-Clean%20Sweep-kiss-blinking-padded-4x.gif`,
  kissLiftHoof: `${BASE}/pony-town-Clean%20Sweep-kiss-lift-hoof-blinking-padded-4x.gif`,
};

export function pickWeightedCleanStandingVariant(randomValue: number) {
  const pool = CLEAN_PROFILE.standingVariants;
  const totalWeight = pool.reduce((sum, item) => sum + item.weight, 0);
  let cursor = Math.max(0, Math.min(1, randomValue)) * totalWeight;

  for (const item of pool) {
    cursor -= item.weight;
    if (cursor <= 0) return item.src;
  }

  return pool[pool.length - 1]?.src ?? CLEAN_PROFILE.neutralStanding;
}
