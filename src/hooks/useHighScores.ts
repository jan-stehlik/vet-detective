import { useCallback } from "react";

interface HighScoreEntry {
  score: number;
  rank: string;
  date: string;
  solved: number;
  total: number;
}

export function useHighScores() {
  const saveScore = useCallback((entry: Omit<HighScoreEntry, "date">) => {
    try {
      const existing: HighScoreEntry[] = JSON.parse(
        localStorage.getItem("vet-detective-scores") || "[]"
      );
      existing.push({ ...entry, date: new Date().toLocaleDateString() });
      existing.sort((a, b) => b.score - a.score);
      localStorage.setItem(
        "vet-detective-scores",
        JSON.stringify(existing.slice(0, 10))
      );
    } catch {
      // localStorage not available
    }
  }, []);

  return { saveScore };
}
