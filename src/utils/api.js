const BASE_URL = 'https://monitor-backend-rust.vercel.app/api';

// Fetch pets list
export const fetchPets = async (filter = {}) => {
  let queryString = Object.keys(filter)
    .map((key) => `${key}=${filter[key]}`)
    .join('&');
  const response = await fetch(`${BASE_URL}/pets?${queryString}`);
  return await response.json();
};

// Fetch individual pet by ID
export const fetchPetById = async (id) => {
  const response = await fetch(`${BASE_URL}/pets/${id}`);
  return await response.json();
};

// Fetch products list
export const fetchProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  return await response.json();
};

// Fetch customers list
export const fetchCustomers = async () => {
  const response = await fetch(`${BASE_URL}/customers`);
  return await response.json();
};

// Fetch more puppies (same as fetchPets)
export const fetchMorePuppies = async (filter = {}) => {
  let queryString = Object.keys(filter)
    .map((key) => `${key}=${filter[key]}`)
    .join('&');
  const response = await fetch(`${BASE_URL}/pets?${queryString}`);
  return await response.json();
};
