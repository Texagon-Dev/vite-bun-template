# Vite React Template (Bun)

A modern, production-ready React template built with **Vite 7**, **React 19**, **TypeScript**, and a carefully curated toolchain for rapid development. This repo is Bun-only.

## 🚀 Features

- ⚡️ **Vite 7** - Lightning fast build tool with HMR
- ⚛️ **React 19** - Latest React
- 🔷 **TypeScript** - Type safety and enhanced developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **ShadCN UI** - Beautiful, accessible component library
- 🛣️ **React Router DOM v7** - Client-side routing
- 🐻 **Zustand** - Lightweight state management
- 🔧 **ESLint & Prettier** - Code linting and formatting
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Dark Mode** - Built-in theme switching
- 🔐 **Authentication** - Complete login/signup flow
- 📁 **Well-organized** - Scalable project structure

## 📦 Tech Stack

### Core

- **Vite** - Build tool and dev server
- **React** - UI library
- **TypeScript** - Type safety
- **React Router DOM** - Routing

### Styling

- **Tailwind CSS** - Utility-first CSS
- **ShadCN UI** - Component library
- **Lucide React** - Icon library
- **class-variance-authority** - Component variants
- **clsx & tailwind-merge** - Conditional classes

### State Management

- **Zustand** - Global state management
- **React Context** - Theme management

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting

## 🏗️ Project Structure

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

Where to put what
- UI primitives: `src/components/ui/`
- App shell pieces (header/footer/layout): `src/components/layout/`
- Page-level components: `src/pages/`
- Routing: `src/lib/router.tsx`
- State: `src/stores/` (Zustand slices)
- API/client services: `src/lib/api.ts`
- Constants: `src/data/`
- Hooks: `src/hooks/`

## 🚀 Quick Start

### Prerequisites

- Bun 1.2.x (https://bun.sh)
- Node 18+ (runtime/tooling as needed)

### Installation

1. **Clone or download this template**

   ```bash
   git clone <repository-url>
   cd vite-template
   ```

2. **Install dependencies (Bun-only)**

   ```bash
   bun install
   ```

3. **Start development server**

   ```bash
   bun run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 Available Scripts (Bun)

- `bun run dev` — Start dev server
- `bun run build` — Type-check and build production
- `bun run preview` — Preview production build
- `bun run lint` — Runs Prettier write, then ESLint
- `bun run lint:fix` — ESLint --fix then Prettier write
- `bun run format` — Prettier write
- `bun run type-check` — TypeScript check only

## 🎯 Usage Guide

### Authentication

The template includes a complete authentication flow:

- **Demo Login**: Use `demo@example.com` / `password`
- **Signup**: Full registration form with validation
- **Protected Routes**: Dashboard requires authentication
- **State Management**: User state persisted with Zustand

### Routing

Routes are configured in `src/lib/router.tsx`:

```typescript
// Add new routes
{
  path: '/new-page',
  element: <NewPage />,
}
```

### State Management

Global state is managed with Zustand in `src/stores/`:

```typescript
// Access store in components
const { user, setUser } = useAppStore()
```

### Styling

The template uses Tailwind CSS with ShadCN UI components:

```tsx
// Use utility classes
<div className="flex items-center justify-center p-4">
  <Button variant="default" size="lg">
    Click me
  </Button>
</div>
```

### Adding New Components

1. **UI Components**: Add to `src/components/ui/`
2. **Page Components**: Add to `src/pages/`
3. **Shared Components**: Add to `src/components/shared/`

### Theme Management

- Theme is persisted to `localStorage` and initialized from system preference.
- The `<html>` element receives/removes the `dark` class automatically.
- Toggle via Header button (calls `useAppStore().setTheme()`):

```ts
const { theme, setTheme } = useAppStore()
setTheme(theme === 'light' ? 'dark' : 'light')
```

## 🔧 Configuration

### Tailwind CSS

Customize in `tailwind.config.js`:

```javascript
// Add custom colors, fonts, etc.
theme: {
  extend: {
    colors: {
      brand: '#your-color'
    }
  }
}
```

### ESLint & Prettier

- ESLint config: `eslint.config.js`
- Prettier config: `.prettierrc`

### TypeScript

- Single consolidated config: `tsconfig.json` (includes `src` and `vite.config.ts`)

## 🌟 Key Features Explained

### Responsive Header

- Mobile-first design
- Collapsible navigation
- Theme toggle
- User authentication state

### Form Validation

- Real-time validation
- Error handling
- Loading states
- Accessibility features

### State Persistence

- Theme preference
- User authentication
- Remember me functionality

### Component Library

- Consistent design system
- Accessible components
- Variant-based styling
- TypeScript support

## 🚀 Deployment

### Build for Production

```bash
bun run build
```

The `dist/` folder contains the production build.

### Docker (Nginx runtime)

```bash
docker build -t vite-template .
docker run -p 8080:80 vite-template
```

Open http://localhost:8080

### Netlify/Vercel

1. Connect your repository
2. Build command: `bun run build`
3. Publish directory: `dist`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

MIT License - feel free to use this template for any project!

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Review the documentation
3. Create a new issue with details

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Amazing build tool
- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [ShadCN UI](https://ui.shadcn.com/) - Component library
- [Zustand](https://zustand-demo.pmnd.rs/) - State management

---

**Happy coding! 🎉**

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for additional React-specific lint rules (optional):

```js
// eslint.config.js
{{ ... }}
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      // parserOptions.project not required unless enabling typed linting rules that need it per file
      // other options...
    },
  },
])
```
