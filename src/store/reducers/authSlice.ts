import { IAuthResponse } from '../../models/IAuthResponse';
import { IUser } from "../../models/IUser";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  data: IUser;
  isLoading: boolean;
  isAuth: false;
  error: string;
}

const initialState: UserState = {
  data: null,
  isLoading: false,
  isAuth: false,
  error: ''
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<IAuthResponse>) {
      state.isAuth = true;
      localStorage.setItem('token', action.payload.accessToken);
      state.data = action.payload.data;
    },
    checkAuth(state, action: PayloadAction<IAuthResponse>) {
      console.log(action.payload);

      if (action.payload) {
        state.isAuth = true;
        localStorage.setItem('token', action.payload.accessToken);
        state.data = action.payload.data;
      }
      else {
        state.isAuth = false;
        state.data = null;
      }
    }
  }
})

export const { actions: authActions } = authSlice;
export const { reducer: authReducers } = authSlice;