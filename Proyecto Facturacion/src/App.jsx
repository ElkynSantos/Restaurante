import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LOGIN from './Components/LOGIN/index';

import INICIO from './Components/INICIO/index';
import MESAS from './Components/MESAS/index';
import PEDIDOS from './Components/PEDIDOS/index';
import FACTURACION from './Components/FACTURACION/index';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LOGIN />} />
                <Route path="/Home" element={<INICIO />} />
                <Route path="/Pedidos" element={<PEDIDOS />} />
                <Route path="/mesas" element={<MESAS />} />
                <Route path="/facturacion" element={<FACTURACION />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
