import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
            Welcome to Vite Template
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            A modern React template with Vite, TypeScript, React Router,
            Zustand, Tailwind CSS, and ShadCN UI components.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>⚡ Fast Development</CardTitle>
              <CardDescription>
                Built with Vite for lightning-fast development and hot module
                replacement.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Experience instant feedback with Vite's optimized build tool and
                development server.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎨 Beautiful UI</CardTitle>
              <CardDescription>
                Pre-configured with Tailwind CSS and ShadCN UI components for
                rapid prototyping.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Create stunning interfaces with utility-first CSS and accessible
                components.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🔧 Type Safe</CardTitle>
              <CardDescription>
                Full TypeScript support with proper path mapping and strict type
                checking.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Catch errors early and improve code quality with comprehensive
                TypeScript configuration.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
