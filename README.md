# Old Man Tech — oldmantech.github.io

Public portfolio hub for **Old Man Tech** (`oldmantech`) — Hackaday [Retrocomputing Contest](https://hackaday.io/contest/206399-retrocomputing-contest) entries and bench notes.

Live site (after Pages is enabled): [https://oldmantech.github.io/](https://oldmantech.github.io/)

## What this repo is

- Org GitHub Pages site (user/org root — **not** a `/repo` project path)
- Static Next.js export: hero, project gateway, contest framing
- Links out to per-project repos (CRT Drive today under [fractalclockwork/crt-drive](https://github.com/fractalclockwork/crt-drive) until it moves)

Hardware, firmware, and deep docs stay in those project repos — this site is the gateway.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 + shadcn/ui
- Framer Motion
- Static export (`output: "export"`) for GitHub Pages

## Run locally

```bash
npm install
npm run dev
```

Dev server: [http://127.0.0.1:43141](http://127.0.0.1:43141)

```bash
npm run build   # writes static site to out/
npm run lint
```

## Deploy to GitHub Pages

Workflow: [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)

### One-time repo settings

1. **Settings → Pages → Build and deployment → Source:** GitHub Actions
2. Merge to `main` (or run the workflow manually)
3. After the first green run, the URL appears under **Settings → Pages**

### Base path

This is an org site at `https://oldmantech.github.io/`, so **`NEXT_PUBLIC_BASE_PATH` stays empty**.

| Hosting style | Example URL | `NEXT_PUBLIC_BASE_PATH` |
| --- | --- | --- |
| Org / user site (this repo) | `https://oldmantech.github.io/` | leave empty |
| Project site | `https://oldmantech.github.io/SOME-REPO/` | `/SOME-REPO` |

Optional: set repository variable `NEXT_PUBLIC_BASE_PATH` only if you ever host this export under a project path.

`public/.nojekyll` is included so Pages serves the export without Jekyll filtering.

## Featured projects

| Project | Status | Link |
| --- | --- | --- |
| CRT Drive | Active | [fractalclockwork/crt-drive](https://github.com/fractalclockwork/crt-drive) |
| Core memory | Coming soon | — |
| Commodore Plus/4 FPGA expansion | Coming soon | — |
| Op-amp analog computers | Coming soon | — |

## Brand

**Old Man Tech** / `oldmantech` — retrocomputing on the bench.
