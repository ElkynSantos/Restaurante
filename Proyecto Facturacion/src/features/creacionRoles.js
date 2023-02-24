import { createSlice } from '@reduxjs/toolkit';

export const creacionRoles = createSlice({
    name: 'createrol',
    initialState: false,
    reducers: {
        showModalCR: (state, action) => {
            return true;
        },
        closeModalCR: (state, action) => {
            return false;
        },
    },
});

export const { showModalCR, closeModalCR } = creacionRoles.actions;
export default creacionRoles.reducer;
