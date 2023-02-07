import { configureStore } from '@reduxjs/toolkit'

//* IMPORTAR REDUCER DE COMPONENTE, ejemplo:
//* import loginReducer from "componentes/..."
import usersSlice from '../features/usersSlice'

export const store = configureStore({
  reducer: {
      users: usersSlice
      //* Agregar el reducer del componente importado, ejemplo => login: loginReducer
  },
})