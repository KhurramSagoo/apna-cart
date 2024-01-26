// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
    amount: 0,
    isLoading: true,
  },
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (cartItem) {
        cartItem.amount += 1;
      }
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (cartItem && cartItem.amount > 1) {
        cartItem.amount -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== payload.id
        );
      }
    },
    calculateTotals: (state) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.amount * item.price;
      });
      state.total = total;
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
