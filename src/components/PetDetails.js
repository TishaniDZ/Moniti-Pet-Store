import React from 'react';

const PetDetails = ({ pet }) => {
  return (
    <div className="pet-details bg-white p-10 rounded shadow-lg">
      <img src={pet.imageUrl} alt={pet.name} className="w-full h-96 object-cover mb-5 rounded" />
      <h1 className="text-3xl font-bold mb-3">{pet.name}</h1>
      <p className="text-lg text-gray-700 mb-2">Age: {pet.age} months</p>
      <p className="text-lg text-gray-700 mb-2">Gender: {pet.gender}</p>
      <p className="text-lg text-gray-700 mb-5">Color: {pet.color}</p>
      <p className="text-2xl text-primary font-bold mb-5">{pet.price} VND</p>
      <button className="bg-secondary text-white px-5 py-2 rounded hover:bg-orange-600">Adopt Now</button>
    </div>
  );
};

export default PetDetails;
