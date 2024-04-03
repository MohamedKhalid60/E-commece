import React, { useState } from "react";
import Product from "./Product";
import ShoppingCart from "./Cart";


export default function ProductPage() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = () => {
    // For demonstration purposes, let's assume the product details
    // You should replace these with your actual product data
    const newItem = {
      name: "Plain White Shirt",
      price: 15
    };

    setCartItems([...cartItems, newItem]);
  };

  return (
    <>
      <Product addToCart={addToCart} />
      <ShoppingCart items={this.props.cartItems} />
    </>
  );
}
