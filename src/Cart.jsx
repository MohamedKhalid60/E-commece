import React from "react";


export default function ShoppingCart({ items }) {
  return (
    <div className="text-center">
      <h2>Shopping Cart</h2>
      <ul>
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))
        ) : (
          <li>No items in the cart</li>
        )}
      </ul>
    </div>
  );
}
