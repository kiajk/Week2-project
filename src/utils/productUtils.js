export function filterProducts(
  products,
  search,
  showExpensiveOnly,
  category,
  availableOnly
) {
  return products.filter((product) =>
    (showExpensiveOnly ? product.price > 100 : true) &&
    (category === "" ? true : product.category === category) &&
    (availableOnly ? product.stock > 0 : true) &&
    product.title.toLowerCase().includes(search.toLowerCase())
  )
}

export function sortProducts(products, sortAscending) {
  return [...products].sort((a, b) =>
    sortAscending
      ? a.price - b.price
      : b.price - a.price
  )
}

export function getCategories(products) {
  return [
    ...new Set(products.map((product) => product.category))
  ]
}