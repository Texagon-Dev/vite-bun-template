# Vite React Template

A modern, production-ready React template built with **Vite 7**, **React 18**, **TypeScript**, and a carefully curated set of tools and libraries for rapid development.

## 🚀 Features

- ⚡️ **Vite 7** - Lightning fast build tool with HMR
- ⚛️ **React 18** - Latest React with concurrent features
- 🔷 **TypeScript** - Type safety and enhanced developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **ShadCN UI** - Beautiful, accessible component library
- 🛣️ **React Router DOM v7.7.1** - Client-side routing
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
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── shared/         # Shared utility components
│   └── ui/             # Base UI components (Button, Card, etc.)
├── contexts/           # React contexts
├── data/              # Constants and static data
├── hooks/             # Custom React hooks
├── lib/               # Utility libraries and configurations
├── pages/             # Page components
│   ├── dashboard/     # Dashboard page
│   ├── landing/       # Landing page
│   ├── login/         # Login page
│   └── signup/        # Signup page
├── services/          # API services and external integrations
├── stores/            # Zustand stores
├── utils/             # Utility functions
└── main.tsx           # Application entry point
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone or download this template**

   ```bash
   git clone <repository-url>
   cd vite-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

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

Built-in dark/light mode switching:

```typescript
// Toggle theme
const { theme, toggleTheme } = useAppStore()
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

- Main config: `tsconfig.json`
- App config: `tsconfig.app.json`
- Node config: `tsconfig.node.json`

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
npm run build
```

The `dist/` folder contains the production build.

### Deploy to Netlify/Vercel

1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

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

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

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
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
