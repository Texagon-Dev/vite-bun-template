import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

function getInitialTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
  if (stored === 'light' || stored === 'dark') return stored
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

function applyTheme(theme: 'light' | 'dark'): void {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  if (theme === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

interface AppState {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void

  user: {
    id: string | null
    name: string | null
    email: string | null
  }
  setUser: (user: AppState['user']) => void
  clearUser: () => void

  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export const useAppStore = create<AppState>()(
  devtools(
    (set) => ({
      theme: getInitialTheme(),
      setTheme: (theme) => {
        applyTheme(theme)
        localStorage.setItem('theme', theme)
        set({ theme })
      },
      user: {
        id: null,
        name: null,
        email: null,
      },
      setUser: (user) => set({ user }),
      clearUser: () =>
        set({
          user: { id: null, name: null, email: null },
        }),
      isLoading: false,
      setIsLoading: (isLoading) => set({ isLoading }),
    }),
    {
      name: 'app-store',
    }
  )
)

// Apply theme on initial load
if (typeof window !== 'undefined') {
  const current = getInitialTheme()
  applyTheme(current)
}
