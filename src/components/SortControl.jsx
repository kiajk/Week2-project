function SortControl({
  sortAscending,
  onSortChange
}) {
  return (
    <label>
      <input
        type="checkbox"
        checked={sortAscending}
        onChange={(event) =>
          onSortChange(event.target.checked)
        }
      />

      Sort by Price: Low to High
    </label>
  )
}

export default SortControl