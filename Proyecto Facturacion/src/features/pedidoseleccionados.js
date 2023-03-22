import { createSlice } from '@reduxjs/toolkit';

export const pedidoseleccionados = createSlice({
    name: 'pedidoseleccionados',
    initialState: {
        value: [],
        subtotal: 0.0,
        total: 0.0,
    },
    reducers: {
        updatepedidoseleccionados: (state, action) => {
            state.value = action.payload;
        },
        updateSubtotal: (state, action) => {
            state.subtotal = action.payload;
        },
        updateTotal: (state, action) => {
            state.total = action.payload;
        },
    },
});

export const { updatepedidoseleccionados, updateTotal, updateSubtotal } =
    pedidoseleccionados.actions;
export default pedidoseleccionados.reducer;
