import { createSlice } from "@reduxjs/toolkit";

export const editFactura = createSlice({
   name: "editFactura",
   initialState: {
      modalState: false,
      currentFactura: {}
   },
   reducers: {
      showModalFactura: (state, action) => {
         state.modalState = true;
      },
      closeModalFactura: (state, action) => {
         state.modalState = false;
      },
      setCurrentEditFactura: (state, action) => {
         state.currentFactura = action.payload
      },
      setFieldFactura: (state, action) => {
         const {field, value} = action.payload;
         state.currentFactura = {
            ...state.currentFactura,
            [field]: value
         };
      },
   }
})

export const { setCurrentEditFactura, showModalFactura, closeModalFactura, setFieldFactura } = editFactura.actions;
export default editFactura.reducer;