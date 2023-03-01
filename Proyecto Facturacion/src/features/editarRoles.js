import { createSlice } from '@reduxjs/toolkit';

export const editarRoles = createSlice({
    name: 'editrol',
    initialState: false,
    reducers: {
        showModalER: (state, action) => {
            return true;
        },
        closeModalER: (state, action) => {
            return false;
        },
    },
});

export const { showModalER, closeModalER } = editarRoles.actions;
export default editarRoles.reducer;
