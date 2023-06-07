import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotels: {
    favorites: [],
    booking: [],
  },
};

const hotels = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    addfavoritehotel: (state, action) => {
      state.hotels.favorites.push(action.payload);
    },
    removefavoritehotel: (state, action) => {
      state.hotels.favorites = state.hotels.favorites.filter(
        (hotel) => hotel.hotel_id !== action.payload
        );
    },
    addbookinghotel: (state, action) => {
      state.hotels.booking.push(action.payload);
    },
  },
});

export const { addfavoritehotel, removefavoritehotel, addbookinghotel } =
  hotels.actions;

export default hotels.reducer;
