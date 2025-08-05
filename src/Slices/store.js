import { configureStore } from "@reduxjs/toolkit";
import menuItemReducer from "./menuItemSlice";
import userSliceReducer from "./userSlice"

const store = configureStore({
    reducer:{
        menu: menuItemReducer,
        user: userSliceReducer
    }
})

export default store