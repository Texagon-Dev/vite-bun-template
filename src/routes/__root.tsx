import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <>
    <div className="flex gap-2 p-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link to="/login" className="[&.active]:font-bold">
        Login
      </Link>
      <Link to="/signup" className="[&.active]:font-bold">
        Signup
      </Link>
      <Link
        to="/posts"
        search={{
          q: 'post',
        }}
        className="[&.active]:font-bold"
      >
        Posts
      </Link>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })
