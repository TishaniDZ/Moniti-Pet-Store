import React, { useEffect, useState } from 'react';
import PetCard from '../components/PetCard';
import ProductCard from '../components/ProductCard';
import MorePetsSlider from '../components/MorePetsSlider';
import HeroBanner from '../components/HeroBanner';
import NewBanner from '../components/NewBanner';
import NewBanner2 from '../components/NewBanner2';
import '../styles/home.css'; // Importing the extracted CSS file

const HomePage = () => {
  const [pets, setPets] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://monitor-backend-rust.vercel.app/api/pets')
      .then((response) => response.json())
      .then((data) => setPets(data.slice(0, 6)))
      .catch((error) => console.error('Error fetching pets:', error));

    fetch('https://monitor-backend-rust.vercel.app/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 8)))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="home-container">
      <div className="main-content">
        <HeroBanner />

        <section className="pets-section">
          <h2>Take A Look At Some Of Our Pets</h2>
          <div className="pets-grid">
            {pets.map((pet) => (
              <PetCard key={pet.id} pet={pet} image={pet.imageUrl} />
            ))}
          </div>
          <div className="view-more">
            <button>View more</button>
          </div>
        </section>

        <NewBanner />

        <section className="products-section">
          <h2>Our Products</h2>
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} image={product.imageUrl} />
            ))}
          </div>
          <div className="view-more">
            <button>View more</button>
          </div>
        </section>

        <MorePetsSlider />

        <section className="partners-section">
          <h2>Proud to be part of</h2>
          <div className="partners-logos">
            <img src="partner-logo-1.png" alt="Partner 1" />
            <img src="partner-logo-2.png" alt="Partner 2" />
            <img src="partner-logo-3.png" alt="Partner 3" />
            <img src="partner-logo-4.png" alt="Partner 4" />
          </div>
        </section>

        <NewBanner2 />

        <section className="knowledge-section">
          <h2>Useful Pet Knowledge</h2>
          <div className="knowledge-grid">
            <div className="knowledge-card">
              <img src="https://via.placeholder.com/300x200" alt="What is a Pomeranian?" />
              <h3>What is a Pomeranian?</h3>
              <p>How to identify Pomeranian dogs...</p>
            </div>
            <div className="knowledge-card">
              <img src="https://via.placeholder.com/300x200" alt="Dog Diet" />
              <h3>Dog Diet You Need To Know</h3>
              <p>Feeding your dog the right food...</p>
            </div>
            <div className="knowledge-card">
              <img src="https://via.placeholder.com/300x200" alt="Why Dogs Bite Furniture" />
              <h3>Why Dogs Bite Furniture</h3>
              <p>Prevent destructive behavior in your pets...</p>
            </div>
          </div>
        </section>
      </div>
      
    </div>
  );
};

export default HomePage;
