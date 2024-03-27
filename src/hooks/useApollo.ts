import { ApolloClient, InMemoryCache, NormalizedCacheObject, createHttpLink } from '@apollo/client'
import { useState, useEffect } from 'react'
import { setContext } from '@apollo/client/link/context'
import Cookies from 'js-cookie'
const httpLink = createHttpLink({
  uri: 'http://127.0.0.1:8080/graphql'
})

const useApollo = () => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>()

  useEffect(() => {
    const authLink = setContext((_, { headers }) => {
      const accessToken = Cookies.get('nexa-verse-accesstoken')
      console.log(accessToken)

      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : ''
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
