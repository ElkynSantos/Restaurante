import { createSlice } from '@reduxjs/toolkit';

export const products = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        initproducts: (state, action) => {
            return action.payload;
        },
        addproducts: (state, action) => {
            state.push(action.payload);
        },
        editProducts: (state, action) => {},
    },
});

export const { initproducts, addproducts, editProducts } = products.actions;
export default products.reducer;
