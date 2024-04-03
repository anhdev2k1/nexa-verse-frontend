import { Variables } from 'graphql-request'
import { useRequest } from '~/configs/interceptor'
import { useGraphQL } from '~/contexts/graphql-provider'
import { SIGNUP_USER } from '~/graphql/mutations'
import { GraphqlResponse } from '~/shared/global/global'
import { IUser } from '~/shared/user'
const useSignUp = () => {
  // const graphQLClient = useGraphQL()
  const sendRequest = useRequest()
  const signUpFn = async (input: Variables) => {
    try {
      const res = (await sendRequest(SIGNUP_USER, input)) as GraphqlResponse<'SIGN_UP', IUser>
      return res
    } catch (error: any) {
      console.error('Error in signUpFn:', JSON.parse(JSON.stringify(error)).response.errors[0].extensions)
      throw error
    }
  }

  return signUpFn
}

export default useSignUp
