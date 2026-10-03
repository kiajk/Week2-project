function AvailabilityFilter({ availableOnly, setAvailableOnly }) {

  return (
    <label>
    <input type="checkbox" 
    checked={availableOnly}
    onChange={(event) => setAvailableOnly(event.target.checked)}/>
  Available Only

  </label>
  )
} 

export default AvailabilityFilter