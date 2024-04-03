import { GraphQLClient } from 'graphql-request'
import { createContext, useContext, useState } from 'react'

const GRAPHQL_ENDPOINT = import.meta.env.VITE_SERVER_URL
const graphql = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('nexa-access-token') || ''}`
  }
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GraphQLContext = createContext<GraphQLClient>(graphql)
const GraphQLProvider = ({ children }: { children: JSX.Element }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [client, setClient] = useState<GraphQLClient>(graphql)

  return <GraphQLContext.Provider value={client}>{children}</GraphQLContext.Provider>
}

const useGraphQL = () => {
  return useContext(GraphQLContext)
}
export { GraphQLProvider, useGraphQL }
