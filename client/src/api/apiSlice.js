import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    name: "api", 
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api/',
        prepareHeaders: (headers, {getState})=>{
            const token = getState().user.token;
            if(token){
                headers.set('Authorization', `Bearer ${token}`);
                console.log('Token enviado en la solicitud:', token);
            }
            return headers;
        }
    }),

    endpoints: (builder) =>({
        getUser: builder.query({
            query: () => 'user',
            providesTags: ["Users"],
        }),
        filter: builder.query({
            query: (busqueda)=> `filtrar/${busqueda}`
        }),
        getUserProjects: builder.query({
            query: ()=> "user/misPosts",
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
                url: 'post',
                method: 'POST',
                body: projectData,
            }),
            invalidatesTags: ["Projects"]
        }),
        
    })
})

export const {useGetUserQuery, useCreateUserMutation, useDeleteUserMutation, useLoginUserMutation, useCreateProjectMutation, useGetUserProjectsQuery} = apiSlice
export const { useFilter } = apiSlice;
