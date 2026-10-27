
const products = [
  {
    id: 1,
    title: "Classic Leather Sneakers",
    price: 79.99,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
    description: "Comfortable, premium leather casual sneakers designed for everyday wear."
  },
  {
    id: 2,
    title: "Ceramic Coffee Dripper",
    price: 28.50,
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
    description: "Handcrafted ceramic pour-over coffee cone for a clean and rich brew."
  },
  {
    id: 3,
    title: "Wireless Noise-Canceling Earbuds",
    price: 119.00,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
    description: "True wireless earbuds with immersive sound, transparency mode, and long battery life."
  },
  {
    id: 4,
    title: "Minimalist Desk Lamp",
    price: 45.00,
    category: "Home Office",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80",
    description: "Dimmable LED desk lamp with adjustable color temperatures to reduce eye strain."
  },
  {
    id: 5,
    title: "Canvas Weekender Bag",
    price: 85.00,
    category: "Travel",
    image: "https://images.unsplash.com/photo-1545231090-33832bae6e60?w=600&auto=format&fit=crop&q=80",
    description: "Spacious and sturdy canvas duffel bag perfect for short trips and weekend getaways."
  }
];

import { useContext } from "react";
import ProductCard from "./ProductCard";
import {StoreContext} from "../Store/MainStore";

function Products() {
  const {products} = useContext(StoreContext)
  return (
    <div>
      <h2 className="text-4xl font-bold my-10 text-center py-5 ">Products</h2>
      <div className="container grid grid-cols-3">
      {
        products.map((product) => (
        <ProductCard key={product.id} product={product} /> 
        ))
      }
      </div>
    </div>
  )
}

export default Products