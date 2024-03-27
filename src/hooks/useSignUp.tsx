import { Variables } from 'graphql-request'
import { useGraphQL } from '~/contexts/graphql-provider'
import { SIGNUP_USER } from '~/graphql/mutations'

const useSignUp = () => {
  const graphQLClient = useGraphQL()
  const signUpFn = async (input: Variables) => {
    try {
      const res = await graphQLClient.request(SIGNUP_USER, input)
      return res
    } catch (error) {
      console.error('Error in signUpFn:', error)
      throw error
    }
  }

  return signUpFn
}

export default useSignUp
