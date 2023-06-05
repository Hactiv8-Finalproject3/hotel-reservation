import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phone: "",
  },
  isAuthenticated: false,
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    SetUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    SetAuthenticate: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { SetUser, SetAuthenticate } = user.actions;

export default user.reducer;
