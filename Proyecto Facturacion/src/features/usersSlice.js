import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
   name: "users",
   initialState: [],
   reducers: {
      initUsers: (state, action) => {
         console.log(state, action);
         return action.payload;
      },
      addUser: (state, action) => {
         state.push(action.payload);
      },
      editUser: (state, action) => {
      },
      changeUserStatus: (state, action) => {
         const {DNI, status} = action.payload;
         const foundUser = state.find((task) => task.DNI === action.payload.DNI);

         if(foundUser) {
            foundUser.status = status == 1? 0 : 1;
         }
         // state.forEach(async (user) => {
         //    if(user.DNI === action.payload) {

         //       return;
         //    }
         // });
      },
   }
})

export const { initUsers, addUser, editUser, changeUserStatus } = usersSlice.actions;
export default usersSlice.reducer;