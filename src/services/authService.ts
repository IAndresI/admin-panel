import { IAuthResponse } from '../models/IAuthResponse';
import { IUser } from '../models/IUser';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ILogin } from '../models/ILogin';
import IRegistrationData from '../models/IRegistrationData';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL + '/user',
    credentials: 'include',
    prepareHeaders: (headers) => {

      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    }
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUser[], number>({
      query: (limit: number = 5) => ({
        url: '/',
        params: {
          _limit: limit
        }
      })
    }),
    login: build.mutation<IAuthResponse, ILogin>({
      query: (loginData: ILogin) => ({
        url: '/login',
        method: 'POST',
        body: {
          ...loginData
        }
      })
    }),
    registration: build.mutation<IAuthResponse, IRegistrationData>({
      query: (user: IRegistrationData) => ({
        url: '/register',
        method: 'POST',
        body: {
          ...user
        }
      })
    }),
    logout: build.mutation<IAuthResponse, null>({
      query: () => ({
        url: '/logout',
        method: 'POST',
        body: {}
      })
    }),
    auth: build.query<IAuthResponse, null>({
      query: () => '/refresh'
    })
  })
})

export const { useFetchAllUsersQuery, useLoginMutation, useLogoutMutation, useRegistrationMutation, useAuthQuery } = authAPI;