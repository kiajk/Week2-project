function SortControl({ sortAscending, setSortAscending }) {

  return (
    <select 
    value={sortAscending ? "asc" : "desc"}
    onChange={(event) => 
    setSortAscending(event.target.value === "asc")}>
        <option value="desc">price:High to Low</option>
        <option value="asc">price:Low to High</option>
    </select>
  )
}

export default SortControl