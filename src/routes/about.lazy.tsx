import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-2">
      <div>Hello /about!</div>
    </div>
  )
}
