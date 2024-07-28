import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

import { useDispatch } from 'react-redux'
import { adicionarNoCarinho } from '../store/reducers/carrinho'
// import { adicionarFavorito } from '../store/reducers/favoritos'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  adicionarAoCarrinho: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({ produtos, favoritos, favoritar }: Props) => {
  const dispatch = useDispatch()

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const idsDosFavoritos = favoritos.map((f) => f.id)
    return idsDosFavoritos.includes(produtoId)
  }

  const handleAdicionarAoCarinho = (produto: ProdutoType) => {
    dispatch(adicionarNoCarinho(produto))
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
            aoComprar={handleAdicionarAoCarinho}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
