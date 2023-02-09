import { configureStore } from '@reduxjs/toolkit'

//* IMPORTAR REDUCER DE COMPONENTE, ejemplo:
//* import loginReducer from "componentes/..."
import usersSlice from '../features/usersSlice'
import createUserSlice from '../features/createUserSlice'

export const store = configureStore({
  reducer: {
      users: usersSlice,
      modalAddUserState: createUserSlice
      //* Agregar el reducer del componente importado, ejemplo => login: loginReducer
  },
})