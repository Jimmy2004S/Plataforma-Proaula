import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    name: "api", 
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api'
    }),

    endpoints: (builder) =>({
        getUser: builder.query({
            query: () => 'user',
            providesTags: ["Users"],
        }),
        createUser: builder.mutation({
            query: (newUser) =>({
                url: '/user',
                method: 'POST',
                body: newUser,
            }),
            invalidatesTags: ["Users"]
        }),
        deleteUser: builder.mutation({
            query: (id)=>({
                url: `/user/${id}`, 
                method: "DELETE",
            }),
            invalidatesTags: ["Users"]
        })
    })
})

export const {useGetUserQuery, useCreateUserMutation, useDeleteUserMutation} = apiSlice