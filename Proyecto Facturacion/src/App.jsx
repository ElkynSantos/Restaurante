import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LOGIN from './Components/LOGIN/index';
import INICIO from './Components/INICIO/index';
import USERS from './Components/USERS';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LOGIN />} />
                <Route path="/Home" element={<INICIO />} />
                <Route path="/Users" element={<USERS />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
