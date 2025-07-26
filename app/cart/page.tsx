"use client";

import { useCart } from "../(components)/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Cart Test</h1>
      <p>Cart items: {cart.length}</p>
      {cart.map((item) => (
        <div key={item.id} className="p-2 border">
          {item.name} - {item.quantity}
        </div>
      ))}
    </div>
  );
} 