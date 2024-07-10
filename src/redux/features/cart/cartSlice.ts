import { createSlice } from "@reduxjs/toolkit";

type TCartState = {
  item: number;
};

const initialState: TCartState = {
  item: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.item = state.item++;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
