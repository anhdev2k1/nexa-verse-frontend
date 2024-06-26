import { TypeAction } from '~/constants/action.constants'

export interface IAuthMetadata<TData> {
  user: TData
  access_token: string
  refresh_token: string
}
export interface IResponse<TData> {
  statusCode: number
  message: string
  metadata: IAuthMetadata<TData>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type GraphqlResponse<TData> = {
  [K in keyof typeof TypeAction]: IResponse<TData>
}
