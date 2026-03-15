# Symptom Sleuth: Vet Detective

A single-file browser game (index.html) where you play as a vet detective solving animal medical mysteries.

## How to run
Just open `index.html` in a browser (double-click it). No install needed.

## How the code is organized (all in one file)

The file has clearly labeled sections:

- **SECTION 1: GAME DATA** — All the cases, investigation tools, and ranks. This is where you add new animals, diseases, and cases.
- **SECTION 2: GAME STATE** — Tracks score, current case, streak, etc.
- **SECTION 3: SOUND EFFECTS** — Generates sounds using Web Audio API (no sound files needed).
- **SECTION 4: GAME LOGIC** — Core functions like calculating stars and points.
- **SECTION 5: UI / DISPLAY** — Functions that update what you see on screen.
- **SECTION 6: PLAYER ACTIONS** — What happens when you click tools or submit a diagnosis.
- **SECTION 7: RESULTS & PROGRESSION** — Result screen, summary, casebook.
- **SECTION 8: SAVE / LOAD** — High score saving with localStorage.
- **SECTION 9: START / RESTART** — Game initialization.

## How to add a new case

Each case is an object in the `cases` array with:
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

## Important rules when editing

- This is a SINGLE HTML FILE. Keep everything in index.html.
- Use emoji for all visual elements (no external images).
- Use CSS animations for visual effects.
- Use Web Audio API for sounds (no audio files).
- Keep the data-driven pattern: add new content by adding objects to arrays.
- Always test that the game still loads after changes by refreshing the browser.
- The game is for a 13-year-old who wants to be a vet — keep content age-appropriate and educational.
