import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarNoCarinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const produtoExiste = state.itens.find((p) => p.id === produto.id)

      if (produtoExiste) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    },
    removerDoCarinho: (state, action: PayloadAction<number>) => {
      const produtoId = action.payload
      state.itens = state.itens.filter((item) => item.id !== produtoId)
    }
  }
})

export const { adicionarNoCarinho, removerDoCarinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
