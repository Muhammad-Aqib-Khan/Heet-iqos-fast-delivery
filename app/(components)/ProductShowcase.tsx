// components/ProductShowcase.tsx
import Image from "next/image";
import { useCart } from "./CartContext";

type DetailProduct = {
  src: string;
  alt: string;
  originalPrice: number;
  discountedPrice: number;
};

type Props = {
  mainProduct: {
    src: string;
    alt: string;
    name: string;
    originalPrice: number;
    discountedPrice: number;
  };
  detailProducts: DetailProduct[];
  rating: number;
  reviewCount: number;
  testimonial: string;
  reviewer: string;
};

export default function ProductShowcase({
  mainProduct,
  detailProducts,
  rating,
  reviewCount,
  testimonial,
  reviewer,
}: Props) {
  const { addToCart } = useCart();
  const getDiscount = (original: number, discounted: number) =>
    Math.round(((original - discounted) / original) * 100);

  const PriceBadge = ({
    originalPrice,
    discountedPrice,
  }: {
    originalPrice: number;
    discountedPrice: number;
  }) => (
    <div className="bg-white bg-opacity-95 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded shadow text-gray-800 font-medium">
      <span className="text-green-600 font-bold text-sm sm:text-base">
        Dhs{discountedPrice.toFixed(2)}
      </span>
      <span className="line-through text-red-500 ml-1 sm:ml-2 text-xs sm:text-sm">
        Dhs{originalPrice.toFixed(2)}
      </span>
    </div>
  );

  const DiscountBadge = ({ discountPercent }: { discountPercent: number }) => (
    <div className="bg-red-600 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full shadow font-semibold">
      -{discountPercent}% OFF
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
        {/* Main Product Image */}
        <div className="lg:col-span-3 relative">
          <div className="relative aspect-[16/10] sm:aspect-[3/2] lg:aspect-[16/10] overflow-hidden rounded-xl group transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src={mainProduct.src}
              alt={mainProduct.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 800px"
              className="object-cover"
              priority
            />
            
            {/* Overlay Content - Centered with lighter background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-60 text-white text-center px-4 sm:px-6 py-3 sm:py-4 rounded-lg backdrop-blur-sm">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
                  {mainProduct.name || "Main picture placeholder"}
                </h2>
                <p className="text-xs sm:text-sm md:text-base opacity-90">
                  This is a sample photo, replace it by your own.
                </p>
              </div>
            </div>

            {/* Discount Badge - Top Right */}
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
              <DiscountBadge
                discountPercent={getDiscount(
                  mainProduct.originalPrice,
                  mainProduct.discountedPrice
                )}
              />
            </div>

            {/* Price Badge - Bottom Left */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
              <PriceBadge
                originalPrice={mainProduct.originalPrice}
                discountedPrice={mainProduct.discountedPrice}
              />
            </div>

            {/* Add to Cart Button - Bottom Right */}
            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4">
              <button
                onClick={() => addToCart({
                  id: `main-${mainProduct.name}`,
                  name: mainProduct.name,
                  price: mainProduct.discountedPrice,
                  image: mainProduct.src
                })}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Testimonial Section - Below main image on mobile */}
          <div className="lg:hidden mt-4 bg-white p-4 rounded-xl shadow-md">
            <div className="flex items-center space-x-2 mb-3">
              <div className="flex text-yellow-500 text-lg sm:text-xl">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-black text-sm sm:text-base font-semibold">
                {rating.toFixed(1)} ({reviewCount} reviews)
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-700">
              <strong>{reviewer}</strong>: <em>"{testimonial}"</em>
            </p>
          </div>
        </div>

        {/* Detail Product Images - Right sidebar matching main image height */}
        <div className="flex lg:flex-col flex-row gap-2 sm:gap-4 overflow-x-auto lg:overflow-visible lg:h-full">
          {detailProducts.map((product, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-full lg:flex-1 rounded-xl overflow-hidden group transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={product.src}
                alt={product.alt}
                fill
                sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 300px"
                className="object-cover"
                priority={idx === 0}
              />
              
              {/* Price Badge - Top Right */}
              <div className="absolute top-2 right-2">
                <div className="bg-red-600 text-white text-xs px-2 py-1 rounded-full shadow font-semibold">
                  -{getDiscount(product.originalPrice, product.discountedPrice)}%
                </div>
              </div>

              {/* Price Badge - Bottom Left */}
              <div className="absolute bottom-2 left-2">
                <div className="bg-white bg-opacity-95 text-xs px-2 py-1 rounded shadow text-gray-800 font-medium">
                  Dhs{product.discountedPrice.toFixed(0)}
                  <span className="line-through text-red-500 ml-1 text-xs">
                    Dhs{product.originalPrice.toFixed(0)}
                  </span>
                </div>
              </div>

              {/* Hover overlay with Add to Cart button */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all duration-300">
                <button
                  onClick={() => addToCart({
                    id: `detail-${product.alt}`,
                    name: product.alt,
                    price: product.discountedPrice,
                    image: product.src
                  })}
                  className="bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section - Hidden on mobile, shown on desktop */}
      <div className="hidden lg:block mt-6 bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-center space-x-3 mb-4">
          <div className="flex text-yellow-500 text-xl">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"}>
                ★
              </span>
            ))}
          </div>
          <span className="text-black text-lg font-semibold">
            {rating.toFixed(1)} ({reviewCount} reviews)
          </span>
        </div>
        <p className="text-base text-gray-700">
          <strong>{reviewer}</strong>: <em>"{testimonial}"</em>
        </p>
      </div>
    </div>
  );
}