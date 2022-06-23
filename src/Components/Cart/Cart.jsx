import './styles.css'
import numeral from 'numeral'

function Cart ({currentSale, setCurrentSale, cartTotal, remove}) {

  return (
    <div className="divCarrinho">
      <p className='bag'>Carrinho de compras</p>
      
        {currentSale.length <= 0 ? (
          <div className='cart'>
            <h3 className='nameCart'>Sua Sacola está vazia</h3>
            <p className='categoryCart'>Adicione itens</p>
          </div>
        ) : (
          <div className='cart'>
            <ul className='ulCart'>
              {currentSale.map((element, index) => {
                return (
                  <li className='cartList' key={index}>
                  <img className='imgCart' src={element.img} alt={element.name}/>
                  <div className='divNameCart'>
                    <h3 className='nameCart'>{element.name}</h3>
                    <p className='categoryCart'>{element.category}</p>
                  </div>
                  <span onClick={() => remove(element.id)} className='removeCart'>Remover</span>
                </li>
                )
              })}
            </ul>
            <hr/>
            <p className='total'><span>Total</span><span>R$ {numeral(cartTotal).format('0,0.00')}</span></p>
            <button onClick={() => setCurrentSale([])} className='removeAll'>Remover todos</button>
          </div>
        )}
    </div>
  )
}

export default Cart

          