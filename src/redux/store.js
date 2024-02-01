import { configureStore } from "@reduxjs/toolkit"
import { cartReducer } from "./cartReducers"
import { coinsReducer } from "./coinsReducer"
import { exchangesReducer } from "./exchangesReducer"

const store = configureStore({
    reducer:{
        coins: coinsReducer,
        exchanges: exchangesReducer,
        cart: cartReducer,
    }
})

export default store;