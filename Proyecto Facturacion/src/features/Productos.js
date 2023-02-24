import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch('http://localhost:3000/products/').catch(
            (error) => {
                console.error(error);
            }
        );
        const data = await response.json();

        return data;
    }
);

export const products = createSlice({
    name: 'products',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                // Manejar el estado pendiente
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                // Actualizar el estado con los datos obtenido
                return action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                // Manejar el error
                console.log('ERROR');
            });
    },
});

export const {} = products.actions;

export default products.reducer;
