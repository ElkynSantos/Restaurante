import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
//* IMPORTAR REDUCER DE COMPONENTE, ejemplo:
//* import loginReducer from "componentes/..."
import usersSlice from '../features/usersSlice';
import createUserSlice from '../features/createUserSlice';
import EditarProductoSlice from '../features/EditarProducto';
import ProductosSlice from '../features/Productos';
import CreateProductSlice from '../features/CreateProduct';
import sendeditableproductSlice from '../features/sendeditableproduct';

export const store = configureStore({
    reducer: {
        users: usersSlice,
        modalAddUserState: createUserSlice,
        EditarProducto: EditarProductoSlice,
        products: ProductosSlice,
        CreateProduct: CreateProductSlice,
        sendeditableproduct: sendeditableproductSlice,

        //* Agregar el reducer del componente importado, ejemplo => login: loginReducer
    },
    middleware: [thunk],
});
