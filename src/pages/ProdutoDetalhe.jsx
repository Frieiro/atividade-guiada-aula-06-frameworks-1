import { useParams, Link } from 'react-router-dom'
import { produtos } from './Produtos'

export default function ProdutoDetalhe() {
  const { id } = useParams()
  const produto = produtos.find((p) => p.id === parseInt(id))

  if (!produto) {
    return (
      <div className="page-container">
        <h2>Produto nao encontrado!</h2>
        <Link className="back-link" to="/produtos">Voltar para a lista</Link>
      </div>
    )
  }

  return (
    <div className="page-container">
      <h1>Detalhes do Produto</h1>
      <h2>{produto.nome} - {produto.preco}</h2>
      <Link className="back-link" to="/produtos">Voltar para a lista</Link>
    </div>
  )
}
