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
      const itemId = action.payload.id;
      const price = action.payload.price;
      const existingItem = state.cartItems.find((item) => item.id === itemId);
      const amount = action.payload.amount;

      if (existingItem) {
        // If the item already exists in the cart, update its quantity
        existingItem.amount += 1;
        existingItem.total = existingItem.amount * price;
      } else {
        // If the item is not in the cart, add it with an initial quantity of 1
        state.cartItems.push({
          id: itemId,
          amount: 1,
          price: price,
          image: action.payload.image,

          // total: itemId * amount,
          // Add other properties if needed
        });
      }

      // Recalculate the total outside of the loop
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.amount * item.price;
      });
      state.total = total;
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const itemId = action.payload.id;
      const price = action.payload.price;
      const cartItem = state.cartItems.find((item) => item.id === action.id);
      const existingItem = state.cartItems.find((item) => item.id === itemId);
      const amount = action.payload.amount;
      if (cartItem) {
        cartItem.amount += 1;
      }

      if (existingItem) {
        // If the item already exists in the cart, update its quantity
        existingItem.amount += 1;
        existingItem.total = existingItem.amount * price;
      } else {
        // If the item is not in the cart, add it with an initial quantity of 1
        state.cartItems.push({
          id: itemId,
          amount: 1,
          price: price,
          // total: itemId * amount,
          // Add other properties if needed
        });
      }

      // Recalculate the total outside of the loop
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.amount * item.price;
      });
      state.total = total;
    },

    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);

      if (cartItem && cartItem.amount > 1) {
        // Decrease the amount by 1
        cartItem.amount -= 1;
        // Decrease the total by the item's price
        cartItem.total = cartItem.amount * cartItem.price;
      } else {
        // If the amount is 1 or less, remove the item from the cart
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== payload.id
        );
      }

      // Recalculate the total outside of the loop
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.amount * item.price;
      });
      state.total = total;
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
