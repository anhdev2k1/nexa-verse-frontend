import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './contexts/theme-provider'
import { GoogleOAuthProvider } from '@react-oauth/google'
import SidebarProvider from './contexts/sidebar-provider'
import { GraphQLProvider } from './contexts/graphql-provider'

function App() {
  // const client = useApollo()
  const queryClient = new QueryClient()

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
        <GraphQLProvider>
          <QueryClientProvider client={queryClient}>
            <SidebarProvider>
              <RouterProvider router={routes} fallbackElement={<p>Initial Load...</p>} />
            </SidebarProvider>
          </QueryClientProvider>
        </GraphQLProvider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  )
}

export default App
