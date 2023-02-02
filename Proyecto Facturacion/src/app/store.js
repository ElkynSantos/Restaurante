import { configureStore } from '@reduxjs/toolkit'

//* IMPORTAR REDUCER DE COMPONENTE, ejemplo:
//* import loginReducer from "componentes/..."

export const store = configureStore({
  reducer: {
      //* Agregar el reducer del componente importado, ejemplo => login: loginReducer
  },
})