# Symptom Sleuth: Vet Detective

A React + Vite + TypeScript browser game where you play as a vet detective solving animal medical mysteries.

## How to run
```bash
npm install
npm run dev
```

## Project structure

```
src/
├── main.tsx                    # Entry point, renders App inside GameProvider
├── App.tsx                     # Screen router (title / game / summary)
├── theme.css                   # CSS variables, global resets, keyframe animations
├── types.ts                    # All TypeScript interfaces and types
├── data/
│   ├── cases.ts                # The 8 mystery cases (add new cases here!)
│   ├── tools.ts                # Investigation tools (talk to owner, blood test, etc.)
│   └── ranks.ts                # Rank progression titles
├── context/
│   └── GameContext.tsx          # Game state management (useReducer + Context)
├── hooks/
│   ├── useSound.ts             # Web Audio API sound effects
│   └── useHighScores.ts        # localStorage high score persistence
├── utils/
│   └── scoring.ts              # Star calculation, points, rank lookup
└── components/
    ├── TitleScreen.tsx          # Start screen
    ├── GameScreen.tsx           # Main game layout (header + 3-panel grid)
    ├── CaseFile.tsx             # Left panel: patient info, owner, vitals
    ├── InvestigationArea.tsx    # Center: tool buttons + clue reveal
    ├── EvidenceBoard.tsx        # Right: evidence list + diagnosis buttons + hints
    ├── ResultOverlay.tsx        # Post-diagnosis result modal
    ├── SummaryOverlay.tsx       # End-of-game summary with scores
    └── CasebookModal.tsx        # Notebook of solved cases
```

## How to add a new case

Add an object to the `cases` array in `src/data/cases.ts`:
- `animal` — name, emoji, species
- `owner` — name, chief complaint
- `difficulty` — 1 (easy), 2 (medium), 3 (hard)
- `investigations` — what each tool reveals (keyed by tool ID)
- `diagnoses` — 4 options (one correct)
- `correct` — the right answer
- `explanation` — educational text shown after solving
- `hint` — optional hint text
- `vitals` — vital signs string

Tool IDs: `talk-owner`, `physical-exam`, `temperature`, `blood-test`, `xray`, `urine-test`, `skin-scrape`, `ultrasound`

## Key patterns

- **State management**: `useReducer` in `GameContext.tsx`. All game state mutations go through dispatch actions.
- **Styling**: CSS Modules (`.module.css` per component) + shared CSS variables in `theme.css`.
- **Sound**: Web Audio API via `useSound` hook — no audio files needed.
- **Data-driven**: Cases, tools, and ranks are plain arrays of typed objects. Add new content by appending to arrays.

## Important rules when editing

- Use emoji for all visual elements (no external images).
- Keep the data-driven pattern: add new content by adding objects to arrays.
- Each component has its own `.module.css` file for styles.
- The game is for a 13-year-old who wants to be a vet — keep content age-appropriate and educational.
