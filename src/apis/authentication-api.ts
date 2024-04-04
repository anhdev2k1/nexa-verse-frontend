/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from '~/shared/user'
import { GraphqlResponse } from '~/shared/global/global'
import axiosClient from '~/configs/interceptor'

export const authenticationApi = {
  signUp(graphQuery: any): Promise<GraphqlResponse<IUser>> {
    return axiosClient.post('/', graphQuery)
  },
  signIn(graphQuery: any): Promise<GraphqlResponse<IUser[]>> {
    return axiosClient.post(`/`, graphQuery)
  },
  getMe(graphQuery: any): Promise<GraphqlResponse<IUser[]>> {
    return axiosClient.post(`/`, graphQuery)
  },
  checkRefreshToken(graphQuery: any): Promise<GraphqlResponse<IUser[]>> {
    return axiosClient.post(`/`, graphQuery)
  }
}
