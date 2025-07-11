import { configureStore } from "@reduxjs/toolkit";
import { getMenuItem } from "./menuItemSlice";

const store = configureStore({
    reducer:{
        menu: getMenuItem
    }
})

export default store