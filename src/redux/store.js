import { configureStore } from "@reduxjs/toolkit"
import { cartReducer } from "./cartReducers"


const store = configureStore({
    reducer:{
        cart: cartReducer,
    }
})

export default store;