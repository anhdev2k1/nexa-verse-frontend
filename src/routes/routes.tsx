import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Home from '~/pages/Home'

// eslint-disable-next-line react-refresh/only-export-components
const ApplicationLayout = React.lazy(() => import('~/layouts/ApplicationLayout'))

export const routes = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <Navigate to='home' />
  },
  {
    path: '/',
    element: <ApplicationLayout />,
    children: [
      {
        path: 'home',
        element: <Home />
      }
    ]
  }
])
