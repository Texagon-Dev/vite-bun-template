import { Outlet, useLocation } from 'react-router-dom'
import { useAppStore } from '@/stores/useAppStore'
import { Layout } from '@/components/layout/Layout'
import { cn } from '@/lib/utils'

function App() {
  const { theme } = useAppStore()
  const location = useLocation()

  // Pages that should not show header/footer (like login, signup)
  const authPages = ['/login', '/signup']
  const isAuthPage = authPages.includes(location.pathname)

  return (
    <div className={cn('min-h-screen', theme === 'dark' && 'dark')}>
      {isAuthPage ? (
        // Auth pages without layout
        <div className="bg-background text-foreground min-h-screen">
          <Outlet />
        </div>
      ) : (
        // Regular pages with layout
        <Layout>
          <Outlet />
        </Layout>
      )}
    </div>
  )
}

export default App
