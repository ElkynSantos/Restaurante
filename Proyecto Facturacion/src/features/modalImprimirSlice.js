import { createSlice } from '@reduxjs/toolkit';

export const modalImprimirSlice = createSlice({
    name: 'modalImprimirSlice',
    initialState: false,
    reducers: {
        showModalMI: (state, action) => {
            return true;
        },
        closeModalMI: (state, action) => {
            return false;
        },
    },
});

export const { showModalMI, closeModalMI } = modalImprimirSlice.actions;
export default modalImprimirSlice.reducer;
