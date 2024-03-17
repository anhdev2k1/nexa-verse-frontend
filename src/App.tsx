import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import useApollo from './hooks/useApollo'
import { ApolloProvider } from '@apollo/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
function App() {
  const client = useApollo()
  const queryClient = new QueryClient()

  if (!client) {
    return <p>Loading...</p>
  }

  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} fallbackElement={<p>Initial Load...</p>} />
      </QueryClientProvider>
    </ApolloProvider>
  )
}

export default App
