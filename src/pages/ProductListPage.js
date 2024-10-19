import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../utils/api'; // Import your fetchProducts function

const ProductListPage = () => {
  // State to store the list of products
  const [products, setProducts] = useState([]);
  // State to track loading status
  const [loading, setLoading] = useState(true);
  // State to store any errors
  const [error, setError] = useState(null);

  // Fetch products from the API
  const getProducts = async () => {
    try {
      const data = await fetchProducts(); // Call the imported fetchProducts function
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []); // Empty dependency array ensures this runs only once

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Error handling
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded-md" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-700">
                ${typeof product.price === 'number' ? product.price.toFixed(2) : 'N/A'}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
