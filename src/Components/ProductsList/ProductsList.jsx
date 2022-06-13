import Product from "../Product/Product.jsx"
import './styles.css'

function ProductList ({isFiltered, filteredProducts, products, handleClick}) {

  const list = isFiltered === true ? filteredProducts : products

  return (
    <ul className="ulProducts">
      {list.map(product => (
        <Product key={product.id} product={product} handleClick={handleClick}/>
      ))}
    </ul>
  )

}

export default ProductList