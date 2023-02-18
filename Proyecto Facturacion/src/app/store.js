import { configureStore } from '@reduxjs/toolkit';

//* IMPORTAR REDUCER DE COMPONENTE, ejemplo:
//* import loginReducer from "componentes/..."
import usersSlice from '../features/usersSlice';
import createUserSlice from '../features/createUserSlice';
import EditarProductoSlice from '../features/EditarProducto';
import ProductosSlice from '../features/Productos';
import CreateProductSlice from '../features/CreateProduct';

export const store = configureStore({
    reducer: {
        users: usersSlice,
        modalAddUserState: createUserSlice,
        EditarProducto: EditarProductoSlice,
        products: ProductosSlice,
        CreateProduct: CreateProductSlice,

        //* Agregar el reducer del componente importado, ejemplo => login: loginReducer
    },
});
