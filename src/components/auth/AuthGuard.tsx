import { Navigate, useLocation } from 'react-router-dom'

import { useAppStore } from '@/stores/useAppStore'

import type { ReactNode } from 'react'

interface AuthGuardProps {
  children: ReactNode
  requireAuth?: boolean
}

export function AuthGuard({ children, requireAuth = true }: AuthGuardProps) {
  const { user } = useAppStore()
  const location = useLocation()

  if (requireAuth && !user.id) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (!requireAuth && user.id) {
    return <Navigate to="/dashboard" replace />
  }

  return children
}
