import { createSlice } from "@reduxjs/toolkit";


const MenuItemSlice = createSlice({
name: "menuItem",
initialState:null,

reducers:{
    getMenuItem:(state, action) => {
        state.menuItem = action.payload
    }
}
})

export const {getMenuItem} = MenuItemSlice.actions;
export default MenuItemSlice.reducer