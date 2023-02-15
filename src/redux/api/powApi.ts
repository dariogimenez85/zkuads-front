import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const powApi = createApi({
    reducerPath: 'powApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://00t0hjcyve.execute-api.us-east-1.amazonaws.com/dev'
    }),
    endpoints: (builder) => ({
        login: builder.query({
            query: () => '/auth/login/success'
        })
    })
});

export const { useLoginQuery } = powApi