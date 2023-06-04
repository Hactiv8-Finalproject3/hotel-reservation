import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hotels: {
        favorites: [],
        ordered: []
    }
}

export const hotels = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        addfavoritehotel: (state, action) => {
            state.hotels.favorites.push(action.payload)
        },
        removefavoritehotel: (state, action) => {
            const id = action.payload.hotelId
            state.hotels.favorites = state.hotels.favorites
                .filter((hotel) => hotel.hotelId !== id)
        },
        addorderedhotel: (state, action) => {
            state.hotels.ordered.push(action.payload)
        }
    }
})

export const {
    addfavoritehotel,
    removefavoritehotel,
    addorderedhotel
} = hotels.actions

export default hotels.reducer