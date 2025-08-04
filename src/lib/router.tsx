import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import { LandingPage } from '@/pages/landing/LandingPage'
import { LoginPage } from '@/pages/login/LoginPage'
import { SignupPage } from '@/pages/signup/SignupPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
      {
        path: 'nested-routing',
        children: [
          {
            path: 'one',
            element: <LandingPage />,
          },
          {
            path: 'two',
            element: <LandingPage />,
          },
        ],
      },
    ],
  },
])
