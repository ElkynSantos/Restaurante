import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import usersSlice from '../features/usersSlice';
import createUserSlice from '../features/createUserSlice';
import EditarProductoSlice from '../features/EditarProducto';
import ProductosSlice from '../features/Productos';
import CreateProductSlice from '../features/CreateProduct';
import sendeditableproductSlice from '../features/sendeditableproduct';
import editUserSlice from '../features/editUserSlice';
import editFacturaSlice from '../features/editFacturaSlice';
import createRolSlice from '../features/creacionRoles';
import editrolslice from '../features/editarRoles';
import pedidosSlice from '../features/pedidosSlice';
import ModalPedidosSlice from '../features/ModalPedidosSlice';

export const store = configureStore({
    reducer: {
        users: usersSlice,
        modalAddUserState: createUserSlice,
        EditarProducto: EditarProductoSlice,
        products: ProductosSlice,
        CreateProduct: CreateProductSlice,
        sendeditableproduct: sendeditableproductSlice,
        editFactura: editFacturaSlice,
        pedidos: pedidosSlice,

        modalEditUserState: editUserSlice,
        modalEditUser: editUserSlice,
        createrol: createRolSlice,
        editrol: editrolslice,
        ModalPedidos: ModalPedidosSlice,
    },
    middleware: [thunk],
});
