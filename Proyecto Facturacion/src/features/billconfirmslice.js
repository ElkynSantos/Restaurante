import { createSlice } from '@reduxjs/toolkit';

export const billconfirmslice = createSlice({
    name: 'billconfirmslice',
    initialState: false,
    reducers: {
        showbillconfirmslice: (state, action) => {
            return true;
        },
        closebillconfirmslice: (state, action) => {
            return false;
        },
    },
});

export const { showbillconfirmslice, closebillconfirmslice } =
    billconfirmslice.actions;
export default billconfirmslice.reducer;
