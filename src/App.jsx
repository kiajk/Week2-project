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
import {
  filterProducts,
  sortProducts,
  getCategories
} from './utils/productUtils'
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
  const filteredProducts = filterProducts(
    products,
    search,
    showExpensiveOnly,
    category,
    availableOnly
  )
  const sortedProducts = sortProducts(
    filteredProducts,
    sortAscending
  )
  const categories = getCategories(products)
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
        onSearchChange={setSearch}
      />
      <CategoryFilter
        category={category}
        onCategoryChange={setCategory}
        categories={categories}
      />
      <AvailabilityFilter
        availableOnly={availableOnly}
        onAvailabilityChange={setAvailableOnly}
      />
      <SortControl
        sortAscending={sortAscending}
        onSortChange={setSortAscending}
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