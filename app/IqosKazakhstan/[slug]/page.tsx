"use client";
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaShoppingCart, FaWallet } from "react-icons/fa";
import { useState } from "react";
const flavours = [
  {
    slug: "kazakhstan-silver",
    title: "IQOS TEREA Silver",
    image: "/kazakhstan/silver.webp",
    price: 130,
    cutPrice: 220.0,
    description: "Experience the smooth and rich taste of IQOS TEREA Silver, crafted for a satisfying heat-not-burn experience.",
    details: {
      flavour: "Silver",
      brand: "IQOS TEREA KAZAKHSTAN",
      weight: "20 sticks per pack",
      origin: "Kazakhstan"
    },
    gallery: [
      "/kazakhstan/silver1.webp",
      "/kazakhstan/silver2.webp",
      "/kazakhstan/silver3.webp"
    ]
  },
  {
    slug: "kazakhstan-amber",
    title: "IQOS TEREA Amber",
    image: "/kazakhstan/amber.webp",
    price: 130,
    cutPrice: 220.0,
    description: "Enjoy the warm and mellow notes of IQOS TEREA Amber, designed for a unique heat-not-burn experience.",
    details: {
      flavour: "Amber",
      brand: "IQOS TEREA KAZAKHSTAN",
      weight: "20 sticks per pack",
      origin: "Kazakhstan"
    },
    gallery: [
      "/kazakhstan/amber.webp",
      "/kazakhstan/bronze.webp",
      "/kazakhstan/greenzing.webp"
    ]
  },
  {
    slug: "kazakhstan-purplewave",
    title: "IQOS TEREA Purple Wave",
    image: "/kazakhstan/purple.webp",
    price: 130,
    cutPrice: 220.0,
    description: "Immerse yourself in the vibrant and fruity notes of IQOS TEREA Purple Wave, perfect for a refreshing heat-not-burn experience.",
    details: {
      flavour: "Purple Wave",
      brand: "IQOS TEREA KAZAKHSTAN",
      weight: "20 sticks per pack",
      origin: "Kazakhstan"
    },
    gallery: [
      "/kazakhstan/purple1.webp",
      "/kazakhstan/purple2.webp",
      "/kazakhstan/purple3.webp"
    ]
  },
  {
    slug: "kazakhstan-turquoise",
    title: "IQOS TEREA Turquoise",
    image: "/kazakhstan/turquoise.webp",
    price: 130,
    cutPrice: 220.0,
    description: "Discover the cool and refreshing taste of IQOS TEREA Turquoise, designed for a unique heat-not-burn experience.",
    details: {
      flavour: "Turquoise",
      brand: "IQOS TEREA KAZAKHSTAN",
      weight: "20 sticks per pack",
      origin: "Kazakhstan"
    },
    gallery: [
      "/kazakhstan/turquoise1.webp",
      "/kazakhstan/turquoise2.webp",
      "/kazakhstan/turquoise3.webp"
    ]
  },
  {
    slug: "kazakhstan-yellow",
    title: "IQOS TEREA Yellow",
    image: "/kazakhstan/yellow.webp",
    price: 130,
    cutPrice: 220.0,
    description: "Experience the bright and zesty notes of IQOS TEREA Yellow, crafted for a satisfying heat-not-burn experience.",
    details: {
      flavour: "Yellow",
      brand: "IQOS TEREA KAZAKHSTAN",
      weight: "20 sticks per pack",
      origin: "Kazakhstan"
    },
    gallery: [
      "/kazakhstan/yellow1.webp",
      "/kazakhstan/yellow2.webp",
      "/kazakhstan/yellow3.webp"
    ]
  },
  {
    slug: "kazakhstan-bronze",
    title: "IQOS TEREA Bronze",
    image: "/kazakhstan/bronze.webp",
    price: 130,
    cutPrice: 220.0,
    description: "Enjoy the rich and robust taste of IQOS TEREA Bronze, designed for a unique heat-not-burn experience.",
    details: {
      flavour: "Bronze",
      brand: "IQOS TEREA KAZAKHSTAN",
      weight: "20 sticks per pack",
      origin: "Kazakhstan"
    },
    gallery: [
      "/kazakhstan/bronze1.webp",
      "/kazakhstan/bronze2.webp",
      "/kazakhstan/bronze3.webp"
    ]
  },
  {
    slug: "kazakhstan-summerwave",
    title: "IQOS TEREA Summer Wave",
    image: "/kazakhstan/summerwave.webp",
    price: 130,
    cutPrice: 220.0,
    description: "Immerse yourself in the refreshing and vibrant notes of IQOS TEREA Summer Wave, perfect for a unique heat-not-burn experience.",
    details: {
      flavour: "Summer Wave",
      brand: "IQOS TEREA KAZAKHSTAN",
      weight: "20 sticks per pack",
      origin: "Kazakhstan"
    },
    gallery: [
      "/kazakhstan/summerwave1.webp",
      "/kazakhstan/summerwave2.webp",
      "/kazakhstan/summerwave3.webp"
    ]
  },
  {
    slug: "kazakhstan-greenzing",
    title: "IQOS TEREA Green Zing",
    image: "/kazakhstan/greenzing.webp",
    price: 130,
    cutPrice: 220.0,
    description: "Experience the refreshing and zesty notes of IQOS TEREA Green Zing, crafted for a satisfying heat-not-burn experience.",
    details: {
      flavour: "Green Zing",
      brand: "IQOS TEREA KAZAKHSTAN",
      weight: "20 sticks per pack",
      origin: "Kazakhstan"
    },
    gallery: [
      "/kazakhstan/greenzing1.webp",
      "/kazakhstan/greenzing2.webp",
      "/kazakhstan/greenzing3.webp"
    ]
  }
,{
   slug:"kazakhstan-rubyfuse",
   title: "IQOS TEREA Ruby Fuse",
    image: "/kazakhstan/rubyfuse.webp",
    price: 130,
    cutPrice: 220.0,
    description: "Indulge in the rich and fruity notes of IQOS TEREA Ruby Fuse, designed for a unique heat-not-burn experience.",
    details: {
      flavour: "Ruby Fuse",
      brand: "IQOS TEREA KAZAKHSTAN",
      weight: "20 sticks per pack",
      origin: "Kazakhstan"
    },
    gallery: [
      "/kazakhstan/rubyfuse1.webp",
      "/kazakhstan/rubyfuse2.webp",
      "/kazakhstan/rubyfuse3.webp"
    ]
  }
];


