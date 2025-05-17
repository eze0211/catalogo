import React from 'react';

export function PerfumeCard({ image, name, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative pb-[100%]">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">{name}</h2>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}