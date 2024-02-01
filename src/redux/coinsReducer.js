import { createAction, createReducer } from "@reduxjs/toolkit";

const getCoins = createAction("getCoins");

export const coinsReducer = createReducer({}, (builder) => {
  builder
    .addCase(getCoins, (state, action) => {})
});
