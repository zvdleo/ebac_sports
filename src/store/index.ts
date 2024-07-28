import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import favoritosReducer from './reducers/favoritos'
import { produtosApi } from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [produtosApi.reducerPath]: produtosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosApi.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
