import { useMemo, useState } from "react";
import { useGame } from "../context/GameContext";
import { cases } from "../data/cases";
import { useSound } from "../hooks/useSound";
import styles from "./EvidenceBoard.module.css";

export function EvidenceBoard() {
  const { state, dispatch } = useGame();
  const { playSound } = useSound();
  const [selectedDiagnosis, setSelectedDiagnosis] = useState<string | null>(null);
  const c = cases[state.currentCaseIndex];

  // Shuffle diagnoses once per case
  const shuffledDiagnoses = useMemo(
    () => [...c.diagnoses].sort(() => Math.random() - 0.5),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.currentCaseIndex]
  );

  const handleDiagnosis = (diagnosis: string) => {
    if (state.diagnosed) return;
    setSelectedDiagnosis(diagnosis);
    const correct = diagnosis === c.correct;
    playSound(correct ? "correct" : "wrong");
    // Small delay so the animation shows before the overlay
    setTimeout(() => {
      dispatch({ type: "SUBMIT_DIAGNOSIS", diagnosis });
    }, 600);
  };

  const handleHint = () => {
    playSound("click");
    dispatch({ type: "USE_HINT" });
  };

  const getDiagnosisBtnClass = (diag: string) => {
    if (!selectedDiagnosis || selectedDiagnosis !== diag) return styles.diagnosisBtn;
    const correct = diag === c.correct;
    return `${styles.diagnosisBtn} ${correct ? styles.correct : styles.wrong}`;
  };

  return (
    <div className={styles.board}>
      <h2>📌 Evidence Board</h2>

      <div className={styles.evidenceList}>
        {state.evidenceFound.length === 0 ? (
          <div className={styles.placeholder}>
            Clues you discover will appear here
          </div>
        ) : (
          state.evidenceFound.map((ev, i) => (
            <div key={i} className={styles.evidenceItem}>
              <span className={styles.evidenceIcon}>{ev.icon}</span>
              <span>{ev.text}</span>
            </div>
          ))
        )}
      </div>

      <div className={styles.diagnosisSection}>
        <h3>🩺 Submit Diagnosis</h3>
        {shuffledDiagnoses.map((diag) => (
          <button
            key={diag}
            className={getDiagnosisBtnClass(diag)}
            disabled={state.diagnosed}
            onClick={() => handleDiagnosis(diag)}
          >
            {diag}
          </button>
        ))}
        <button
          className={styles.hintBtn}
          disabled={state.hintsUsed > 0}
          onClick={handleHint}
        >
          {state.hintsUsed > 0 ? "💡 Hint used" : "💡 Need a hint?"}
        </button>
        {state.hintsUsed > 0 && c.hint && (
          <div className={styles.hintText}>{c.hint}</div>
        )}
      </div>
    </div>
  );
}
