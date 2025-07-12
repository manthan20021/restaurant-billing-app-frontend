import { configureStore } from "@reduxjs/toolkit";
import menuItemReducer from "./menuItemSlice";

const store = configureStore({
    reducer:{
        menu: menuItemReducer
    }
})

export default store