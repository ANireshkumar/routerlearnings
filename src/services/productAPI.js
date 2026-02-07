// src/services/productAPI.js

const products = [
  {
    id: 1,
    name: "Aloe Vera Gel",
    price: 199,
    category: "Face Care",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Neem Face Wash",
    price: 249,
    category: "Face Care",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Coconut Hair Oil",
    price: 299,
    category: "Hair Care",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "Herbal Shampoo",
    price: 349,
    category: "Hair Care",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 5,
    name: "Organic Soap",
    price: 99,
    category: "Soaps",
    image: "https://via.placeholder.com/200",
  },
];

export const getAllProducts = () => {
  return products;
};
