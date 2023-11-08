import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    name: "api", 
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://7fd7-190-242-43-83.ngrok-free.app/api/'
    }),

    endpoints: (builder) =>({
        getUser: builder.query({
            query: () => 'user',
            providesTags: ["Users"],
        }),
        createUser: builder.mutation({
            query: (newUser) =>({
                url: 'user',
                method: 'POST',
                body: newUser,
            }),
            invalidatesTags: ["Users"]
        }),
        deleteUser: builder.mutation({
            query: (id)=>({
                url: `user/${id}`, 
                method: "DELETE",
            }),
            invalidatesTags: ["Users"]
        }),
        loginUser: builder.mutation({
            query: (userData) =>({
                url: 'login',
                method: 'POST',
                body: userData,
            }),
        }),
        createProject: builder.mutation({
            query: (projectData) =>({
                url: 'project',
                method: 'POST',
                body: projectData,
            }),
        })
    })
})

export const {useGetUserQuery, useCreateUserMutation, useDeleteUserMutation, useLoginUserMutation, useCreateProjectMutation} = apiSlice