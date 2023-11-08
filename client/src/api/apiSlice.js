import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    name: "api", 
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api/'
    }),

    endpoints: (builder) =>({
        getUser: builder.query({
            query: () => 'user',
            providesTags: ["Users"],
            method: "GET",
            cors: false,
            credentials: 'include',
        }),
        createUser: builder.mutation({
            query: (newUser) =>({
                url: 'user',
                method: 'POST',
                body: newUser,
                cors: false,
                credentials: 'include',
            }),
            invalidatesTags: ["Users"]
        }),
        deleteUser: builder.mutation({
            query: (id)=>({
                url: `user/${id}`, 
                method: "DELETE",
                cors: false,
                credentials: 'include',
            }),
            invalidatesTags: ["Users"]
        }),
        loginUser: builder.mutation({
            query: (userData) =>({
                url: 'login',
                method: 'POST',
                body: userData,
                cors: false,
                credentials: 'include',
            }),
        }),
    })
})

export const {useGetUserQuery, useCreateUserMutation, useDeleteUserMutation, useLoginUserMutation} = apiSlice