import { createSlice } from '@reduxjs/toolkit';

export const ModalPedidos = createSlice({
    name: 'ModalPedidos',
    initialState: false,
    reducers: {
        showModalPedidos: (state, action) => {
            return true;
        },
        closeModalPedidos: (state, action) => {
            return false;
        },
    },
});

export const { showModalPedidos, closeModalPedidos } = ModalPedidos.actions;
export default ModalPedidos.reducer;
