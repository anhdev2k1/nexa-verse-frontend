import { gql } from '@apollo/client'

export const SIGNIN_USER = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
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
        user {
          _id
          email
          user_profile {
            _id
          }
        }
        access_token
        refresh_token
      }
    }
  }
`

export const GET_ME = gql`
  query getMe {
    getMe {
      message
      statusCode
      metadata {
        user {
          _id
          email
          user_profile {
            _id
          }
        }
      }
    }
  }
`

export const REFRESH_TOKEN = gql`
  mutation checkRefreshToken($refreshToken: String!) {
    checkRefreshToken(refreshToken: $refreshToken) {
      message
      statusCode
      metadata {
        access_token
        refresh_token
      }
    }
  }
`
