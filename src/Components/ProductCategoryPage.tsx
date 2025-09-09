"use client";
import React, { useState } from "react";

const categories = [
  {
    name: "Laptops and MacBook",
    image: "https://images.pexels.com/photos/5077045/pexels-photo-5077045.jpeg",  // Pexels image URL
  },
  {
    name: "Desktops and iMac",
    image: "https://images.pexels.com/photos/1181259/pexels-photo-1181259.jpeg",  // Pexels image URL
  },
  {
    name: "Tablets and iPad",
    image: "https://images.pexels.com/photos/3727487/pexels-photo-3727487.jpeg",  // Pexels image URL
  },
  {
    name: "PC Gaming",
    image: "https://images.pexels.com/photos/1038847/pexels-photo-1038847.jpeg",  // Pexels image URL
  },
  {
    name: "Monitors",
    image: "https://images.pexels.com/photos/2676149/pexels-photo-2676149.jpeg",  // Pexels image URL
  },
  {
    name: "Computer Accessories",
    image: "https://images.pexels.com/photos/1586262/pexels-photo-1586262.jpeg",  // Pexels image URL
  },
  {
    name: "Hard Drives and Storage",
    image: "https://images.pexels.com/photos/1860771/pexels-photo-1860771.jpeg",  // Pexels image URL
  },
  {
    name: "PC Components",
    image: "https://images.pexels.com/photos/2990646/pexels-photo-2990646.jpeg",  // Pexels image URL
  },
  {
    name: "Wi-Fi and Networking Devices",
    image: "https://images.pexels.com/photos/3756950/pexels-photo-3756950.jpeg",  // Pexels image URL
  },
  {
    name: "Printers, Scanners, and Fax",
    image: "https://images.pexels.com/photos/4778661/pexels-photo-4778661.jpeg",  // Pexels image URL
  },
  {
    name: "Software",
    image: "https://images.pexels.com/photos/2560325/pexels-photo-2560325.jpeg",  // Pexels image URL
  },
];

const ProductCategoryPage: React.FC = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Browse Categories</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative w-48 h-48 p-0 border border-gray-200 rounded-none shadow-lg hover:shadow-xl transition-all cursor-pointer group"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover rounded-none"
            />
            <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black via-transparent to-transparent text-white">
              <h3 className="text-xs font-semibold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryPage;
