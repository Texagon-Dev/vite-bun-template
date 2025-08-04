import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

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
      theme: 'light',
      setTheme: (theme) => set({ theme }),
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
