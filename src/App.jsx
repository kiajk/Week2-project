import ProductCard from './ProductCard'
import './App.css'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState("");

  const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Keyboard", price: 80 },
  { id: 3, name: "Desk", price: 300 },
]
  const filteredProducts = products.filter((product) =>
  product.price > 100 &&
  product.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
      <h1>Product Explorer</h1>
      <input
       type="text"
       placeholder='Search products'
       onChange={(event) => setSearch(event.target.value)} />
    {filteredProducts.map((product) => (
  <ProductCard
    key={product.id}
    name={product.name}
    price={product.price}
  />
))}
      
    </div>
  )
}

export default App