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

import { Provider, useDispatch, useSelector } from 'react-redux';

import { store } from "./app/store.js"
import ProtectedRoute from './Components/ProtectedRoute';
import Email from './Components/EmailVerification/index';
// import IMPUESTO from './Components/IMPUESTOS';
import ECBMPUESTO from './Components/IMPUESTOSG';
import RecuperarContraseña from './Components/RecoveryPassword/index';
import FormPass from './Components/FormPassword/index';
import ChangePass from './Components/ChangePassword/index';
import PRODUCTOS from './Components/Productos/Index';
import './App.css';

// let loggedUser;
// let loggedUser = {
//     id: 1,
//     name: "John",
//     permissions: ["quye"],
//     roles: ["admin"],
// }

function App() {
    const loggedStatus = useSelector(state => state.loggedStatus);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route 
                        index 
                        element={
                            <ProtectedRoute isAllowed={!loggedStatus} redirectTo="/home">
                                <LOGIN />
                            </ProtectedRoute>
                        }
                        />
                    <Route 
                        path="/password-recovery"
                        element={
                            <FormPassword />
                        }
                        />
                    <Route
                        path="/auth/reset-password/:token"
                        element={<Recovery />}
                        />

                    <Route 
                        path="/home" 
                        element={
                            <ProtectedRoute isAllowed={loggedStatus} redirectTo="/">
                                <INICIO />
                            </ProtectedRoute>
                        }
                        />

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
                            <ProtectedRoute isAllowed={loggedStatus}>
                                <USERS />
                            </ProtectedRoute>
                        }
                        />

                    {/* CONFIGURACIÓN DEL NEGOCIO */}
                    <Route 
                        path="/taxes" 
                        element={
                            <ProtectedRoute isAllowed={loggedStatus}>
                                <ECBMPUESTO />
                            </ProtectedRoute>
                        } 
                        />
                    <Route 
                        path={'/products'} 
                        element={
                            <ProtectedRoute isAllowed={loggedStatus}>
                                <PRODUCTOS />
                            </ProtectedRoute>
                        } 
                        />
                    <Route 
                        path="/orders" 
                        element={
                            <ProtectedRoute isAllowed={loggedStatus}>
                                <PEDIDOS />
                            </ProtectedRoute>
                        }
                        />
                    <Route 
                        path="/orders-list" 
                        element={
                            <ProtectedRoute isAllowed={loggedStatus}>
                                <LISTAPEDIDOS />
                            </ProtectedRoute>
                        }
                        />
                    <Route 
                        path="/tables" 
                        element={
                            <ProtectedRoute isAllowed={loggedStatus}>
                                <MESAS />
                            </ProtectedRoute>
                        }
                        />
                    <Route 
                        path="/invoicing" 
                        element={
                            <ProtectedRoute isAllowed={loggedStatus}>
                                <FACTURACION />
                            </ProtectedRoute>
                        }
                        />
                    <Route
                        path="/invoice-list"
                        element={
                            <ProtectedRoute isAllowed={loggedStatus}>
                                <LISTAFACTURACION />
                            </ProtectedRoute>
                        }
                        />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
