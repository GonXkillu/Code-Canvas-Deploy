# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### `artifacts/portfolio` — Aahana Bobade Portfolio

VSCode-themed interactive portfolio website. Single-page React app with a simulated IDE interface.

- **Route**: `/` (root)
- **Stack**: React + Vite + TailwindCSS + lucide-react
- **Entry**: `artifacts/portfolio/src/App.tsx`
- **No backend required** — fully static frontend
- **Sections** (accessed as "files" in the sidebar):
  - `home.tsx` — Hero page with typing animation and stats
  - `about.html` — Bio, current focus, education
  - `projects.js` — 6 project cards
  - `skills.json` — Animated skill bars across 8+ categories
  - `experience.ts` — Timeline of work experience
  - `contact.css` — Social links + contact form
  - `README.md` — GitHub-style readme

## Structure

```text
artifacts-monorepo/
├── artifacts/
│   ├── portfolio/          # Aahana Bobade portfolio (React+Vite)
│   └── api-server/         # Express API server
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── tsconfig.json
└── package.json
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck`
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/portfolio` (`@workspace/portfolio`)

Static React+Vite portfolio. No backend. All content is hardcoded in `App.tsx`.

- `pnpm --filter @workspace/portfolio run dev` — dev server
- `pnpm --filter @workspace/portfolio run build` — production build

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- `pnpm --filter @workspace/api-server run dev` — dev server

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL.

### `lib/api-spec` (`@workspace/api-spec`)

OpenAPI spec + Orval codegen. Run: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec.
