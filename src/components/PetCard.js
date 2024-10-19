import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/petcard.css';

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <div
        className="pet-card-image"
        style={{ backgroundImage: `url(${pet.imageUrl})` }}
        alt={pet.name}
      />
      <div className="pet-card-info">
        <h3 className="pet-card-name">{pet.name}</h3>
        <p className="pet-card-details">{pet.gender} - {pet.age} months</p>
        <div className="pet-card-price">
          <span className="pet-price-label">{pet.price} VND</span>
        </div>
        <Link to={`/pet/${pet.id}`} className="text-blue-700 hover:underline mt-2 block">
          View Details
        </Link>
      </div>

      {/* Blog02 specific content */}
      <div className="pet-card-description">
        <h4 className="pet-card-title">Dog Diet You Need To Know</h4>
      </div>

      {/* Blog03 specific content */}
      <div className="pet-card-blog03-description">
        <h4 className="pet-card-blog03-title">What is a Pomeranian? How to Identify Pomeranian Dogs</h4>
        <p>
          The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.
        </p>
      </div>
    </div>
  );
};

export default PetCard;
