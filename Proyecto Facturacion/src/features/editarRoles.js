import { createSlice } from '@reduxjs/toolkit';

export const editarRoles = createSlice({
    name: 'editrol',
    initialState: false,
    reducers: {
        showModalER: (state, action) => {
            console.log('showModalER');
            return true;
        },
        closeModalER: (state, action) => {
            console.log('closeModalER');
            return false;
        },
    },
});

export const { showModalER, closeModalER } = editarRoles.actions;
export default editarRoles.reducer;
