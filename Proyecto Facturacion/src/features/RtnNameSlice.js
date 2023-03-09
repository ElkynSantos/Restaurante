import { createSlice} from "@reduxjs/toolkit";

export const RtnNamex = RtnNameSlice({
   name: "Rtn y Nombre",
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

export const { showModal, closeModal } = RtnNamex.actions;
export default RtnNamex.reducer;