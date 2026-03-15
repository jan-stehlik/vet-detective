import { useGame } from "../context/GameContext";
import styles from "./TitleScreen.module.css";

export function TitleScreen() {
  const { dispatch } = useGame();

  return (
    <div className={styles.container}>
      <div className={styles.magnifyingGlass}>🔍</div>
      <h1 className={styles.title}>Symptom Sleuth</h1>
      <div className={styles.subtitle}>Vet Detective Agency</div>
      <p className={styles.description}>
        Animals are counting on you! Investigate symptoms, gather clues, run
        tests, and diagnose mysterious illnesses. Can you crack every case?
      </p>
      <div className={styles.features}>
        <div className={styles.featurePill}>
          🩺 <span>Examine</span> patients
        </div>
        <div className={styles.featurePill}>
          🔬 <span>Run tests</span> for clues
        </div>
        <div className={styles.featurePill}>
          🧩 <span>Solve</span> the mystery
        </div>
      </div>
      <button
        className={styles.startBtn}
        onClick={() => dispatch({ type: "START_GAME" })}
      >
        Begin Investigation 🔎
      </button>
    </div>
  );
}
