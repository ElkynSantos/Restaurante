import { createSlice } from "@reduxjs/toolkit";

export const editUser = createSlice({
   name: "editUser",
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

export const { showModal, closeModal } = editUser.actions;
export default editUser.reducer;