'use client';

import React from 'react';
import Image from 'next/image';

interface CardItem {
  image: string;
  quantity: string;
  title: string;
}

interface CardSectionProps {
  heading: string;
  description: string;
  cards: CardItem[];
  buttonText?: string;
}

const CardSection: React.FC<CardSectionProps> = ({
  heading,
  description,
  cards,
  buttonText = 'Learn More',
}) => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10 px-6 py-10">
      {/* Cards Column (2 vertical cards) */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        {cards.slice(0, 2).map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 h-72 w-full transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={48}
              height={48}
              className="mb-4"
            />
            <span className="text-2xl font-bold text-gray-700">{card.quantity}</span>
            <span className="text-sm font-medium text-gray-500 mt-2 text-center">{card.title}</span>
          </div>
        ))}
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 mt-6 lg:mt-0">
        <h2 className="text-3xl font-bold text-gray-800">{heading}</h2>
        <p className="text-gray-600 text-base leading-relaxed">{description}</p>
        <button className="mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow w-fit">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CardSection;
