import { type ReactNode, useEffect } from 'react'
import { useAppStore } from '@/stores/useAppStore'
// TODO : Implement auth provider Completely
interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { setUser } = useAppStore()

  useEffect(() => {
    const checkAuthState = () => {
      const rememberMe = localStorage.getItem('rememberMe')
      const userEmail = localStorage.getItem('userEmail')

      if (rememberMe === 'true' && userEmail) {
        setUser({
          id: '1',
          name: 'Demo User',
          email: userEmail,
        })
      }
    }

    checkAuthState()
  }, [setUser])

  return <>{children}</>
}
