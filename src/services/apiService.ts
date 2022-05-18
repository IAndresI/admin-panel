import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
  endpoints: (build) => ({})
})