import ProductCard from './ProductCard'
import './App.css'

function App() {
  const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Keyboard", price: 80 },
  { id: 3, name: "Desk", price: 300 },
]
  return (
    <div>
      <h1>Product Explorer</h1>
    {products.map((product) => (
      <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      </div>
    ))}
      
    </div>
  )
}

export default App