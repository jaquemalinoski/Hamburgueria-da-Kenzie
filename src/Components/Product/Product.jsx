import './styles.css'
import FormatNumber from "../FormatNumber/FormatNumber"
import Button from '../Button/Button'

function Product ({product, handleClick}) {

  return (
    <li className='productsList'>
      <div className='divImg'>
        <img className='fill' src={product.img} alt={product.name}/>
      </div>
        <h2 className='name'>{product.name}</h2>
        <p className='category'>{product.category}</p>
        <FormatNumber format={'0.0,'}>{product.price}</FormatNumber>
        <Button product={product.id} handleClick={handleClick}/>
    </li>
  )
}

export default Product