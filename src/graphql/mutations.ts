import { gql } from '@apollo/client'

export const SIGNIN_USER = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      message
      statusCode
      metadata {
        email
        user_profile
      }
    }
  }
`
export const SIGNUP_USER = gql`
  mutation signUp($full_name: String!, $email: String!, $password: String!) {
    signUp(full_name: $full_name, email: $email, password: $password) {
      message
      statusCode
      metadata {
        _id
        email
        user_profile
      }
    }
  }
`
