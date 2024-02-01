import { createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("addToCart");
const increment = createAction("increment");
const decrement = createAction("decrement");
const deleteFromCart = createAction("deleteFromCart");
const calculatePrice = createAction("calculatePrice");

export const cartReducer = createReducer(
  {
    cartItems: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  (builder) => {
    builder
      .addCase(addToCart, (state, action) => {
        const item = action.payload;
        const isItemExist = state.cartItems.find((i) => i.id === item.id);
        if (isItemExist) {
          state.cartItems.forEach((i) => {
            if (i.id === item.id) i.qty += 1;
          });
        } else {
          state.cartItems.push(item);
        }
      })
      .addCase(decrement, (state, action) => {
        const item = state.cartItems.find((i) => i.id === action.payload);
        if (item.qty > 1) {
          state.cartItems.forEach((i) => {
            if (i.id === item.id) {
              i.qty -= 1;
              state.subTotal -= item.price;
              state.total = state.subTotal + state.tax + state.shipping;
            }
          });
        }
      })
      .addCase(deleteFromCart, (state, action) => {
        state.cartItems = state.cartItems.filter(
          (i) => i.id !== action.payload
        );
      })
      .addCase(calculatePrice, (state, action) => {
        let sum = 0;
        state.cartItems.forEach((i) => (sum += i.price * i.qty));
        state.subTotal = sum;
        state.shipping = state.subTotal > 10000 ? 0 : 200;
        state.tax = +(state.subTotal * 0.1).toFixed();
        state.total = state.subTotal + state.tax + state.shipping;
      });
  }
);
