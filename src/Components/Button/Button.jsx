function Button ({ product, handleClick }) {
  return (
    <button onClick={() => handleClick(product)} className='addCarrinho'>Adicionar</button>
  )
}

export default Button