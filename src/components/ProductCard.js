import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-md text-blue-500 font-bold">{product.price} VND</p>
      </div>
    </div>
  );
};

export default ProductCard;
