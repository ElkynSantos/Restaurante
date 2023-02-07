import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LOGIN from './Components/LOGIN/index';
import ROLES from './Components/ROLES/index';
import CREARUSUARIO from './Components/CREARUSUARIO/index';
import INICIO from './Components/INICIO/index';
import MESAS from './Components/MESAS/index';
import PEDIDOS from './Components/PEDIDOS/index';
import FACTURACION from './Components/FACTURACION/index';
import USERS from './Components/USERS/index';
import FormPassword from './Components/FormPassword/index';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import RecuperarContraseña from './Components/RecoveryPassword/index';
import FormPass from './Components/FormPassword/index';
import ChangePass from './Components/ChangePassword/index';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LOGIN />} />
                <Route path="/Home" element={<INICIO />} />
                <Route path="/Pedidos" element={<PEDIDOS />} />
                <Route path="/mesas" element={<MESAS />} />
                <Route path="/facturacion" element={<FACTURACION />} />
                <Route path="/Users" element={<USERS />} />
                <Route path="/Recuperar" element={<FormPassword />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
