import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // You can handle the search logic here, like navigating to a search results page
    console.log('Search Term:', searchTerm);
  };

  return (
    <nav className="bg-primary p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">/
        {/* Logo/Title */}
        <Link to="/" className="text-2xl font-bold">
          Monito Pet Store
        </Link>

        {/* Links */}
        <div className="space-x-4">
          <Link to="/" className="hover:text-secondary">Home</Link>
          <Link to="/category/Category" className="hover:text-secondary">Category</Link>
          <Link to="/products" className="hover:text-secondary">Products</Link>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="ml-4 flex">
          <input
            type="text"
            placeholder="Search products, pets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-l-md text-black"
          />
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 rounded-r-md hover:bg-secondary-dark"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
