import { useRequest } from '~/configs/interceptor'
import { useGraphQL } from '~/contexts/graphql-provider'
import { GET_ME } from '~/graphql/mutations'
import { GraphqlResponse } from '~/shared/global/global'
import { IUser } from '~/shared/user'
const useGetMe = () => {
  // const graphQLClient = useGraphQL()
  const sendRequest = useRequest()
  const getMeFn = async () => {
    try {
      const res = (await sendRequest(GET_ME)) as GraphqlResponse<'GET_ME', IUser>
      return res
    } catch (error) {
      console.error('Error in getMeFn:', error)
      throw error
    }
  }

  return getMeFn
}

export default useGetMe
