import {
    BrowserRouter,
    Routes,
    Route,
    useParams,
    Navigate,
} from 'react-router-dom';
// import { useState, useEffect } from 'react';

import LOGIN from './Components/LOGIN/index';
import ROLES from './Components/ROLES/index';
import CREARUSUARIO from './Components/CREARUSUARIO/index';
import INICIO from './Components/INICIO/index';
import MESAS from './Components/MESAS/index';
import LISTAPEDIDOS from './Components/LISTAPEDIDOS/index';
import COCINA from './Components/Cocina REPAIR/index';
import PEDIDOS from './Components/PEDIDOS/index';
import FACTURACION from './Components/FACTURACION/index';
import USERS from './Components/USERS/index.js';
import FormPassword from './Components/FormPassword/index';
import Productos from './Components/CREARPRODUCTOS/index';
import Recovery from './Components/Recovery/Recovery';
import editarProductos from './Components/FormPassword/index';

import LISTAFACTURACION from './Components/LISTAFACTURACION/index.js';

import { Provider, useDispatch, useSelector } from 'react-redux';

import { store } from './app/store.js';
import ProtectedRoute from './Components/ProtectedRoute';
import Email from './Components/EmailVerification/index';
// import IMPUESTO from './Components/IMPUESTOS';
import ECBMPUESTO from './Components/IMPUESTOSG';
import RecuperarContraseña from './Components/RecoveryPassword/index';
import FormPass from './Components/FormPassword/index';
import ChangePass from './Components/ChangePassword/index';
import Facturas from './Components/ADMFACTURAS/index';
import PRODUCTOS from './Components/Productos/Index';
import './App.css';

// let loggedUser;
// let loggedUser = {
//     id: 1,
//     name: "John",
//     permissions: ["quye"],
//     roles: ["admin"],
// }
import REPORTES from './Components/REPORTEFACTURAS/index';
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
import EditarPerf from './Components/EDITARPERFIL';

import Report from './Components/REPORTEFACTURAS';

function App() {
    const loggedStatus = useSelector((state) => state.loggedStatus);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate to={'/'} />}></Route>{' '}
                {/* RUTA QUE NO EXISTE */}
                <Route
                    index
                    element={
                       
                        
                            <LOGIN />
                        
                    }
                />
                <Route path="/password-recovery" element={<FormPassword />} />
                <Route
                    path="/auth/reset-password/:token"
                    element={<Recovery />}
                />
                <Route
                    path="/home"
                    element={
                        
                            <INICIO />
                        
                    }
                />
                {/* CONFIGURACIÓN DEL SISTEMA */}
                <Route
                    path="/roles"
                    element={
                        
                            <ROLES />
                        
                    }
                />
                <Route
                    path="/users"
                    element={
                       
                            <USERS />
                       
                    }
                />
                <Route
                    path="/bills"
                    element={
                        
                            <Facturas />
                        
                    }
                />
                <Route
                    path="/printbills"
                    element={
                       
                            <PrintFactura />
                        
                    }
                />
                <Route
                    path="/kitchen"
                    element={
                        
                            <COCINA />
                       
                    }
                />
                {/* CONFIGURACIÓN DEL NEGOCIO */}
                <Route
                    path="/taxes"
                    element={
                       
                            <ECBMPUESTO />
                       
                    }
                />
                <Route
                    path={'/products'}
                    element={
                       
                            <PRODUCTOS />
                        
                    }
                />
                <Route
                    path="/orders"
                    element={
                        
                            <PEDIDOS />
                        
                    }
                />
                <Route
                    path="/orders-list"
                    element={
                        
                            <LISTAPEDIDOS />
                       
                    }
                />
                <Route
                    path="/tables"
                    element={
                        
                            <MESAS />
                       
                    }
                />
                <Route
                    path="/invoicing"
                    element={
                        // <ProtectedRoute isAllowed={!!permissions}>
                       
                            <FACTURACION />
                        
                    }
                />
                <Route path="/profile" element={<EditarPerf />} />
                {/* <Route path="/users" element={<USERS />} /> */}
                {/* <Route path="/editUser" element={<FormPassword />} /> */}
                <Route
                    path="/reports"
                    element={
                        
                            <REPORTES />
                       
                    }
                />
                <Route
                    path="/invoice-list"
                    element={
                        
                            <LISTAFACTURACION />
                        
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
