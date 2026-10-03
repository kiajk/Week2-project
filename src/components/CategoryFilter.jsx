function CategoryFilter({ category, setCategory, categories }) {
  return (
    <select
      value={category}
      onChange={(event) => setCategory(event.target.value)}
    >
      <option value="">All Categories</option>

      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  )
}

export default CategoryFilter