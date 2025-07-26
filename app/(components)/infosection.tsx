import React from 'react';
import Button from './button';

type Paragraph = {
  text: string;
  color?: string;
  className?: string; // like 'text-red-600', 'text-blue-500', etc.
};

type InfoSectionProps = {
  heading1: string;
  heading2: string;
  paragraphs?: Paragraph[]; // made optional
};

const InfoSection = ({ heading1, heading2, paragraphs }: InfoSectionProps) => {
  return (
    <section className="py-10">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-black">{heading1}</h1>
        <h2 className="text-xl sm:text-2xl font-bold text-red-500 mt-1">{heading2}</h2>
      </div>

      {paragraphs && paragraphs.length > 0 && (
        <div className="bg-gray-200 border-l-4 border-red-500 mt-6 px-6 py-6 max-w-7xl mx-auto text-center rounded-md">
          {paragraphs.map((para, index) => (
            <p
              key={index}
              className={`text-sm sm:text-base mb-2 italic ${para.color ?? 'text-gray-600'}`}
            >
              {para.text}
            </p>
          ))}
        </div>
      )}
    </section>
  );
};

export default InfoSection;
