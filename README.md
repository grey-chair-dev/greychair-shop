

# Grey Chair Tea — Batavia’s Neighborhood Tea Shop

A small React + Vite site for **Grey Chair Tea (Batavia, Ohio)**, including pages for the shop, events, recipes, and a **Tea Finder AI** powered by Gemini.

## Tech stack

- **React 19** + **TypeScript**
- **Vite** (dev server runs on **port 3000**)
- **Gemini** via `@google/genai`

## Run locally

**Prerequisites:** Node.js (recommended: latest LTS)

1. Install dependencies:

```bash
cd greychair-shop
npm install
```

2. Create `greychair-shop/.env.local` and set your Gemini key:

```bash
GEMINI_API_KEY=YOUR_KEY_HERE
```

3. Start the dev server:

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Build & preview

```bash
npm run build
npm run preview
```

## Notes on the Gemini key

This app reads the key via `process.env.API_KEY` at runtime (Vite injects `GEMINI_API_KEY` into `process.env.API_KEY`), so `GEMINI_API_KEY` must be present in your local env files.

## Project structure (high level)

- `components/`: page + section components (Shop, Events, Recipes, Visit, etc.)
- `services/gemini.ts`: Tea Finder AI call + response schema
- `App.tsx`: routes / top-level composition
