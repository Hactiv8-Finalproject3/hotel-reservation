import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        fullname: '',
        email: '',
        password: '',
        phone: ''
    },
    isAuthenticated: false
}

export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        SetUser: (state, action) => {
            state.user = { ...state.user, ...action.payload }
        },
        SetAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload
        },
    }
})

export const {
    SetUser,
    SetAuthenticated
} = user.actions

export default user.reducer