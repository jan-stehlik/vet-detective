export interface Animal {
  name: string;
  emoji: string;
  species: string;
}

export interface Owner {
  name: string;
  complaint: string;
}

export interface Investigation {
  clue: string;
  icon: string;
}

export interface Case {
  animal: Animal;
  owner: Owner;
  difficulty: 1 | 2 | 3;
  investigations: Record<string, Investigation>;
  diagnoses: string[];
  correct: string;
  explanation: string;
  hint?: string;
  vitals?: string;
}

export interface Tool {
  id: string;
  name: string;
  icon: string;
  cost: number;
  description: string;
}

export interface Rank {
  title: string;
  minScore: number;
}

export interface CompletedCase {
  caseIndex: number;
  correct: boolean;
  stars: number;
  testsUsed: number;
}

export interface GameState {
  screen: "title" | "game" | "summary";
  currentCaseIndex: number;
  score: number;
  streak: number;
  bestStreak: number;
  casesCompleted: CompletedCase[];
  usedTools: string[];
  evidenceFound: { icon: string; text: string }[];
  hintsUsed: number;
  diagnosed: boolean;
  lastClue: { toolName: string; icon: string; clue: string } | null;
  showResult: boolean;
  resultData: { correct: boolean; stars: number; points: number } | null;
}

export type GameAction =
  | { type: "START_GAME" }
  | { type: "USE_TOOL"; toolId: string }
  | { type: "SUBMIT_DIAGNOSIS"; diagnosis: string }
  | { type: "USE_HINT" }
  | { type: "NEXT_CASE" }
  | { type: "SHOW_SUMMARY" }
  | { type: "RESTART_GAME" };
