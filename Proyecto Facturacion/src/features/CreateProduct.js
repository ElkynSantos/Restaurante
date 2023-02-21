import { createSlice } from '@reduxjs/toolkit';

export const createproducts = createSlice({
    name: 'createproducts',
    initialState: false,
    reducers: {
        showModalCP: (state, action) => {
            return true;
        },
        closeModalCP: (state, action) => {
            return false;
        },
    },
});

export const { showModalCP, closeModalCP } = createproducts.actions;
export default createproducts.reducer;
