import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavorito: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      const existe = state.itens.some((p) => p.id === produto.id)

      if (!existe) {
        state.itens.push(produto)
      }
    },
    removerFavorito: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      state.itens = state.itens.filter((p) => p.id !== produto.id)
    }
  }
})

export const { adicionarFavorito, removerFavorito } = favoritosSlice.actions

export default favoritosSlice.reducer
