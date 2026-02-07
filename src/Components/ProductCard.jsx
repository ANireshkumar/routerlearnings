import React from 'react';

const ProductCard = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products && products.map(product => (
        <div
          key={product.id}
          className="bg-gradient-to-br from-amber-50 to-stone-100 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 p-5 border border-amber-200 relative"
        >
          {/* Badge */}
          <div className="absolute top-3 right-3 bg-amber-700 text-white text-xs font-bold px-3 py-1 rounded-full">
            {product.badge}
          </div>

          {/* Image/Icon */}
          <div className="text-6xl text-center my-4">
            {product.image}
          </div>

          {/* Category */}
          <span className="text-amber-700 text-xs uppercase font-bold">
            {product.category}
          </span>

          {/* Name */}
          <h3 className="text-lg font-bold text-gray-800 my-2">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-3">
            {product.description}
          </p>

          {/* Rating */}
          <div className="text-amber-600 font-semibold mb-2">
            ⭐ {product.rating}
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-amber-800 mb-4">
            ${product.price}
          </div>

          {/* Button */}
          <button className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;