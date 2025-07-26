'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useCart } from '../CartContext'; // ✅ Update path if needed

type ProductCardProps = {
  imageUrl: string;
  productName: string;
  flavor: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  slug: string; // URL slug for dynamic navigation
  className?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  productName,
  flavor,
  price,
  originalPrice,
  discount,
  slug,
  className = '',
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    addToCart({
      id: slug,
      name: productName,
      price: parseFloat(price),
      image: imageUrl,
      quantity: 1,
    });
  };

  return (
    <Link href={`/product/${slug}`} passHref>
      <div
        className={`relative w-full max-w-[300px] h-[420px] bg-white shadow-lg p-3 pb-16 cursor-pointer transform transition-transform duration-200 hover:scale-110 group rounded-xl overflow-hidden ${className}`}
      >
        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-3 left-3 bg-yellow-500 text-black text-sm font-bold px-5 py-1 rounded-sm z-10">
            {discount}
          </div>
        )}

        {/* Product Image */}
        <div className="w-full h-[220px] relative rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={productName}
            layout="fill"
            objectFit="contain"
            className="transition-transform duration-200"
          />
        </div>

        {/* Info Section */}
        <div className="bg-gray-200 rounded-sm p-2 mt-1">
          <div className="mt-2 px-1 text-center">
            <p className="text-lg font-bold text-red-400">{flavor}</p>
            <p className="text-lg font-bold text-black">{productName}</p>
          </div>

          <div className="mt-2 px-1 flex gap-2 text-center items-center justify-center">
            <p className="text-lg font-bold text-black">Rs. {price}</p>
            {originalPrice && (
              <p className="text-base text-red-400 line-through">{originalPrice}</p>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-[-3rem] left-0 w-full h-13 bg-red-500 text-white uppercase text-sm font-bold flex items-center justify-center transition-all duration-200 group-hover:bottom-0 rounded-md shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
