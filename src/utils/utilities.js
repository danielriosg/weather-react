const STORAGE_KEY = "lastSearches";

export function getStoredSearches() {
  const storedSearches = localStorage.getItem(STORAGE_KEY);
  return storedSearches ? JSON.parse(storedSearches) : [];
}

export function storeSearch(city) {
  const storedSearches = getStoredSearches();
  storedSearches.push(city);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storedSearches));
}
