import ProductCard from './ProductCard'
import './App.css'

function App() {
  const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Keyboard", price: 80 },
  { id: 3, name: "Desk", price: 300 },
]
  const filteredProducts = products.filter((product) =>
  product.price > 100)
  return (
    <div>
      <h1>Product Explorer</h1>
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