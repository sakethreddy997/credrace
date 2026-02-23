import {
  lenders,
  type Lender,
  type WarRoomInputs,
  getAdjustedRate,
  getTenureMonths,
  calculateEMI,
} from "./warRoomData";

export interface LeaderboardEntry {
  lender: Lender;
  rate: number;
  emi: number;
  rank: number;
  previousRank: number;
}

function createSeed(inputs: WarRoomInputs): number {
  const str =
    inputs.loanAmount.toString(36) +
    inputs.incomeBracket +
    inputs.loanType;
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h) || 1;
}

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function getInitialLeaderboard(inputs: WarRoomInputs): LeaderboardEntry[] {
  const tenure = getTenureMonths(inputs.loanType);
  const entries: LeaderboardEntry[] = lenders.map((lender) => {
    const rate = getAdjustedRate(lender, inputs);
    const emi = calculateEMI(inputs.loanAmount, rate, tenure);
    return { lender, rate, emi, rank: 0, previousRank: 0 };
  });
  entries.sort((a, b) => a.rate - b.rate);
  entries.forEach((e, i) => {
    e.rank = i + 1;
    e.previousRank = i + 1;
  });
  return entries;
}

export function simulateLiveUpdate(
  leaderboard: LeaderboardEntry[],
  inputs: WarRoomInputs,
  step: number
): { leaderboard: LeaderboardEntry[]; updatedIndex: number } {
  const seed = createSeed(inputs);
  const rng = mulberry32(seed + step * 7919);
  const tenure = getTenureMonths(inputs.loanType);

  const copy = leaderboard.map((e) => ({
    ...e,
    previousRank: e.rank,
  }));

  const index = Math.floor(rng() * copy.length);
  const delta = (rng() - 0.5) * 2;
  const change = Math.round(delta * 20) / 100;
  const clampedChange = Math.max(-0.25, Math.min(0.25, change || 0.1));
  copy[index].rate = Math.round((copy[index].rate + clampedChange) * 100) / 100;
  copy[index].emi = calculateEMI(inputs.loanAmount, copy[index].rate, tenure);

  copy.sort((a, b) => a.rate - b.rate);
  copy.forEach((e, i) => {
    e.rank = i + 1;
  });

  const updatedIndex = copy.findIndex((e) => e.lender.id === leaderboard[index].lender.id);
  return { leaderboard: copy, updatedIndex };
}

export function getNextLiveUpdateDelay(
  inputs: WarRoomInputs,
  step: number
): number {
  const seed = createSeed(inputs);
  const rng = mulberry32(seed + step * 31);
  return 4000 + Math.floor(rng() * 2000);
}
