# AI Layers and Elements

Interactive periodic-table-style flashcards based on the AI Founders video "You're Learning AI Wrong. Here's The Cheat Sheet."

Live site: https://tompinataro.github.io/AI-Founders-Periodic-Table/

## Source

- Channel: AI Founders
- Video ID: `Zd8dA7bijzo`
- Mirror/date check: https://www.heatherjones.org/youre-learning-ai-wrong-heres-the-cheat-sheet/
- Mirror publication date: April 21, 2026
- Transcript capture: `ai_founders_transcript.txt`

## Status

- React/Vite app scaffolded.
- Eight group columns implemented.
- Combined group header cards implemented.
- Element flip cards implemented.
- Reverse sides scroll when their text is longer than the card.
- Blank reset strip closes every open card.
- Normalized dataset lives in `src/data/aiCheatSheetData.js`.
- Transcript notes and uncertainties live in `AI_FOUNDERS_FLASHCARDS_NOTES.md`.

## Run Locally

```bash
npm install
npm run dev
```

## View Without a Dev Server

Open `ai-founders-periodic-flashcards.html` directly in a browser. It is a standalone build with the app CSS and JavaScript inlined.

## Build

```bash
npm run build
```
