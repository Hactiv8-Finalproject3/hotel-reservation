import { configureStore } from "@reduxjs/toolkit";
import hotels from "./Slicer/hotels";
import user from "./Slicer/user";

export const store = configureStore({
    reducer: {
        hotels,
        user
    }
})