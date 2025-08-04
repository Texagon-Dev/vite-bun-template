import { mockApi } from '@/lib/api'
import { useAppStore } from '@/stores/useAppStore'

export interface User {
  id: string
  name: string
  email: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  name: string
  email: string
  password: string
}

class AuthService {
  async login(credentials: LoginCredentials): Promise<User> {
    try {
      const response = await mockApi.auth.login(
        credentials.email,
        credentials.password
      )

      if (response.success && response.data) {
        localStorage.setItem('authToken', response.data.token)

        return response.data.user
      }

      throw new Error('Login failed')
    } catch (error) {
      throw error instanceof Error ? error : new Error('Login failed')
    }
  }

  async register(credentials: RegisterCredentials): Promise<User> {
    try {
      const response = await mockApi.auth.register(
        credentials.name,
        credentials.email,
        credentials.password
      )

      if (response.success && response.data) {
        localStorage.setItem('authToken', response.data.token)

        return response.data.user
      }

      throw new Error('Registration failed')
    } catch (error) {
      throw error instanceof Error ? error : new Error('Registration failed')
    }
  }

  logout(): void {
    localStorage.removeItem('authToken')
    localStorage.removeItem('rememberMe')
    localStorage.removeItem('userEmail')

    const { clearUser } = useAppStore.getState()
    clearUser()
  }

  async getCurrentUser(): Promise<User | null> {
    const token = localStorage.getItem('authToken')

    if (!token) {
      return null
    }

    try {
      const userEmail = localStorage.getItem('userEmail')
      if (userEmail) {
        return {
          id: '1',
          name: 'Demo User',
          email: userEmail,
        }
      }

      return null
    } catch {
      this.logout()
      return null
    }
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken')
  }
}

export const authService = new AuthService()
