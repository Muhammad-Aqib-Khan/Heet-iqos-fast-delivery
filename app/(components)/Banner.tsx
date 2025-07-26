import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  heading: string;
  text: string;
  bgColor?: string;
}

const Card: React.FC<CardProps> = ({ icon, heading, text, bgColor = 'bg-gray-800' }) => {
  return (
    <div className={`flex items-center justify-center p-6 rounded-lg ${bgColor} text-white transition-all duration-300 hover:scale-110 md:hover:scale-115`}>
      <div className="mr-4 text-red-500 text-4xl">{icon}</div>
      <div className="text-center">
        <h3 className="text-lg font-semibold">{heading}</h3>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

interface BannerProps {
  cards: {
    icon: React.ReactNode;
    heading: string;
    text: string;
  }[];
}

const Banner: React.FC<BannerProps> = ({ cards }) => {
  return (
    <div className="text-center bg-black mt-4 text-white p-4 md:p-8">
      <h1 className="text-2xl pt-2  md:text-3xl font-bold text-red-500">HeeTs DUBAI UAE | IQOS HEETS DUBAI UAE | IQOS HEETS ABU DHABI SHARJAH UAE</h1>
      <h2 className="text-md md:text-lg mt-2">GET UPTO <span className="text-yellow-400 font-bold">35%</span> DISCOUNT ON IQOS HEETS DUBAI | ORDER HEETS IN UAE NOW AT LOWEST PRICE OF AED 95</h2>
      <div className="flex flex-col md:flex-row justify-around bg-black pt-8 pr-4 pb-4 space-y-4 md:space-y-0 md:space-x-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            heading={card.heading}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;