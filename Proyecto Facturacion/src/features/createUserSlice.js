import { createSlice } from "@reduxjs/toolkit";

export const createUser = createSlice({
   name: "createUser",
   initialState: false,
   reducers: {
      showModal: (state, action) => {
         return true;
      },
      closeModal: (state, action) => {
         return false;
      }
   }
})

export const { showModal, closeModal } = createUser.actions;
export default createUser.reducer;