import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';

import LOGIN from './Components/LOGIN/index';
import ROLES from './Components/ROLES/index';
import CREARUSUARIO from './Components/CREARUSUARIO/index';
import INICIO from './Components/INICIO/index';
import MESAS from './Components/MESAS/index';
import LISTAPEDIDOS from './Components/LISTAPEDIDOS/index';
import PEDIDOS from './Components/PEDIDOS/index';
import FACTURACION from './Components/FACTURACION/index';
import USERS from './Components/USERS/index.js';
import FormPassword from './Components/FormPassword/index';
import Productos from './Components/CREARPRODUCTOS/index';
import Recovery from './Components/Recovery/Recovery';
import editarProductos from './Components/FormPassword/index';

import LISTAFACTURACION from './Components/LISTAFACTURACION/index.js';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import ProtectedRoute from './Components/ProtectedRoute';
import Email from './Components/EmailVerification/index';
// import IMPUESTO from './Components/IMPUESTOS';
import ECBMPUESTO from './Components/IMPUESTOSG';
import RecuperarContraseña from './Components/RecoveryPassword/index';
import FormPass from './Components/FormPassword/index';
import ChangePass from './Components/ChangePassword/index';
import Facturas from './Components/ADMFACTURAS/index';
import PRODUCTOS from './Components/Productos/Index';

// SERVICES
import { getPermissionsByUser } from './services/roles';

// let loggedUser;
// let loggedUser = {
//     id: 1,
//     name: "John",
//     permissions: ["quye"],
//     roles: ["admin"],
// }
import PrintFactura from './Components/APRINTFACTURA';

function App() {
    // console.log(!!permissions);
    // console.log(permissions);
    // console.log(!!permissions);
    // console.log(permissions.includes("/users"));

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    element={
                        //<ProtectedRoute isAllowed={!loggedUser}>
                        <LOGIN />
                        //</ProtectedRoute>
                    }
                />
                <Route path="/password-recovery" element={<FormPassword />} />
                <Route
                    path="/auth/reset-password/:token"
                    element={<Recovery />}
                />

                <Route path="/home" element={<INICIO />} />

                {/* CONFIGURACIÓN DEL SISTEMA */}

                <Route
                    path="/roles"
                    element={
                        <ProtectedRoute>
                            <ROLES />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/users"
                    element={
                        // <ProtectedRoute permissions={permissions}>
                        <ProtectedRoute>
                            <USERS />
                        </ProtectedRoute>
                    }
                />

                {/* CONFIGURACIÓN DEL NEGOCIO */}
                <Route
                    path="/taxes"
                    element={
                        <ProtectedRoute>
                            <ECBMPUESTO />
                        </ProtectedRoute>
                    }
                />
                <Route path={'/products'} element={<PRODUCTOS />} />
                <Route
                    path="/orders"
                    element={
                        // <ProtectedRoute isAllowed={!!permissions}>
                        <ProtectedRoute>
                            <PEDIDOS />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/orders-list"
                    element={
                        // <ProtectedRoute isAllowed={!!permissions} >
                        <ProtectedRoute>
                            <LISTAPEDIDOS />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/tables"
                    element={
                        // <ProtectedRoute isAllowed={!!permissions}>
                        <ProtectedRoute>
                            <USERS />
                            {/* <MESAS /> */}
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/invoicing"
                    element={
                        // <ProtectedRoute isAllowed={!!permissions}>
                        <ProtectedRoute>
                            <FACTURACION />
                        </ProtectedRoute>
                    }
                />
                {/* <Route path="/users" element={<USERS />} /> */}
                {/* <Route path="/editUser" element={<FormPassword />} /> */}
                <Route path="/invoice-list" element={<LISTAFACTURACION />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
