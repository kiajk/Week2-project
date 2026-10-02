// Reusable component that receives product data through props
function ProductCard({ name, price }) {
  return (
    <div>
      {/* Display the product name */}
      <h2>{name}</h2>

      {/* Display the product price */}
      <p>{price}</p>
    </div>
  )
}

export default ProductCard