import { createSlice } from '@reduxjs/toolkit';

export const editarProductos = createSlice({
    name: 'editarProductos',
    initialState: false,
    reducers: {
        showModalEP: (state, action) => {
            return true;
        },
        closeModalEP: (state, action) => {
            return false;
        },
    },
});

export const { showModalEP, closeModalEP } = editarProductos.actions;
export default editarProductos.reducer;
