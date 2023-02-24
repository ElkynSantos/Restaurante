import { createSlice } from "@reduxjs/toolkit";

export const editUser = createSlice({
   name: "editUser",
   initialState: {
      modalState: false,
      currentUser: {}
   },
   reducers: {
      showModal: (state, action) => {
         state.modalState = true;
      },
      closeModal: (state, action) => {
         state.modalState = false;
      },
      setCurrentEditUser: (state, action) => {
         state.currentUser = action.payload
      },
      setField: (state, action) => {
         const {field, value} = action.payload;
         state.currentUser = {
            ...state.currentUser,
            [field]: value
         };
      },
   }
})

export const { setCurrentEditUser, showModal, closeModal, setField } = editUser.actions;
export default editUser.reducer;