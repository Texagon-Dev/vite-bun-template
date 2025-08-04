import { type ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer.tsx'

interface LayoutProps {
  children: ReactNode
  showHeader?: boolean
  showFooter?: boolean
  className?: string
}

export function Layout({
  children,
  showHeader = true,
  showFooter = true,
  className = '',
}: LayoutProps) {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      {showHeader && <Header />}

      <main className={`flex-1 ${className}`}>{children}</main>

      {showFooter && <Footer />}
    </div>
  )
}
