import { ApolloClient, InMemoryCache, NormalizedCacheObject, createHttpLink } from '@apollo/client'
import { useState, useEffect } from 'react'
import { setContext } from '@apollo/client/link/context';
const httpLink = createHttpLink({
  uri: '/graphql'
})

const useApollo = () => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>()

  useEffect(() => {
    const authLink = setContext((_, { headers }) => {
      const token = localStorage.getItem('id_token')
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : ''
        }
      }
    })

    const newClient = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache()
    })

    setClient(newClient)

    return () => {
      newClient.stop()
    }
  }, [])

  return client
}

export default useApollo
