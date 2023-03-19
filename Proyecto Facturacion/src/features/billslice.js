import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};
export const billslice = createSlice({
    name: 'billslice',
    initialState,
    reducers: {
        updateBillid: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { updateBillid } = billslice.actions;
export default billslice.reducer;
