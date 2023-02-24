import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};
export const sendeditableproduct = createSlice({
    name: 'sendeditableproduct',
    initialState,
    reducers: {
        guardar: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { guardar } = sendeditableproduct.actions;
export default sendeditableproduct.reducer;
