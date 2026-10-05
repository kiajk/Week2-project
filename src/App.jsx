import ProductCard from './components/ProductCard'
import SearchBar from './components/SearchBar'
import SortControl from './components/SortControl'
import ErrorState from './components/ErrorState'
import EmptyState from './components/EmptyState'
import CategoryFilter from './components/CategoryFilter'
import AvailabilityFilter from './components/AvailabilityFilter'
import ProductDetails from './components/ProductDetails'

import './App.css'
import { useState, useEffect } from 'react'
import { getProducts } from './services/productService'

function App() {  
  const [search, setSearch] = useState("")
  const [showExpensiveOnly, setShowExpensiveOnly] = useState(false)
  const [sortAscending, setSortAscending] = useState(false)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [category, setCategory] = useState("")
  const [availableOnly, setAvailableOnly] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        setError("Failed to load products.")
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  const filteredProducts = products.filter((product) =>
    (showExpensiveOnly
      ? product.price > 100
      : true) &&

    (category === ""
      ? true
      : product.category === category) &&

    (availableOnly
      ? product.stock > 0
      : true) &&

    product.title.toLowerCase().includes(search.toLowerCase())
  )

  const sortedProducts = [...filteredProducts].sort((a, b) =>
    sortAscending
      ? a.price - b.price
      : b.price - a.price
  )

  const categories = [
    ...new Set(products.map((product) => product.category))
  ]

  function clearFilters() {
    setSearch("")
    setCategory("")
    setAvailableOnly(false)
    setShowExpensiveOnly(false)
    setSortAscending(false)
  }

  return (
    <div>
      <h1>Product Explorer</h1>

      {loading && <p>loading products...</p>}

      {error && <ErrorState />}

      <p>Products found: {sortedProducts.length}</p>

      <button
        onClick={() => setShowExpensiveOnly(!showExpensiveOnly)}
      >
        Show Expensive Products
      </button>

      <button onClick={clearFilters}>
        Clear Filters
      </button>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CategoryFilter
        category={category}
        setCategory={setCategory}
        categories={categories}
      />

      <AvailabilityFilter
        availableOnly={availableOnly}
        setAvailableOnly={setAvailableOnly}
      />

      <SortControl
        sortAscending={sortAscending}
        setSortAscending={setSortAscending}
      />

      {sortedProducts.length === 0 ? (
        <EmptyState />
      ) : (
        sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.title}
            price={product.price}
            onSelect={() => setSelectedProduct(product)}
          />
        ))
      )}

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  )
}

export default App