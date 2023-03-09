import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import loggedStatusSlice from '../features/loggedStatus';
import usersSlice from '../features/usersSlice';
import createUserSlice from '../features/createUserSlice';
import EditarProductoSlice from '../features/EditarProducto';
import ProductosSlice from '../features/Productos';
import CreateProductSlice from '../features/CreateProduct';
import sendeditableproductSlice from '../features/sendeditableproduct';
import editUserSlice from '../features/editUserSlice';

import createRolSlice from '../features/creacionRoles';
import editrolslice from '../features/editarRoles';

export const store = configureStore({
    reducer: {
        loggedStatus: loggedStatusSlice,
        users: usersSlice,
        modalAddUserState: createUserSlice,
        EditarProducto: EditarProductoSlice,
        products: ProductosSlice,
        CreateProduct: CreateProductSlice,
        sendeditableproduct: sendeditableproductSlice,

        modalEditUserState: editUserSlice,
        modalEditUser: editUserSlice,
        createrol: createRolSlice,
        editrol: editrolslice,
    },
    middleware: [thunk],
});
