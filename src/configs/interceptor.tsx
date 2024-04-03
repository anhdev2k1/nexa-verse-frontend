import { DocumentNode } from 'graphql'
import { Variables } from 'graphql-request'
import { useGraphQL } from '~/contexts/graphql-provider'
import { REFRESH_TOKEN } from '~/graphql/mutations'

export const useRequest = () => {
  const graphQLClient = useGraphQL()
  const sendRequest = async (mutation: DocumentNode, input?: Variables) => {
    try {
      const res = await graphQLClient.request(mutation, input)
      return res
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const { code, status } = JSON.parse(JSON.stringify(error)).response.errors[0].extensions
      if (code === 401 || status === 'UNAUTHENTICATED') {
        const refreshToken = localStorage.getItem('nexa-refresh-token')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newToken = (await graphQLClient.request(REFRESH_TOKEN, { refreshToken })) as any
        localStorage.setItem('nexa-access-token', newToken?.access_token)
        localStorage.setItem('nexa-refresh-token', newToken?.refresh_token)

        // Retry the failed request with the new token
        return await graphQLClient.request(mutation, input)
      }
      throw error
    }
  }
  return sendRequest
}
