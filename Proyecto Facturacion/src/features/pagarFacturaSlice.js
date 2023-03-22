import { createSlice } from '@reduxjs/toolkit';

export const pagarFacturaSlice = createSlice({
    name: 'pagarFacturaSlice',
    initialState: { modalstate: false, idFactura: 0 },
    reducers: {
        showpagarFacturaSlice: (state, action) => {
            state.modalState = true;
        },
        closepagarFacturaSlice: (state, action) => {
            state.modalState = false;
        },
        UpdateidFactura: (state, action) => {
            state.idFactura = action.payload;
        },
    },
});

export const {
    showpagarFacturaSlice,
    closepagarFacturaSlice,
    UpdateidFactura,
} = pagarFacturaSlice.actions;
export default pagarFacturaSlice.reducer;
