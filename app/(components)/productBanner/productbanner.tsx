"use client"
import React, { useState, useEffect } from 'react';

interface ProductBannerProps {
  mainImages: { src: string; alt: string }[];
  title: string;
  description: string;
  buttonText: string;
  ringImages: { src: string; alt: string }[];
  containerClassName?: string;
  imageClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  buttonClassName?: string;
  ringImageClassName?: string;
  intervalTime?: number;
}

const ProductBanner: React.FC<ProductBannerProps> = ({
  mainImages,
  title,
  description,
  buttonText,
  ringImages,
  containerClassName = 'flex flex-col md:flex-row items-center justify-center text-black p-4 md:p-8',
  imageClassName = 'absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-1000',
  titleClassName = 'text-2xl md:text-3xl font-bold mb-4',
  descriptionClassName = 'text-gray-600 mb-4',
  buttonClassName = 'bg-red-500 text-white px-4 py-3 rounded hover:bg-red-600 hover:scale-110 transition-transform duration-300',
  ringImageClassName = 'w-48 h-32 object-cover rounded-lg transition-transform duration-300 hover:scale-110',
  intervalTime = 3000,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === mainImages.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalTime);
    return () => clearInterval(timer);
  }, [mainImages.length, intervalTime]);

  const currentImage = mainImages[currentImageIndex];

  return (
    <div className={containerClassName}>
      {/* Image with fixed aspect ratio */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
          {mainImages.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className={`${imageClassName} ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Text and Rings */}
      <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
        <h2 className={titleClassName}>{title}</h2>
        <p className={descriptionClassName}>{description}</p>
        <button className={buttonClassName}>{buttonText}</button>
        <div className="flex flex-wrap justify-center md:justify-start mt-4 gap-6">
          {ringImages.map((ring, index) => (
            <img
              key={index}
              src={ring.src}
              alt={ring.alt}
              className={ringImageClassName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
