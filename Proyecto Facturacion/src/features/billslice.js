import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};
export const billslice = createSlice({
    name: 'billslice',
    initialState,
    reducers: {
        newBill: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { newBill } = billslice.actions;
export default billslice.reducer;
