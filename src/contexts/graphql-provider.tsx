import { GraphQLClient } from 'graphql-request'
import Cookies from 'js-cookie'
import { createContext, useContext, useEffect, useState } from 'react'

const GRAPHQL_ENDPOINT = 'http://127.0.0.1:8080/graphql'
const graphql = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${Cookies.get('nexa-verse-accesstoken')}`
  }
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GraphQLContext = createContext<GraphQLClient>(graphql)
const GraphQLProvider = ({ children }: { children: JSX.Element }) => {
  const [client, setClient] = useState<GraphQLClient>(graphql)

  useEffect(() => {
    const accessToken = Cookies.get('nexa-verse-accesstoken')

    if (!accessToken) {
      return
    }

    const fetchNewAccessToken = async () => {
      try {
        // const response = await fetchNewToken()
        const newAccessToken = response.accessToken

        if (newAccessToken) {
          Cookies.set('nexa-verse-accesstoken', newAccessToken)

          // Create a new GraphQL client with the new access token
          const newClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
            headers: {
              Authorization: `Bearer ${newAccessToken}`
            }
          })
          setClient(newClient)
        } else {
          console.error('Failed to fetch new access token')
        }
      } catch (error) {
        console.error('Error fetching new access token:', error)
      }
    }

    const tokenExpiration = getTokenExpiration(accessToken)
    const currentTime = Date.now() / 1000

    if (tokenExpiration && tokenExpiration <= currentTime) {
      fetchNewAccessToken()
    } else {
      setClient(graphql)
    }
  }, [])

  return <GraphQLContext.Provider value={client}>{children}</GraphQLContext.Provider>
}

const useGraphQL = () => {
  return useContext(GraphQLContext)
}
export { GraphQLProvider, useGraphQL }
