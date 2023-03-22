import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import loggedStatusSlice from '../features/loggedStatus';
import usersSlice from '../features/usersSlice';
import createUserSlice from '../features/createUserSlice';
import editUserSlice from '../features/editUserSlice';

//Imports Productos
import EditarProductoSlice from '../features/EditarProducto';
import ProductosSlice from '../features/Productos';
import CreateProductSlice from '../features/CreateProduct';
import sendeditableproductSlice from '../features/sendeditableproduct';

//Imports Pedidos
import pedidosSlice from '../features/pedidosSlice';
import ModalPedidosSlice from '../features/ModalPedidosSlice';

import pedidoseleccionados from '../features/pedidoseleccionados';

//Imports Roles
import rolesSlice from '../features/rolesSlice';
import createRolSlice from '../features/creacionRoles';
import editrolslice from '../features/editarRoles';

//Imports Facturas
import editFacturaSlice from '../features/editFacturaSlice';
import createbill from '../features/crearFacturaSlice';
import billslice from '../features/billslice';
import billconfirmslice from '../features/billconfirmslice';
import pagarFacturaSlice from '../features/pagarFacturaSlice';

export const store = configureStore({
    reducer: {
        users: usersSlice,
        modalAddUserState: createUserSlice,
        modalEditUserState: editUserSlice,
        modalEditUser: editUserSlice,

        //Slices de Productos
        products: ProductosSlice,
        CreateProduct: CreateProductSlice,
        EditarProducto: EditarProductoSlice,
        sendeditableproduct: sendeditableproductSlice,

        //Slices de Pedidos
        ModalPedidos: ModalPedidosSlice,
        pedidos: pedidosSlice,

        pedidoseleccionados: pedidoseleccionados,

        //Slices de Roles
        roles: rolesSlice,
        createrol: createRolSlice,
        editrol: editrolslice,

        //Slice de Facturas
        editFactura: editFacturaSlice,
        createbill: createbill,
        billslice: billslice,
        billconfirmslice: billconfirmslice,
        pagarFacturaSlice: pagarFacturaSlice,
    },
    middleware: [thunk],
});
