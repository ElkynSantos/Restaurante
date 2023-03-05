import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import LOGIN from './Components/LOGIN/index';
import ROLES from './Components/ROLES/index';
import CREARUSUARIO from './Components/CREARUSUARIO/index';
import INICIO from './Components/INICIO/index';
import MESAS from './Components/MESAS/index';
import LISTAPEDIDOS from './Components/LISTAPEDIDOS//index';
import PEDIDOS from './Components/PEDIDOS/index';
import FACTURACION from './Components/FACTURACION/index';
import USERS from './Components/USERS/index';
import FormPassword from './Components/FormPassword/index';
import Productos from './Components/CREARPRODUCTOS/index';
import Recovery from './Components/Recovery/Recovery';
import editarProductos from './Components/FormPassword/index';

import LISTAFACTURACION from './Components/LISTAFACTURACION/index';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import Email from './Components/EmailVerification/index';
import IMPUESTO from './Components/IMPUESTOS';
import ECBMPUESTO from './Components/IMPUESTOSG';
import RecuperarContraseña from './Components/RecoveryPassword/index';
import FormPass from './Components/FormPassword/index';
import ChangePass from './Components/ChangePassword/index';
import Facturas from './Components/ADMFACTURAS/index';
import PRODUCTOS from './Components/Productos/Index';
import Invoice from './Components/DISEÑFACTURAS/Index';




function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<INICIO />} />
                <Route path="/Home" element={<INICIO />} />
                <Route path="/Pedidos" element={<PEDIDOS />} />
                <Route path="/ListaPedidos" element={<LISTAPEDIDOS />} />
                <Route path="/mesas" element={<MESAS />} />
                <Route path="/facturacion" element={<FACTURACION />} />
                <Route path="/Users" element={<USERS />} />
                <Route path={'/Productos'} element={<PRODUCTOS />} />
                <Route path="/Recuperar" element={<FormPassword />} />
                <Route path="/bills" element={<Facturas />} />
                <Route
                    path="/auth/reset-password/:token"
                    element={<Recovery />}
                />
                <Route path="/editUser" element={<FormPassword />} />
                <Route
                    path="/ListaFacturacion"
                    element={<LISTAFACTURACION />}
                />
                <Route path="/Impuestos" element={<ECBMPUESTO />} />
                <Route path="/roles" element={<ROLES />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
