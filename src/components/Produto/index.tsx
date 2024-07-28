import React from 'react'
import { useDispatch } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

import { adicionarNoCarinho } from '../../store/reducers/carrinho'
import {
  adicionarFavorito,
  removerFavorito
} from '../../store/reducers/favoritos'

type Props = {
  produto: ProdutoType
  aoComprar: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({
  produto,
  // aoComprar,
  // favoritar,
  estaNosFavoritos
}: Props) => {
  const dispatch = useDispatch()

  const handleAdicionarAoCarinho = () => {
    dispatch(adicionarNoCarinho(produto))
  }

  const handleFavoritar = () => {
    console.log('Está vivo?')
    if (estaNosFavoritos) {
      dispatch(removerFavorito(produto))
    } else {
      dispatch(adicionarFavorito(produto))
    }
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleFavoritar} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleAdicionarAoCarinho} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
