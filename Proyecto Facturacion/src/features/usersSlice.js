import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
   name: "users",
   initialState: [],
   reducers: {
      initUsers: (state, action) => {
         return [...state, action.payload];
      },
      addUser: (state, action) => {
         state.push(action.payload);
      },
      editUser: (state, action) => {
      },
      deleteUser: (state, action) => {
         state.forEach((user) => {
            if(user.id === action.payload) {
               state.splice(state.indexOf(user), 1);
               return;
            }
         });
      },
   }
})

export const { initUsers, addUser, editUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;