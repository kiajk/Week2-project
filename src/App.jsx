import ProductCard from './components/ProductCard'
import SearchBar from './components/SearchBar'
import './App.css'
import { useState, useEffect } from 'react'
import { getProducts } from './services/productService'

function App() {
  const [search, setSearch] = useState("")
  const [showExpensive, setShowExpensive] = useState(false)
  const [sortAscending, setSortAscending] = useState(false)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts()
      setProducts(data)
      setLoading(false)
    }

    loadProducts()
  }, [])

  const filteredProducts = products.filter((product) =>
    ((showExpensive === true)
      ? product.price > 100
      : true) &&
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1>Product Explorer</h1>

      {loading && <p>loading products...</p>}

      <p>Products found: {filteredProducts.length}</p>

      <button
        onClick={() => setShowExpensive(!showExpensive)}
      >
        Show Expensive Products
      </button>

      <button
        onClick={() => setSearch("")}
      >
        Clear Search
      </button>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          name={product.title}
          price={product.price}
        />
      ))}
    </div>
  )
}

export default App