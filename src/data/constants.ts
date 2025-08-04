// TODO : This is just a Sample Data. Please Implement as per the Project Requirements.

export const APP_CONFIG = {
  name: 'Vite Template',
  version: '1.0.0',
  description:
    'A modern React template with Vite, TypeScript, and Tailwind CSS',
  author: 'Your Name',
  repository: 'https://github.com/yourusername/vite-template',
}

export const API_CONFIG = {
  baseUrl: process.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  retries: 3,
}

export const THEME_CONFIG = {
  defaultTheme: 'light' as const,
  storageKey: 'vite-template-theme',
}

export const NAVIGATION_ITEMS = [
  { path: '/', label: 'Home', icon: 'Home' },
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: 'LayoutDashboard',
    requiresAuth: true,
  },
  {
    path: '/story/select-genre',
    label: 'Create Story',
    icon: 'PenTool',
    requiresAuth: true,
  },
] as const

export const STORY_GENRES = [
  {
    id: 'fantasy',
    name: 'Fantasy',
    description: 'Magic, mythical creatures, and otherworldly adventures',
  },
  {
    id: 'sci-fi',
    name: 'Science Fiction',
    description:
      'Future technology, space exploration, and scientific concepts',
  },
  {
    id: 'mystery',
    name: 'Mystery',
    description: 'Puzzles, detective work, and suspenseful investigations',
  },
  {
    id: 'romance',
    name: 'Romance',
    description: 'Love stories, relationships, and emotional connections',
  },
  {
    id: 'thriller',
    name: 'Thriller',
    description: 'High stakes, tension, and edge-of-your-seat excitement',
  },
  {
    id: 'adventure',
    name: 'Adventure',
    description: 'Journeys, exploration, and exciting quests',
  },
] as const

export const VALIDATION_MESSAGES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  password: {
    minLength: 'Password must be at least 6 characters',
    weak: 'Password is too weak',
    mismatch: 'Passwords do not match',
  },
  name: {
    minLength: 'Name must be at least 2 characters',
  },
} as const

export const STORAGE_KEYS = {
  theme: 'vite-template-theme',
  rememberMe: 'rememberMe',
  userEmail: 'userEmail',
  authToken: 'authToken',
} as const