type FlavourDetailProps = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);

  const flavour = flavours.find((f) => f.slug === slug);

  if (!flavour) return notFound();

  const [mainImage, setMainImage] = useState(flavour.image);

  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      {/* Left Section - Images */}
      <div className="flex-1 space-y-4">
        {/* Main Image */}
        <div className="relative w-full h-96 md:h-[600px] overflow-hidden rounded-xl">
          <Image
            src={mainImage}
            alt={flavour.title}
            fill
            className="object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            priority
          />
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-3 gap-2">
          {flavour.gallery.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setMainImage(img)}
              className="relative w-full aspect-square overflow-hidden rounded-xl cursor-pointer border-2 hover:border-teal-600 transition"
            >
              <Image
                src={img}
                alt={`${flavour.title} detail ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Details */}
      <div className="flex-1 space-y-4 text-gray-900">
        <h1 className="text-2xl font-bold">{flavour.title}</h1>

        <div className="flex items-center gap-4">
          <span className="text-xl font-bold text-teal-700">Dhs. {flavour.price}</span>
          <span className="line-through text-gray-400">Dhs. {flavour.cutPrice}</span>
        </div>

        <p>{flavour.description}</p>

        <ul className="mt-4 space-y-1">
          <li><strong>Flavour:</strong> {flavour.details.flavour}</li>
          <li><strong>Brand:</strong> {flavour.details.brand}</li>
          <li><strong>Weight:</strong> {flavour.details.weight}</li>
          <li><strong>Origin:</strong> {flavour.details.origin}</li>
        </ul>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <FaShoppingCart size={18} />
            Add to Cart
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            <FaWallet size={18} />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}