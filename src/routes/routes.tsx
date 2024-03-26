import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import WorkspaceDetail from '~/modules/Workspace/WorkspaceDetail'
import Home from '~/pages/Home'
import SignIn from '~/pages/SignIn'

// eslint-disable-next-line react-refresh/only-export-components
const ApplicationLayout = React.lazy(() => import('~/layouts/ApplicationLayout'))
export const routes = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    index: true,
    element: <Navigate to='signin' />,
    errorElement: <p>Opps, Page not found!</p>
  },
  {
    path: '/',
    element: <ApplicationLayout />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'workspace/:workspace_id',
        element: <WorkspaceDetail />
      }
    ]
  },
  {
    path: 'signin',
    element: <SignIn />
  }
])
