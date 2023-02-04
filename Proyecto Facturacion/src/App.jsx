<<<<<<< HEAD
import ROLES from "./Components/ROLES/index";
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LOGIN from './Components/LOGIN/index';
>>>>>>> main

import INICIO from './Components/INICIO/index';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
<<<<<<< HEAD
  return <ROLES />;
=======
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LOGIN />} />
                <Route path="/Home" element={<INICIO />} />
            </Routes>
        </BrowserRouter>
    );
>>>>>>> main
}

export default App;
