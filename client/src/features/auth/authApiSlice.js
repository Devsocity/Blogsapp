import apiSlice from '../../app/apiSlice.js';

// Create inject endpoint api
const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/api/v1/auth/login',
        method: 'POST',
        body: data
      })
    }),

    register: builder.mutation({
      query: (data) => ({
        url: '/api/v1/auth/register',
        method: 'POST',
        body: data
      })
    }),
    registerVerifyToken: builder.query({
      query: (token) => `/api/v1/auth/verify/${token}`
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/api/v1/auth/logout',
        method: 'POST'
      })
    }),
    me: builder.query({
      query: () => '/api/v1/auth/me',
      providesTags: ['Me']
    })
    //     forgetPasswordRequest: builder.mutation({
    //       query: (data) => ({
    //         url: '/api/v1/auth/forget',
    //         method: 'POST',
    //         body: data
    //       })
    //     }),
    //     resetPassword: builder.mutation({
    //       query: ({ token, data }) => ({
    //         url: `/api/v1/auth/forget/${token}`,
    //         method: 'POST',
    //         body: data
    //       })
    //     })
  })
});

// export endpoints
export const { useLoginMutation, useRegisterMutation, useRegisterVerifyTokenQuery, useLogoutMutation, useMeQuery } = authApiSlice;
