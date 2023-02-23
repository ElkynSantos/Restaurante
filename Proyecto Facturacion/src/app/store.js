import { configureStore } from '@reduxjs/toolkit';

//* IMPORTAR REDUCER DE COMPONENTE, ejemplo:
//* import loginReducer from "componentes/..."
import usersSlice from '../features/usersSlice';
import createUserSlice from '../features/createUserSlice';
import createRolSlice from "../features/creacionRoles";
import editrolslice from "../features/editarRoles";
export const store = configureStore({
    reducer: {
        users: usersSlice,
        modalAddUserState: createUserSlice,
        createrol:createRolSlice,
        editrol:editrolslice
        //* Agregar el reducer del componente importado, ejemplo => login: loginReducer
    },
});
