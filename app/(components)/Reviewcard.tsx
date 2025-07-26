import React from 'react';

interface ReviewProps {
  mainImage: string;
  detailImages: string[];
  rating: number;
  reviewsCount: number;
  reviewerName: string;
  testimonial: string;
}

const ReviewCard: React.FC<ReviewProps> = ({
  mainImage,
  detailImages,
  rating,
  reviewsCount,
  reviewerName,
  testimonial
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-2xl shadow-md">
      <div className="relative w-full md:w-2/3">
        <img src={mainImage} alt="Main" className="w-full h-full object-cover rounded-2xl" />
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
          <h2 className="text-lg font-semibold">Main picture</h2>
          <p className="text-sm">This is a sample photo, replace it by your own.</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full md:w-1/3">
        {detailImages.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={`Detail ${index}`} className="w-full h-24 object-cover rounded" />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center rounded">
              <span className="text-sm">Detail picture</span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full">
        <div className="flex items-center gap-2 mt-4">
          <span className="text-xl font-bold">{rating.toFixed(1)}</span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.188c.969 0 1.371 1.24.588 1.81l-3.392 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.539 1.118l-3.392-2.46a1 1 0 00-1.176 0l-3.392 2.46c-.783.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.293 9.393c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 00.95-.69l1.286-3.966z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-600">{reviewsCount} reviews</span>
        </div>
        <div className="mt-2">
          <p className="text-sm font-bold">{reviewerName}</p>
          <p className="text-sm italic">"{testimonial}"</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
