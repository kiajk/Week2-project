Product Explorer

A React practice project for learning components, props, arrays, map(), and other React concepts.

Stages

Stage 07 — ProductCard + map()

* Rendered products using map().
* Passed product data to ProductCard through props.
* Used key={product.id} for rendering a list.
### Stage 08 — filter()

- Used `filter()` to create a new array from products.
- Filtered products by price greater than 100.
- Rendered the filtered array with `map()`.
### Stage 09 — Search

- Added `useState` to store the search text.
- Used `onChange` to update the search state.
- Used `filter()` and `includes()` to search products.
- Made the search case-insensitive with `toLowerCase()`.
### Stage 10 — Toggle Filter

- Added `showExpensive` state with `useState`.
- Added a button to toggle the expensive-products filter.
- Used `onClick` to update the state.
- Combined a conditional price filter with the search filter.
### Stage 11 — Clear Search

- Added a button to clear the search state.
- Used `setSearch("")` to reset the search.
- Made the input a controlled input with `value={search}`.
### Stage 12 — Results Count

- Used `filteredProducts.length` to count filtered products.
- Displayed the number of matching products.
- The count updates automatically when search or filters change.
Stage 14 — API Fetch

* Connected the app to a real product API.
* Created a separate productService.js file for API requests.
* Used fetch() and async/await to get products.
* Used useEffect() to fetch products when the app loads.
* Stored API data in React state with useState.
* Updated the product rendering and search logic to work with API data.
Stage 15 — Loading State

* Added a loading state for API requests.
* Displayed a loading message while products are being fetched.
* Updated the loading state after the API response is received.
Stage 16 — Error State

* Added error handling for API requests using try/catch.
* Added an error state to store API errors.
* Created a reusable ErrorState component.
* Used finally to stop the loading state after the request finishes.
Stage 17 — Empty State

* Added an empty state for cases where no products match the search or filters.
* Created a reusable EmptyState component.
* Displayed a message when the filtered product list is empty.
### Stage 18 — Category Filter

- Added a category filter based on product categories from the API.
- Created a reusable `CategoryFilter` component.
- Used `Set` to remove duplicate categories.
- Combined category filtering with search and price filtering.
### Stage 19 — Available Only Filter

- Added an Available Only checkbox.
- Filtered products by stock availability.
- Combined availability filtering with search, category, and price filters.
### Stage 20 — Sort by Price

- Added price sorting controls.
- Implemented Low to High and High to Low sorting.
- Used a copied array before `sort()` to avoid mutating filtered results.
### Stage 21 — Clear Filters

- Added a button to reset all search and filter states.
- Clears search, category, availability, price filter, and sorting.
### Stage 22 — Product Details

- Added product selection from the product list.
- Created a reusable ProductDetails component.
- Displayed detailed information for the selected product.
- Added a button to close the details view.