import './App.css';
import { useEffect, useState } from 'react'
import ProductList from './Components/ProductsList/ProductsList'
import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then((response) => response.json())
    .then((response) => setProducts(response))
    .catch((err) => console.log(err))

    calculateTotal()
  }, [currentSale])
  
  function showProducts (event) {   
    event.preventDefault()
    
    const input = event.target.children[0].value
    
    const filtered = products.filter((element) => {
      return element.name.toLowerCase().includes(input.toLowerCase())
    })
    
    event.target.children[0].value = ''
    setFilteredProducts(filtered)
    setIsFiltered(true)
  }
  
  function handleClick (productId) {
    const found = products.find((element) => element.id === productId)
    const duplicate = currentSale.find((element) => element.id === found.id)

    duplicate === undefined && setCurrentSale([...currentSale, found])
  }

  function calculateTotal () {
    const total = currentSale.reduce((acc, value) => acc + value.price, 0)
    setCartTotal(total)
  }
  
  function remove (id) {
    const filteredSale = currentSale.filter((element) => element.id !== id)

    setCurrentSale(filteredSale)
  }
  
  return (
    <div className="App">
      <Header showProducts={showProducts}/>
      <ProductList isFiltered={isFiltered} filteredProducts={filteredProducts} products={products} handleClick={handleClick}/>
      <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} cartTotal={cartTotal} remove={remove}/>
    </div>
  );
}

export default App

