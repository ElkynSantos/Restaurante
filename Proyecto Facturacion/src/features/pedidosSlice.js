import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    value: [],
};

export const pedidosSlice = createSlice({
    name: 'pedidos',
    initialState,
    reducers: {
        addproduct: (state, action) => {
            const newProduct = action.payload;
            const productIds = state.value.map((product) => product.id);
            console.log(productIds);
            console.log(newProduct[0].id);
            const valor = productIds.includes(newProduct[0].id);

            // Verifica si el id ya existe en la matriz
            if (!valor) {
                // Agrega el producto solo si el id es único
                const productsWithCant = newProduct.map((product) => ({
                    ...product,
                    cant_producto: 1,
                }));
                state.value = state.value.concat(productsWithCant);
            }
        },
        removeproduct: (state, action) => {
            const productId = action.payload;
            const index = state.value.findIndex(
                (product) => product.id === productId
            );
            if (index !== -1) {
                state.value.splice(index, 1);
            }
        },

        sumQuantity: (state, action) => {
            const { id, quantity } = action.payload;

            const index = state.value.findIndex((product) => product.id === id);
            if (index !== -1) {
                state.value[index].cant_producto = parseInt(quantity);
            }
        },
    },
});

export const { addproduct, removeproduct, sumQuantity } = pedidosSlice.actions;
export default pedidosSlice.reducer;
