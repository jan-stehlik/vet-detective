# 🔍 Symptom Sleuth: Vet Detective

A browser-based detective game where you investigate mysterious animal illnesses, gather clues, and diagnose patients — just like a real veterinarian!

## How to run

```bash
npm install
npm run dev
```

## How to play

1. Open the URL shown in your terminal (usually http://localhost:5173)
2. Click **"Begin Investigation"** to start your first case
3. Use investigation tools (talk to owner, physical exam, blood test, X-ray, etc.) to gather clues
4. Review the evidence board and submit your diagnosis
5. Try to solve each case using as few tests as possible for maximum stars!

## Features

- 8 medical mystery cases across 6 animal species (dog, cat, rabbit, parrot, hamster, horse, snake)
- 8 investigation tools to gather clues
- Star rating based on diagnostic efficiency
- Hint system when you're stuck
- Score tracking, streak counter, and rank progression
- Sound effects
- High score saving between sessions

## Extending the game with Claude Code

This game is designed to be extended using [Claude Code](https://claude.ai). Open a terminal in this folder and try prompts like:

- "Add a new case about a guinea pig with a skin problem"
- "Add background music"
- "Make the animals animate when they get healed"
- "Add a difficulty selector so I can pick easy, medium, or hard"
- "Add a vet clinic name I can customize"

No coding experience needed — just describe what you want!

## Tech stack

- React + TypeScript + Vite
- CSS Modules for styling
- Web Audio API for sound effects
- No external UI libraries

## Requirements

- Node.js 18+
- Any modern web browser (Chrome, Safari, Firefox, Edge)
