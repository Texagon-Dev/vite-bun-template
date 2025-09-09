import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'
import { HomePage } from '@/pages/HomePage'
import { LoginPage } from '@/pages/login/LoginPage'
import { SignupPage } from '@/pages/signup/SignupPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
    ],
  },
])
