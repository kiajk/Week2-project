function ProductCard({ name, price, onSelect }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>

      <button onClick={onSelect}>
        View Details
      </button>
    </div>
  )
}

export default ProductCard