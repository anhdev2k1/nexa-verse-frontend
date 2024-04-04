export const TypeAction = {
  SIGN_UP: 'signUp',
  SIGN_IN: 'signIn',
  GOOGLE_AUTH: 'googleAuth',
  GET_ME: 'getMe',
  LOG_OUT: 'logOut',
  CHECK_REFRESH_TOKEN: 'checkRefreshToken'
}

export enum KeyToken {
  ACCESS_TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY = import.meta.env.VITE_REFRESH_TOKEN_KEY
}
