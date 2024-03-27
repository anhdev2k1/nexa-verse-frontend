import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import useApollo from './hooks/useApollo'
import { ApolloProvider } from '@apollo/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './contexts/theme-provider'
import { GoogleOAuthProvider } from '@react-oauth/google'
import SidebarProvider from './contexts/sidebar-provider'
function App() {
  const client = useApollo()
  const queryClient = new QueryClient()

  if (!client) {
    return <p>Hello...</p>
  }

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
        <ApolloProvider client={client}>
          <QueryClientProvider client={queryClient}>
            <SidebarProvider>
              <RouterProvider router={routes} fallbackElement={<p>Initial Load...</p>} />
            </SidebarProvider>
          </QueryClientProvider>
        </ApolloProvider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  )
}

export default App
