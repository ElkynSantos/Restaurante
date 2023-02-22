import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import usersSlice from '../features/usersSlice';
import createUserSlice from '../features/createUserSlice';
import EditarProductoSlice from '../features/EditarProducto';
import ProductosSlice from '../features/Productos';
import CreateProductSlice from '../features/CreateProduct';
import sendeditableproductSlice from '../features/sendeditableproduct';
import editUserSlice from '../features/editUserSlice';

export const store = configureStore({
    reducer: {
        users: usersSlice,
        modalAddUserState: createUserSlice,
        EditarProducto: EditarProductoSlice,
        products: ProductosSlice,
        CreateProduct: CreateProductSlice,
        sendeditableproduct: sendeditableproductSlice,

        modalEditUserState: editUserSlice,
    },
    middleware: [thunk],
});
