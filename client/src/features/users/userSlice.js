import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',  
    initialState: {
        user: null, 
        token: null, 
        loggedIn: false,
    },

    reducers: {
        loginSuccess: (state, action)=>{
            state.user = action.payload.data;
            state.token = action.payload.token; 
            state.loggedIn = true;
        }, 
        logoutSuccess: (state)=>{
            state.user= null;
            state.token = null;
            state.loggedIn = false;
        },
    },
});

export const {loginSuccess, logoutSuccess} = userSlice.actions;

export default userSlice.reducer;

