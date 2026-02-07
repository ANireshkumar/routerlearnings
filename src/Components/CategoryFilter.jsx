import React from 'react';

const CategoryFilter = ({ categories, selected, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8 justify-center">
      {categories && categories.map(category => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
            selected === category
              ? 'bg-amber-700 text-white shadow-lg'
              : 'bg-white text-amber-700 border-2 border-amber-700 hover:bg-amber-50'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;