# CLAUDE.md

This file guides Claude Code (claude.ai/code) when working in this repository.

## Project

凯学邦 (Kaixuebang) marketing website — the public-facing corporate/brand site at
https://kaixuebang.com. Bilingual (中文 / English) static-leaning Next.js App Router site
presenting the company vision and product matrix (Grader, 教材帮/Mentis, Course-Prism,
Daily-AI-Scholar).

## Commands

```bash
npm install      # install dependencies (npm + package-lock.json is the source of truth)
npm run dev      # start dev server with Turbopack at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # run ESLint (eslint-config-next)
```

There is no test suite in this repo.

## Stack

- **Next.js 16.1.1** (App Router, Turbopack) + **React 19.2**
- **next-intl 4** for i18n (locale-prefixed routing)
- **Tailwind CSS 4** (via `@tailwindcss/postcss`, configured in `postcss.config.mjs`)
- **TypeScript 5**

## Architecture

### Internationalization (central to routing)
- Locales: `['en', 'zh']`, **default `zh`**, `localePrefix: 'always'` — every URL is
  prefixed (`/zh/...`, `/en/...`). `/` redirects to `/zh`.
- `src/middleware.ts` — next-intl middleware that performs locale routing. (Next 16 warns
  this convention is being renamed to `proxy`; harmless for now.)
- `src/navigation.ts` — the single source of locale config. **Import `Link`, `redirect`,
  `usePathname`, `useRouter` from here**, not from `next/link` / `next/navigation`, so they
  stay locale-aware.
- `src/i18n/request.ts` — loads `messages/{locale}.json` per request.
- `messages/en.json`, `messages/zh.json` — all copy lives here. **When adding/changing UI
  text, update BOTH files** with matching keys.
- `next.config.ts` wires next-intl via `createNextIntlPlugin('./src/i18n/request.ts')`.

### Routing
All pages live under `src/app/[locale]/`:
- `page.tsx` — home
- `about/`, `grader/`, `mentis/`, `course-prism/`, `daily-ai-scholar/` — product/company pages
- `src/app/[locale]/layout.tsx` — root layout, injects Organization JSON-LD structured data
- `src/sitemap.ts`, `src/app/robots.ts` — SEO

### Components
`src/components/` holds the shared UI: `Header`, `Footer`, `Hero`, `BentoGrid`,
`KnowledgeGraph` (canvas graph engine), `OpenSource`.

### Conventions
- Path alias: `@/*` → `src/*`.
- Static assets in `public/`. **Reference assets with their exact lowercase filename**
  (e.g. `/logo.png`) — deployment is on case-sensitive Linux, so casing must match the file
  on disk exactly.

## Deployment

Runs in production as a systemd-managed Next.js server (`next start -p 3003`) behind Caddy
on the host serving `kaixuebang.com`. The repo's `main` branch is the deployed source of
truth (GitHub: `kaixuebang/web`).

## Git commit convention

Commits are authored solely by the repository owner. **Do NOT add any Claude / AI
co-author or attribution trailer** (no `Co-Authored-By: Claude`, no "Generated with Claude
Code" line) to commit messages or PR descriptions. Write the message as the user's own.

# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
