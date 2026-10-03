import ProductCard from './components/ProductCard'
import SearchBar from './components/SearchBar'
import './App.css'
import { useState, useEffect } from 'react'
import { getProducts } from './services/productService'
import ErrorState from './components/ErrorState'
import EmptyState from './components/EmptyState'
import CategoryFilter from './components/CategoryFilter'
import AvailabilityFilter from './components/AvailabilityFilter'
import SortControl from './components/SortControl'


function App() {
  const [search, setSearch] = useState("");
  const [showExpensive, setShowExpensive] = useState(false);
  const [sortAscending, setSortAscending] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("");
  const [availableOnly, setAvailableOnly] = useState(false);

  function clearFilters() {
  setSearch("")
  setCategory("")
  setAvailableOnly(false)
  setShowExpensive(false)
  setSortAscending(false)
}

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
    ((showExpensive === true)
      ? product.price > 100
      : true) &&
      (category === ""
        ? true
        :product.category === category) &&
        (availableOnly
        ? product.stock > 0
        : true) &&
    product.title.toLowerCase().includes(search.toLowerCase())
  )
  const categories = [...new Set(products.map((product) => product.category))]
  const sortedProducts = [...filteredProducts].sort((a, b) =>
  sortAscending ? a.price - b.price : b.price - a.price
)

  return (
    <div>
      <h1>Product Explorer</h1>

      {loading && <p>loading products...</p>}

      {error && <ErrorState />}

      <p>Products found: {filteredProducts.length}</p>

      <button
        onClick={() => setShowExpensive(!showExpensive)}
      >
        Show Expensive Products
      </button>
      <button onClick={clearFilters}>
      Clear Filters
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
      <SortControl
        sortAscending={sortAscending}
        setSortAscending={setSortAscending}
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

     {filteredProducts.length === 0 ? (
  <EmptyState />
) : (
  sortedProducts.map((product) => (
    <ProductCard
      key={product.id}
      name={product.title}
      price={product.price}
      // stock={product.stock}
    />
  ))
)}
    </div>
  )
}

export default App