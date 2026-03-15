import { useGame } from "../context/GameContext";
import { cases } from "../data/cases";
import styles from "./CaseFile.module.css";

export function CaseFile() {
  const { state } = useGame();
  const c = cases[state.currentCaseIndex];

  return (
    <div className={styles.caseFile}>
      <h2 className={styles.heading}>📁 Case File</h2>

      <div className={styles.patientCard}>
        <span className={styles.patientEmoji}>{c.animal.emoji}</span>
        <div className={styles.patientName}>{c.animal.name}</div>
        <div className={styles.patientSpecies}>{c.animal.species}</div>
        <div className={styles.difficulty}>
          <span style={{ fontSize: "0.85rem", marginRight: "0.3rem" }}>
            Difficulty:
          </span>
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className={i <= c.difficulty ? styles.star : styles.starEmpty}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <div className={styles.ownerInfo}>
        <div>
          <span className={styles.label}>Owner:</span> {c.owner.name}
        </div>
        <div style={{ marginTop: "0.5rem" }}>
          <span className={styles.label}>Chief Complaint:</span>
        </div>
        <div style={{ marginTop: "0.3rem", fontStyle: "italic" }}>
          "{c.owner.complaint}"
        </div>
      </div>

      {c.vitals && (
        <div>
          <div className={styles.vitals}>Vital Signs:</div>
          <div className={styles.vitalsContent}>{c.vitals}</div>
        </div>
      )}
    </div>
  );
}
