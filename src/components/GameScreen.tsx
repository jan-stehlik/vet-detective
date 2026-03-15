import { useState } from "react";
import { useGame } from "../context/GameContext";
import { cases } from "../data/cases";
import { investigationTools } from "../data/tools";
import { getRank } from "../utils/scoring";
import { CaseFile } from "./CaseFile";
import { InvestigationArea } from "./InvestigationArea";
import { EvidenceBoard } from "./EvidenceBoard";
import { ResultOverlay } from "./ResultOverlay";
import { CasebookModal } from "./CasebookModal";
import styles from "./GameScreen.module.css";

export function GameScreen() {
  const { state } = useGame();
  const [showCasebook, setShowCasebook] = useState(false);
  const rank = getRank(state.score);
  const usedPct = (state.usedTools.length / investigationTools.length) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.timerBarContainer}>
        <div
          className={styles.timerBar}
          style={{ width: `${Math.max(0, 100 - usedPct)}%` }}
        />
      </div>

      <div className={styles.header}>
        <div className={styles.rank}>{rank.title}</div>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statIcon}>📋</span>
            <span>
              Case <span className={styles.statValue}>{state.currentCaseIndex + 1}</span>/
              {cases.length}
            </span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statIcon}>⭐</span>
            <span>
              Score: <span className={styles.statValue}>{state.score}</span>
            </span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statIcon}>🏅</span>
            <span>
              Streak: <span className={styles.statValue}>{state.streak}</span>
            </span>
          </div>
          <button
            className={styles.notebookBtn}
            onClick={() => setShowCasebook(true)}
          >
            📓 Casebook
          </button>
        </div>
      </div>

      <div className={styles.layout}>
        <CaseFile />
        <InvestigationArea />
        <EvidenceBoard />
      </div>

      {state.showResult && <ResultOverlay />}
      {showCasebook && (
        <CasebookModal onClose={() => setShowCasebook(false)} />
      )}
    </div>
  );
}
