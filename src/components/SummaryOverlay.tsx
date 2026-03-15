import { useEffect } from "react";
import { useGame } from "../context/GameContext";
import { cases } from "../data/cases";
import { getRank } from "../utils/scoring";
import { useSound } from "../hooks/useSound";
import { useHighScores } from "../hooks/useHighScores";
import styles from "./SummaryOverlay.module.css";

export function SummaryOverlay() {
  const { state, dispatch } = useGame();
  const { playSound } = useSound();
  const { saveScore } = useHighScores();

  const totalStars = state.casesCompleted.reduce((sum, c) => sum + c.stars, 0);
  const totalSolved = state.casesCompleted.filter((c) => c.correct).length;
  const rank = getRank(state.score);

  useEffect(() => {
    playSound("levelup");
    saveScore({
      score: state.score,
      rank: rank.title,
      solved: totalSolved,
      total: cases.length,
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <div className={styles.trophy}>🏆</div>
        <h2 className={styles.title}>Investigation Complete!</h2>
        <div className={styles.finalRank}>Final Rank: {rank.title}</div>

        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{state.score}</span>
            Total Score
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>
              {totalSolved}/{cases.length}
            </span>
            Cases Solved
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>
              {totalStars}/{cases.length * 3}
            </span>
            Total Stars
          </div>
        </div>

        <div className={styles.recap}>
          {state.casesCompleted.map((completed) => {
            const c = cases[completed.caseIndex];
            return (
              <div key={completed.caseIndex} className={styles.recapItem}>
                <span>
                  {c.animal.emoji} {c.animal.name}
                </span>
                <span className={styles.recapStars}>
                  {completed.correct
                    ? "⭐".repeat(completed.stars) +
                      "☆".repeat(3 - completed.stars)
                    : "❌"}
                </span>
              </div>
            );
          })}
        </div>

        <button
          className={styles.restartBtn}
          onClick={() => dispatch({ type: "RESTART_GAME" })}
        >
          Play Again 🔄
        </button>
      </div>
    </div>
  );
}
