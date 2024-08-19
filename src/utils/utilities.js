const STORAGE_KEY = "lastSearches";

export function getStoredSearches() {
  const storedSearches = localStorage.getItem(STORAGE_KEY);
  return storedSearches ? JSON.parse(storedSearches) : [];
}

export function storeSearch(city) {
  const storedSearches = getStoredSearches();
  // Add the new search to the start of the array
  storedSearches.unshift(city);

  // Keep only the last 5 searches
  const limitedSearches = storedSearches.slice(0, 5);

  // Store the limited array in localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(limitedSearches));
}
