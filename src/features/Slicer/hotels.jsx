import { createSlice } from "@reduxjs/toolkit";

const hotels = createSlice({
  name: "favorite",
  initialState: {
    favorites: [],
    booking: [],
    },
  reducers: {
    addfavoritehotel: (state, action) => {
      const saveHotel = state.favorites.find(
        (item) => item.hotel_id === action.payload.hotel_id
      );
      if (!saveHotel) {
        state.favorites.push(action.payload);
      }
    },
    removefavoritehotel: (state, action) => {
      const removeHotel = state.favorites.filter(
        (item) => item.hotel_id !== action.payload
      );
      state.favorites = removeHotel;
    },
    addbookinghotel: (state, action) => {
      state.hotels.booking.push(action.payload);
    },
  },
});

export const { addfavoritehotel, removefavoritehotel, addbookinghotel } =
  hotels.actions;

export default hotels.reducer;
