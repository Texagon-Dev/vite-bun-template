# Usage Guide (From Cloning to Deployment)

IMPORTANT: This repo uses Bun. Do not use npm/yarn/pnpm here.
- Install deps: `bun install`
- Run scripts: `bun run <script>`
- Execute CLIs: `bunx <cli>`
- Audit: `bun audit`

---

## 1) Prerequisites
- Bun 1.2.x installed (https://bun.sh)
- Node 18+ available on the system (for tooling only; installs use Bun)
- Git access
- VS Code recommended (workspace files in `.vscode/` included)

---

## 2) Clone the Repository
```bash
# HTTPS
git clone <your-repository-url>
cd vite-template

# OR SSH
# git clone git@github.com:<org-or-user>/<repo>.git
```

Optionally create a branch for your work (adjust name to match your policy):
```bash
git checkout -b feat/homepage-cta
```

---

## 3) Install Dependencies (Bun-only)
```bash
bun install
```
This reads and writes `bun.lock`, the single source of truth for dependency resolution.

---

## 4) Project Structure (What goes where)
```
.vscode/                    # Workspace settings and recommendations
public/                     # Static assets served at /
src/
├── App.tsx                 # App shell selecting layout or bare auth views
├── index.css               # Global CSS (Tailwind)
├── main.tsx                # React root + RouterProvider
├── components/
│   ├── auth/               # AuthGuard, AuthProvider
│   ├── layout/             # Header, Footer, Layout
│   ├── shared/             # ErrorBoundary, Loading, Notification
│   └── ui/                 # Button, Card primitives, etc.
├── contexts/               # Optional contexts (ThemeContext)
├── data/                   # Constants and static data
├── hooks/                  # Custom hooks (e.g., useLocalStorage)
├── lib/                    # api client, router, utilities
│   ├── api.ts              # API client + mock API
│   ├── router.tsx          # Central routes (Home, Login, Signup)
│   └── utils.ts            # Helpers (e.g., cn)
├── pages/
│   ├── HomePage.tsx        # Homepage (hero, features, CTA)
│   ├── login/              # LoginPage.tsx
│   └── signup/             # SignupPage.tsx
├── stores/                 # Zustand stores
│   └── useAppStore.ts      # theme/user/loading; persists theme and toggles <html>.dark
└── vite-env.d.ts
```
- New page: add in `src/pages/`, then register route in `src/lib/router.tsx`.
- Shared UI: `src/components/ui/`
- App shell: `src/components/layout/`
- API/client: `src/lib/api.ts`
- State: `src/stores/`
- Constants: `src/data/`
- Hooks: `src/hooks/`

---

## 5) Environment Setup
Use `.env` files at project root if needed (Vite convention). Client-exposed vars must start with `VITE_`.
```bash
# .env.local (not committed)
VITE_API_BASE_URL=https://api.example.com
```
- Do NOT prefix server-only secrets with `VITE_`.

---

## 6) Editor Setup (VS Code)
This repo includes `.vscode/` workspace files:
- `extensions.json`: recommends ESLint, Prettier, Tailwind, EditorConfig, GitLens, Spell Checker
- `settings.json`: format on save, ESLint fixes and import organize on save, Tailwind class regex, ESLint flat-config

---

## 7) Scripts (Development & Quality)
```bash
# Start dev server (http://localhost:3000)
bun run dev

# Type-check + build production
bun run build

# Preview production build on http://localhost:4173
bun run preview

# Lint and format
bun run lint       # Prettier write, then ESLint
bun run lint:fix   # ESLint --fix then Prettier write

# Format only
bun run format

# Type-check only
bun run type-check

# Security audit
bun audit
```

ESLint setup:
- Flat config (ESLint 9+)
- React, Hooks, Import, JSX-a11y, Prettier integration
- Import order enforced
- TS rules are stricter in `.ts` and relaxed for `.tsx` components (return-type rule)

---

## 8) Theme Management
- Theme is persisted to `localStorage` and initialized from system preference.
- `<html>` automatically toggles the `dark` class.
- Toggle using Header button (calls `useAppStore().setTheme()`):
```ts
const { theme, setTheme } = useAppStore()
setTheme(theme === 'light' ? 'dark' : 'light')
```

---

## 9) Git Workflow (example)
```bash
git add -A
git commit -m "feat: implement feature"
git push -u origin <your-branch>
```
Open a PR and ensure checks pass:
- Lint & Prettier (bun run lint)
- Build (bun run build)

---

## 10) Deployment

### Option A: Docker (Nginx runtime)
```bash
docker build -t vite-template .
docker run -p 8080:80 vite-template
```
Open http://localhost:8080

### Option B: Static Host (Netlify/Vercel/Cloudflare Pages)
- Build command: `bun run build`
- Publish directory: `dist`

### Option C: Custom Hosting
- Serve `dist/` with any static web server (Nginx, Apache, CDN)

---

## 11) Troubleshooting
- Installed with npm/yarn/pnpm by mistake
  - Remove non-Bun lockfiles (`package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`)
  - Re-run `bun install`

- ESLint errors for React plugin not found
  - Ensure dev deps are installed via Bun; re-run `bun install`

- Tailwind classes not recognized in VS Code
  - Confirm `.vscode/settings.json` is active (workspace settings)

- Dark mode not applying
  - Check localStorage key `theme` and ensure `<html>` has `dark` class in dark mode

---

## 12) FAQ
- Why Bun-only?
  - Faster installs, single lockfile, and consistent local/CI behavior.
- Can I add React 19 type packages?
  - No need. React 19 ships its own types.
- Where are routes?
  - `src/lib/router.tsx`. Add new routes here.

---

## 13) Contact
Open an issue or PR in this repository for feedback and contributions.
