export const SIGNIN_USER = `
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

export const SIGNUP_USER = `
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

export const GET_ME = `
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

export const CHECK_REFRESH_TOKEN = `
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
