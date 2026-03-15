import { useEffect } from "react";
import { useGame } from "../context/GameContext";
import { cases } from "../data/cases";
import { useSound } from "../hooks/useSound";
import styles from "./ResultOverlay.module.css";

export function ResultOverlay() {
  const { state, dispatch } = useGame();
  const { playSound } = useSound();
  const c = cases[state.currentCaseIndex];
  const result = state.resultData;
  if (!result) return null;

  const isLast = state.currentCaseIndex >= cases.length - 1;

  const handleNext = () => {
    if (isLast) {
      dispatch({ type: "SHOW_SUMMARY" });
    } else {
      dispatch({ type: "NEXT_CASE" });
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (result.correct && result.stars === 3) {
      const timeout = setTimeout(() => playSound("levelup"), 300);
      return () => clearTimeout(timeout);
    }
  }, [result, playSound]);

  const starsDisplay = result.correct
    ? "⭐".repeat(result.stars) + "☆".repeat(3 - result.stars)
    : "☆☆☆";

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <div className={styles.emoji}>{result.correct ? "🎉" : "😓"}</div>
        <h2 className={styles.title}>
          {result.correct ? "Case Solved!" : "Not Quite..."}
        </h2>
        <div className={styles.diagnosisReveal}>
          <strong>Correct Diagnosis:</strong>
          <br />
          {c.correct}
        </div>
        <div className={styles.explanation}>{c.explanation}</div>
        <div className={styles.stars}>{starsDisplay}</div>
        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.statItemValue}>
              {state.usedTools.length}
            </span>
            Tests Used
          </div>
          <div className={styles.statItem}>
            <span className={styles.statItemValue}>
              {result.correct ? `+${result.points}` : "+0"}
            </span>
            Points
          </div>
        </div>
        <button className={styles.nextBtn} onClick={handleNext}>
          {isLast ? "See Final Results 🏆" : "Next Case →"}
        </button>
      </div>
    </div>
  );
}
