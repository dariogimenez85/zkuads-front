import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const zkuadsApi = createApi({
    reducerPath: 'zkuadsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/', 
        credentials:'include'
    }),
    tagTypes: ["UserData"],
    endpoints: (builder) => ({
        login: builder.query<any, void>({
            query: () => '/auth/login/success',
            providesTags: ['UserData'],
            transformErrorResponse: (res) => {
                return res;
            },
            extraOptions: { maxRetries: 3 }
        })
    })
});

export const {
    useLoginQuery
} = zkuadsApi