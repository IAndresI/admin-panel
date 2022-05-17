import { IUser } from './IUser';

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  data: IUser
}