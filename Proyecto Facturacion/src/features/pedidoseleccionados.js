import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: [] };

export const pedidoseleccionados = createSlice({
    name: 'pedidoseleccionados',
    initialState,
    reducers: {
        updatepedidoseleccionados: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { updatepedidoseleccionados } = pedidoseleccionados.actions;
export default pedidoseleccionados.reducer;
