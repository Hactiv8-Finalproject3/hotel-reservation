import { configureStore } from "@reduxjs/toolkit";
import hotels from "./Slicer/hotels";

export const store = configureStore({
    reducer: {
        hotels
    }
})