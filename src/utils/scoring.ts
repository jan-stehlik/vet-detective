import { ranks } from "../data/ranks";
import type { Rank } from "../types";

export function calculateStars(testsUsed: number, correct: boolean, hintUsed: boolean): number {
  if (!correct) return 0;
  let stars = 3;
  if (testsUsed > 4) stars = 2;
  if (testsUsed > 6) stars = 1;
  if (hintUsed) stars = Math.max(1, stars - 1);
  return stars;
}

export function calculatePoints(stars: number, difficulty: number, streak: number): number {
  const base = difficulty * 30;
  const starBonus = stars * 15;
  const streakBonus = streak * 5;
  return base + starBonus + streakBonus;
}

export function getRank(score: number): Rank {
  let rank = ranks[0];
  for (const r of ranks) {
    if (score >= r.minScore) rank = r;
  }
  return rank;
}
