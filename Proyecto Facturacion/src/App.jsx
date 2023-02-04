import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LOGIN from './Components/LOGIN/index';
import Barralateral from './Components/common';
import INICIO from './Components/INICIO/index';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LOGIN />} />
                <Route path="/Home" element={<INICIO />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
