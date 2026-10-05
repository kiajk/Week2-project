function AvailabilityFilter({
  availableOnly,
  onAvailabilityChange
}) {
  return (
    <label>
      <input
        type="checkbox"
        checked={availableOnly}
        onChange={(event) =>
          onAvailabilityChange(event.target.checked)
        }
      />

      Available Only
    </label>
  )
}

export default AvailabilityFilter