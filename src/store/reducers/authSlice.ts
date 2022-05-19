import { IAuthResponse } from '../../models/IAuthResponse';
import IUserState from "../../models/IUserState";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IUserState = {
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

      if (action.payload) {
        state.isAuth = true;
        localStorage.setItem('token', action.payload.accessToken);
        state.data = action.payload.data;
      }
      else {
        state.isAuth = false;
        state.data = null;
      }
    },
    logout(state) {
      state.isAuth = false;
      state.data = null;
      state.error = '';
      state.isLoading = false;
      localStorage.removeItem('token');
    }
  }
})

export const { actions: authActions } = authSlice;
export const { reducer: authReducers } = authSlice;