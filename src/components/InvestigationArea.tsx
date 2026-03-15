import { useGame } from "../context/GameContext";
import { investigationTools } from "../data/tools";
import { useSound } from "../hooks/useSound";
import styles from "./InvestigationArea.module.css";

export function InvestigationArea() {
  const { state, dispatch } = useGame();
  const { playSound } = useSound();

  const handleUseTool = (toolId: string) => {
    playSound("clue");
    dispatch({ type: "USE_TOOL", toolId });
  };

  return (
    <div className={styles.container}>
      <div className={styles.toolsSection}>
        <h2>🧰 Investigation Tools</h2>
        <div className={styles.toolsGrid}>
          {investigationTools.map((tool) => {
            const used = state.usedTools.includes(tool.id);
            return (
              <button
                key={tool.id}
                className={`${styles.toolBtn} ${used ? styles.toolUsed : ""}`}
                disabled={used || state.diagnosed}
                onClick={() => handleUseTool(tool.id)}
              >
                <span className={styles.toolIcon}>{tool.icon}</span>
                <span>{tool.name}</span>
                <span className={styles.toolCost}>
                  {tool.cost === 1 ? "⚡" : "⚡⚡"}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.clueSection}>
        <h2>📝 Investigation Results</h2>
        {state.lastClue ? (
          <div className={styles.clueContent} key={state.lastClue.clue}>
            <strong>
              {state.lastClue.icon} {state.lastClue.toolName}:
            </strong>
            <br />
            <br />
            {state.lastClue.clue}
          </div>
        ) : (
          <div className={styles.clueEmpty}>
            Select an investigation tool to begin gathering clues...
          </div>
        )}
      </div>
    </div>
  );
}
