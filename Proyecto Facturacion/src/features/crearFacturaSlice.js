import { createSlice } from '@reduxjs/toolkit';

export const createbill = createSlice({
    name: 'createbill',
    initialState: false,
    reducers: {
        showModalCreateBill: (state, action) => {
            return true;
        },
        closeModalCreateBill: (state, action) => {
            return false;
        },
    },
});

export const { showModalCreateBill, closeModalCreateBill } = createbill.actions;
export default createbill.reducer;
