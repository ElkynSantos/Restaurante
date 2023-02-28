import { RtnName} from "@reduxjs/toolkit";

export const RtnName = RtnNameSlice({
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

export const { showModal, closeModal } = RtnName.actions;
export default RtnName.reducer;