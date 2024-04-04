import { Variables } from 'graphql-request'
import axiosClient from '~/configs/interceptor'
import { TypeAction } from '~/constants/action.constants'
import { SIGNUP_USER } from '~/graphql/mutations'
const useSignUp = () => {
  const signUpFn = async (input: Variables) => {
    const graphqlQuery = {
      operationName: TypeAction.SIGN_UP,
      query: SIGNUP_USER,
      variables: input
    }
    try {
      const res = await axiosClient.post('/', graphqlQuery)
      return res
    } catch (error) {
      console.log(error)
    }
  }

  return signUpFn
}

export default useSignUp
