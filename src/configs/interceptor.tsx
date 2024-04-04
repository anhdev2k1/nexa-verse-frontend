import axios, { InternalAxiosRequestConfig } from 'axios'
import { TypeAction } from '~/constants/action.constants'
import { CHECK_REFRESH_TOKEN } from '~/graphql/mutations'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL || 'http://127.0.0.1:8080/graphql'
})

axiosClient.interceptors.response.use(
  (res) => {
    return res.data
  },
  async (err) => {
    const originalConfig = err.response.data.errors[0].extensions

    if (originalConfig.url !== '/signin') {
      if (originalConfig.http.status === 401 && originalConfig.code === 'UNAUTHENTICATED') {
        originalConfig._retry = true

        const refreshToken = localStorage.getItem('nexa-refresh-token')

        const graphqlQuery = {
          operationName: TypeAction.CHECK_REFRESH_TOKEN,
          query: CHECK_REFRESH_TOKEN,
          variables: { refreshToken }
        }
        try {
          const rs = await axiosClient.post('/', graphqlQuery)
          const { access_token } = rs.data.checkRefreshToken.metadata
          localStorage.setItem(import.meta.env.VITE_ACCESS_TOKEN_KEY, access_token)
          return axiosClient(originalConfig)
        } catch (_error) {
          return Promise.reject(_error)
        }
      }
    }

    return Promise.reject(err)
  }
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
axiosClient.interceptors.request.use(function (config: InternalAxiosRequestConfig<any>) {
  const accessToken = localStorage.getItem(import.meta.env.VITE_ACCESS_TOKEN_KEY)
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

export default axiosClient
