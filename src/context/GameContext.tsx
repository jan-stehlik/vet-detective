import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { GameState, GameAction } from "../types";
import { cases } from "../data/cases";
import { investigationTools } from "../data/tools";
import { calculateStars, calculatePoints } from "../utils/scoring";

const initialState: GameState = {
  screen: "title",
  currentCaseIndex: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  casesCompleted: [],
  usedTools: [],
  evidenceFound: [],
  hintsUsed: 0,
  diagnosed: false,
  lastClue: null,
  showResult: false,
  resultData: null,
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "START_GAME":
      return { ...initialState, screen: "game" };

    case "USE_TOOL": {
      if (state.diagnosed || state.usedTools.includes(action.toolId)) return state;
      const currentCase = cases[state.currentCaseIndex];
      const investigation = currentCase.investigations[action.toolId];
      if (!investigation) return state;
      const tool = investigationTools.find((t) => t.id === action.toolId);
      const shortClue =
        investigation.clue.length > 100
          ? investigation.clue.substring(0, 100) + "..."
          : investigation.clue;
      return {
        ...state,
        usedTools: [...state.usedTools, action.toolId],
        evidenceFound: [
          ...state.evidenceFound,
          { icon: investigation.icon, text: shortClue },
        ],
        lastClue: {
          toolName: tool?.name ?? "",
          icon: investigation.icon,
          clue: investigation.clue,
        },
      };
    }

    case "SUBMIT_DIAGNOSIS": {
      if (state.diagnosed) return state;
      const currentCase = cases[state.currentCaseIndex];
      const correct = action.diagnosis === currentCase.correct;
      const newStreak = correct ? state.streak + 1 : 0;
      const stars = calculateStars(
        state.usedTools.length,
        correct,
        state.hintsUsed > 0
      );
      const points = correct
        ? calculatePoints(stars, currentCase.difficulty, state.streak)
        : 0;
      return {
        ...state,
        diagnosed: true,
        streak: newStreak,
        bestStreak: Math.max(state.bestStreak, newStreak),
        score: state.score + points,
        casesCompleted: [
          ...state.casesCompleted,
          {
            caseIndex: state.currentCaseIndex,
            correct,
            stars,
            testsUsed: state.usedTools.length,
          },
        ],
        showResult: true,
        resultData: { correct, stars, points },
      };
    }

    case "USE_HINT":
      return { ...state, hintsUsed: state.hintsUsed + 1 };

    case "NEXT_CASE": {
      const nextIndex = state.currentCaseIndex + 1;
      if (nextIndex >= cases.length) {
        return { ...state, screen: "summary", showResult: false };
      }
      return {
        ...state,
        currentCaseIndex: nextIndex,
        usedTools: [],
        evidenceFound: [],
        hintsUsed: 0,
        diagnosed: false,
        lastClue: null,
        showResult: false,
        resultData: null,
      };
    }

    case "SHOW_SUMMARY":
      return { ...state, screen: "summary", showResult: false };

    case "RESTART_GAME":
      return { ...initialState, screen: "game" };

    default:
      return state;
  }
}

interface GameContextValue {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
}

const GameContext = createContext<GameContextValue | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used within GameProvider");
  return ctx;
}
