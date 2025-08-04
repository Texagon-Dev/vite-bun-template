import { API_CONFIG } from '@/data/constants'

export interface ApiResponse<T = unknown> {
  data: T
  message?: string
  success: boolean
}

export class ApiError extends Error {
  status: number
  code?: string

  constructor({
    message,
    status,
    code,
  }: {
    message: string
    status: number
    code?: string
  }) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.code = code
  }
}

class ApiClient {
  private baseUrl: string
  private timeout: number

  constructor(
    baseUrl: string = API_CONFIG.baseUrl,
    timeout: number = API_CONFIG.timeout
  ) {
    this.baseUrl = baseUrl
    this.timeout = timeout
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`

    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      }
    }

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), this.timeout)

      const response = await fetch(url, {
        ...config,
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      if (error instanceof Error) {
        throw new ApiError({
          message: error.message,
          status: 0,
        })
      }
      throw error
    }
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET' })
  }

  async post<T>(endpoint: string, data?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async put<T>(endpoint: string, data?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' })
  }
}

// Export singleton instance
export const api = new ApiClient()

// Mock API functions for demo purposes
export const mockApi = {
  auth: {
    login: async (email: string, password: string) => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (email === 'demo@example.com' && password === 'password') {
        return {
          success: true,
          data: {
            user: { id: '1', name: 'Demo User', email },
            token: 'mock-jwt-token',
          },
        }
      }

      throw new Error('Invalid credentials')
    },

    register: async (name: string, email: string, password: string) => {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      if (email === 'existing@example.com') {
        throw new Error('User already exists')
      }

      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters')
      }

      return {
        success: true,
        data: {
          user: { id: Date.now().toString(), name, email },
          token: 'mock-jwt-token',
        },
      }
    },
  },
}
