import React, { useState } from 'react';
import CategoryFilter from '../Components/CategoryFilter';
import ProductCard from '../Components/ProductCard';

const Products = () => {
  const allProducts = [
    {
      id: 1,
      name: 'Organic Argan Oil Serum',
      category: 'Hair Care',
      price: 24.99,
      rating: 4.8,
      description: '100% pure, cold-pressed argan oil for deep moisturizing',
      image: '🫒',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Coconut & Shea Butter Hair Mask',
      category: 'Hair Care',
      price: 18.99,
      rating: 4.9,
      description: 'Intensive hydrating mask for dry & damaged hair',
      image: '🥥',
      badge: 'Organic'
    },
    {
      id: 3,
      name: 'Rose Hip Facial Oil',
      category: 'Skin Care',
      price: 32.99,
      rating: 4.7,
      description: 'Vitamin C rich oil for glowing, youthful skin',
      image: '🌹',
      badge: 'Premium'
    },
    {
      id: 4,
      name: 'Green Tea Cleansing Gel',
      category: 'Skin Care',
      price: 16.99,
      rating: 4.6,
      description: 'Gentle exfoliating cleanser with antioxidants',
      image: '🫖',
      badge: 'New'
    },
    {
      id: 5,
      name: 'Aloe Vera Hair Conditioner',
      category: 'Hair Care',
      price: 14.99,
      rating: 4.8,
      description: 'Lightweight conditioner for silky smooth hair',
      image: '🌱',
      badge: 'Vegan'
    },
    {
      id: 6,
      name: 'Honey & Oat Face Mask',
      category: 'Skin Care',
      price: 22.99,
      rating: 4.9,
      description: 'Soothing mask for sensitive and irritated skin',
      image: '🍯',
      badge: 'Bestseller'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(allProducts.map(p => p.category))];
  
  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100 p-8">
      <h1 className="text-4xl font-bold text-center text-amber-900 mb-8">
        Our Natural Skin & Hair Care Products
      </h1>
      
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <ProductCard products={filteredProducts} />
    </div>
  );
};

export default Products;