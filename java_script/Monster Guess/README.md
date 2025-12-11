# Monster Guess

Monster Guess is a small browser-based guessing game that fetches monster data and rewards points based on how many and which hints the player requests.

## Overview
- **What it is:** A simple client-side game where the player guesses a monster's name based on hints pulled from an external monster API.
- **Pages:** `index.html` (welcome/start), `game.html` (play the game), `stats.html` (view saved scores/stats).

## How it works
- The game logic lives in `scripts/game.mjs`.
  - A random monster id is chosen (`Math.floor(Math.random()*33)`) and data is fetched from `https://wilds.mhdb.io/en/monsters/<id>`.
  - The player starts with 120 points. Requesting hints reduces the current points by the values in the UI (e.g. description −30, ailment −15, etc.).
  - When the player submits a guess the input is compared to the monster `data.name` (case-insensitive). Correct guesses award the remaining points; incorrect guesses set points to 0.
  - Score updates are saved to `localStorage` using helper functions in `scripts/stats.mjs`.

## Files of interest
- `index.html` — welcome page and link to start the game.
- `game.html` — main gameplay UI. Uses `scripts/renderHeader.mjs` to render the site header, `scripts/game.mjs` for gameplay behavior, and `css/style.css` for styling.
- `stats.html` — displays aggregated statistics; populated by `scripts/stats.mjs`.
- `scripts/game.mjs` — game logic, fetches monster data, renders hints, handles submit and hint button behavior.
- `scripts/stats.mjs` — localStorage helpers and rendering of statistics on `stats.html` (`best`, `total`, `average`, and `mon` list).
- `scripts/renderHeader.mjs` — injects the header navigation into pages.
- `css/style.css` — basic layout and styling.

## Data source
- The game fetches monster details from `https://wilds.mhdb.io/en/monsters/<id>` (the MHDB API used by the code). If the API is unavailable the game attempts to retry.

## Running locally
You can open `index.html` directly in a browser, but serving files over HTTP avoids any module/CORS edge cases. From the project folder run one of these commands:

```
# Python 3 (simple HTTP server)
python3 -m http.server 8000

# Or with Node (if you have http-server installed)
npx http-server -p 8000
```

Then open `http://localhost:8000` and click "Start".

## Notes / Troubleshooting
- The game uses Font Awesome via a kit script tag; an internet connection is required to load those icons.
- Scores and monster history are stored in `localStorage` under the keys: `best`, `total`, `average` (array of scores), and `mon` (array of monster names). Clearing browser storage will remove saved stats.
- If the API schema changes or returns unexpected values some hint rendering may fail. The code currently attempts a retry on fetch errors.

## License
This repository contains simple demo code; add a license if you plan to share or publish it.
