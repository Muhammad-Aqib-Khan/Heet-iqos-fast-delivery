"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface CarouselItem {
  src: string;
  alt: string;
  heading?: string;
  paragraph?: string;
  headingClassName?: string;
  paragraphClassName?: string;
}

interface CarouselProps {
  images?: CarouselItem[];
  defaultPosition?: number;
  interval?: number;
  carouselClassName?: string;
  wrapperClassName?: string;
  indicatorClassName?: string;
  controlHeight?: string;
}

const ImageCarousel: React.FC<CarouselProps> = ({
  images = [],
  defaultPosition = 0,
  interval = 3000,
  carouselClassName = "w-full min-h-screen px-0 bg-black",
  wrapperClassName = "relative w-full h-screen overflow-hidden",
  indicatorClassName = "w-3 h-3 rounded-full bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800 transition-colors",
  controlHeight = "h-full",
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultPosition);
  const [isTransitioning, setIsTransitioning] = useState(false);

  if (images.length === 0) {
    return <div className="text-center p-4 text-gray-500">No images provided</div>;
  }

  const normalizedDefaultPosition = Math.max(0, Math.min(defaultPosition, images.length - 1));

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev + 1) % images.length);
    }
  }, [images.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }, [images.length, isTransitioning]);

  const goToSlide = useCallback(
    (index: number) => {
      if (!isTransitioning && index !== activeIndex) {
        setIsTransitioning(true);
        setActiveIndex(index);
      }
    },
    [activeIndex, isTransitioning]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [activeIndex, interval, nextSlide]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") prevSlide();
    if (event.key === "ArrowRight") nextSlide();
  };

  return (
    <div
      className={`flex items-center justify-center ${carouselClassName}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Carousel"
    >
      <div className={wrapperClassName}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className="object-cover w-full h-full"
              priority={index === normalizedDefaultPosition}
              quality={85}
            />
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`${indicatorClassName} ${
                index === activeIndex ? "bg-white dark:bg-gray-800" : ""
              }`}
              aria-current={index === activeIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>

        {/* Previous button */}
        <button
          type="button"
          className={`absolute top-0 start-0 z-30 flex items-center justify-center ${controlHeight} px-4 cursor-pointer group focus:outline-none`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        {/* Next button */}
        <button
          type="button"
          className={`absolute top-0 end-0 z-30 flex items-center justify-center ${controlHeight} px-4 cursor-pointer group focus:outline-none`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
