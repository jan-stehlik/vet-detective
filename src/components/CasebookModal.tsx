import { useGame } from "../context/GameContext";
import { cases } from "../data/cases";
import styles from "./CasebookModal.module.css";

interface Props {
  onClose: () => void;
}

export function CasebookModal({ onClose }: Props) {
  const { state } = useGame();

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <h2>📓 Vet Detective Casebook</h2>

        {state.casesCompleted.length === 0 ? (
          <div className={styles.empty}>
            Your casebook is empty! Solve some cases first.
          </div>
        ) : (
          state.casesCompleted.map((completed) => {
            const c = cases[completed.caseIndex];
            return (
              <div key={completed.caseIndex} className={styles.caseEntry}>
                <div className={styles.caseHeader}>
                  <span>
                    {c.animal.emoji} {c.animal.name}
                  </span>
                  <span className={styles.caseStars}>
                    {completed.correct
                      ? "⭐".repeat(completed.stars) +
                        "☆".repeat(3 - completed.stars)
                      : "❌"}
                  </span>
                </div>
                <div className={styles.caseDiagnosis}>
                  Diagnosis: {c.correct}
                </div>
                <div className={styles.caseTests}>
                  Tests used: {completed.testsUsed}
                </div>
              </div>
            );
          })
        )}

        <button className={styles.closeBtn} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
