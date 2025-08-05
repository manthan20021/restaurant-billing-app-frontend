import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userItem",
initialState:{
    userItem:[]
},

reducers:{
    getUserItem:(state, action) => {
         state.userItem = action.payload;
    }
}
})

export const {getUserItem} = userSlice.actions
export default userSlice.reducer