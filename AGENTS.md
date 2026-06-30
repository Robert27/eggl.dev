# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single Next.js 16 (App Router, Turbopack, React Compiler) personal portfolio website. There is no database, no docker-compose, and no monorepo — just one app at the repo root. Package manager is **Bun**.

### Services

| Service | Command | Port | Notes |
| --- | --- | --- | --- |
| Next.js dev server | `bun run dev` | 3000 | The entire product (frontend + blog + `/api/*` routes). |

### Non-obvious notes

- **Bun is the package manager** (`bun.lock`). The startup update script installs Bun to `~/.bun/bin` and adds it to `PATH` via `~/.bashrc`. If `bun` is not found in a fresh shell, run `export PATH="$HOME/.bun/bin:$PATH"`.
- **Contentlayer must be generated before type-checking/building.** `bun install` runs `contentlayer2 postinstall`, but a full content build (`bunx contentlayer2 build`, aka `bun run build:content`) generates `.contentlayer/generated`, which `/api/feed` and blog pages import. Run it before `bunx tsc --noEmit` or `next build`. The dev server (`bun run dev`) builds content automatically.
- **Lint/format uses Biome**, not ESLint: `bun run lint` (lint), `bun run fmt` (check + autofix). CI runs `bunx biome ci .`.
- **CI equivalent checks** (`.github/workflows/ci.yml`): `bun install --frozen-lockfile` → `bunx contentlayer2 build` → `bunx tsc --noEmit` → `bunx biome ci .`.
- **Env vars are all optional** with graceful fallbacks. `GITHUB_STATS_TOKEN` powers the live GitHub stats widget (`/api/github`); without it the route returns empty data and logs a warning, but the app still runs fine.
