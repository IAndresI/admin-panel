import { IUser } from './IUser';

export default interface UserState {
  data: IUser;
  isLoading: boolean;
  isAuth: false;
  error: string;
}