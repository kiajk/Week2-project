function ProductDetails({ product, onClose }) {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      <p>Stock: {product.stock}</p>
      <p>{product.description}</p>

      <button onClick={onClose}>
        Close
      </button>
    </div>
  )
}

export default ProductDetails