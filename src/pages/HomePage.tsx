import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function HomePage() {
  return (
    <div className="from-background to-muted/40 min-h-screen bg-gradient-to-b">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Ship React apps faster with a modern Vite + TS stack
            </h1>
            <p className="text-muted-foreground mb-8 max-w-prose text-lg">
              A thoughtfully curated template with React 19, TypeScript,
              Tailwind CSS 4, Router, Zustand, and production-grade ESLint +
              Prettier. Batteries included.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="border-border/50 bg-card/60 text-card-foreground ring-border/40 mx-auto w-full max-w-xl rounded-xl border p-6 shadow-sm ring-1 backdrop-blur">
              <div className="grid grid-cols-3 gap-4 text-center">
                <Stat title="Vite" value="7.x" />
                <Stat title="React" value="19.x" />
                <Stat title="TypeScript" value="5.8" />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <BadgeList
                  title="Included"
                  items={[
                    'Tailwind CSS 4',
                    'ESLint Flat Config',
                    'Prettier + Tailwind plugin',
                    'Zustand State',
                  ]}
                />
                <BadgeList
                  title="Quality"
                  items={[
                    'A11y rules',
                    'Import hygiene',
                    'React performance',
                    'Type safety',
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 pb-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-foreground mb-3 text-3xl font-semibold md:text-4xl">
            Everything you need
          </h2>
          <p className="text-muted-foreground">
            Sensible defaults and flexible building blocks that help you move
            quickly without sacrificing quality.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Feature
            title="DX First"
            description="Hot reload, instant installs with Bun, and a finely tuned ESLint to keep code healthy."
          />
          <Feature
            title="Beautiful UI"
            description="Tailwind v4 and composable UI primitives help you ship polished interfaces."
          />
          <Feature
            title="Type-Safe by Default"
            description="Strict TypeScript, typed APIs, and utilities reduce runtime bugs."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t">
        <div className="container mx-auto px-4 py-16 text-center">
          <h3 className="text-foreground mb-4 text-2xl font-semibold md:text-3xl">
            Ready to build?
          </h3>
          <p className="text-muted-foreground mx-auto mb-8 max-w-prose">
            Create an account to explore the dashboard and starter flows.
          </p>
          <Button asChild size="lg">
            <Link to="/signup">Create your account</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{value}</CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          Preconfigured and up to date
        </p>
      </CardContent>
    </Card>
  )
}

function BadgeList({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function Feature({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="text-muted-foreground list-disc space-y-1 pl-4 text-sm">
          <li>Accessible components</li>
          <li>Clean imports</li>
          <li>Strict lint rules</li>
        </ul>
      </CardContent>
    </Card>
  )
}
