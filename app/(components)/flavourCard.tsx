"use client";
import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

interface FlavourCardProps {
  slug: string;
  image: string;
  brand: string;
  flavour: string;
  flavourStyle?: string;
  price: number;
  cutPrice: number;
  basePath: string;
}

const FlavourCard: React.FC<FlavourCardProps> = ({
  slug,
  image,
  brand,
  flavour,
  flavourStyle = "",
  price,
  cutPrice,
  basePath,
}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Link
      href={`${basePath}/${slug}`}
      className="group bg-white rounded-lg shadow hover:-translate-y-2 transition-transform"
    >
      <div className="flex flex-col items-center p-3 border border-gray-200 bg-gray-50 h-full">
        <div className="relative w-full h-32 sm:h-36 md:h-40 overflow-hidden rounded-md">
          <img
            src={image}
            alt={flavour}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Save {cutPrice - price} AED
          </div>
        </div>

        <h2 className={`mt-2 text-sm font-semibold text-center ${flavourStyle}`}>
          {flavour}
        </h2>
        <p className="text-xs text-gray-600 text-center">{brand}</p>

        <div className="mt-1 flex gap-1 justify-center items-center text-sm">
          <span className="text-teal-600 font-bold">AED {price}</span>
          <span className="line-through text-red-400 text-xs">AED {cutPrice}</span>
        </div>

        <div className="flex items-center justify-center gap-2 mt-1">
          <button
            onClick={(e) => {
              e.preventDefault();
              setQuantity(Math.max(1, quantity - 1));
            }}
            className="border px-2 py-1 rounded text-xs hover:bg-gray-200"
          >
            -
          </button>
          <span className="text-sm">{quantity}</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setQuantity(quantity + 1);
            }}
            className="border px-2 py-1 rounded text-xs hover:bg-gray-200"
          >
            +
          </button>
        </div>

        <button
          onClick={(e) => e.preventDefault()}
          className="mt-3 w-full flex items-center justify-center gap-1 bg-teal-600 text-white rounded-md py-1 text-sm hover:bg-teal-700"
        >
          <ShoppingCart className="w-4 h-4" /> Add to Cart
        </button>

        <div className="flex justify-center text-yellow-400 text-sm mt-2">
          {[...Array(5)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default FlavourCard;
