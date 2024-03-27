import { GraphQLClient } from 'graphql-request'
import Cookies from 'js-cookie'
import { createContext, useContext } from 'react'

const graphql = new GraphQLClient('http://127.0.0.1:8080/graphql', {
  headers: {
    Authorization: `Bearer ${Cookies.get('nexa-verse-accesstoken')}`
  }
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GraphQLContext = createContext<GraphQLClient>(graphql)
const GraphQLProvider = ({ children }: { children: JSX.Element }) => {
  return <GraphQLContext.Provider value={graphql}>{children}</GraphQLContext.Provider>
}

const useGraphQL = () => {
  return useContext(GraphQLContext)
}
export { GraphQLProvider, useGraphQL }
