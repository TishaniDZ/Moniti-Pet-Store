import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PetDetailPage from './pages/PetDetailPage';
import CategoryPage from './pages/CategoryPage';
import ProductListPage from './pages/ProductListPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="container mx-auto my-5">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage />} />

            {/* Category Page for pets like small dogs, cats */}
            <Route path="/category/:category" element={<CategoryPage />} />

            {/* Pet details page */}
            <Route path="/pet/:id" element={<PetDetailPage />} />

            {/* Product list page */}
            <Route path="/products" element={<ProductListPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
