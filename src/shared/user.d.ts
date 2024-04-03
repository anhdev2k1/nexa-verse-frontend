export interface IUser {
  _id: string
  email: string
  user_profile: IUserProfile
}
export interface IUserProfile {
  _id: string
  full_name: string
  avatar: string
  bio: string
  mention: string
  isDelete: number
}
