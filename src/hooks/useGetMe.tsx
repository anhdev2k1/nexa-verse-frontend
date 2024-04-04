import axiosClient from '~/configs/interceptor'
import { TypeAction } from '~/constants/action.constants'
import { GET_ME } from '~/graphql/mutations'
const useGetMe = () => {
  const getMeFn = async () => {
    const graphqlQuery = {
      operationName: TypeAction.GET_ME,
      query: GET_ME
    }
    try {
      const res = await axiosClient.post('/', graphqlQuery)
      console.log(res)
      return res
    } catch (error) {
      console.error('Error in getMeFn:', error)
    }
  }

  return getMeFn
}

export default useGetMe
