"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const images = [
  { id: 1, url: "https://images.pexels.com/photos/16070479/pexels-photo-16070479/free-photo-of-close-up-of-a-playstation-joystick.jpeg" },
  { id: 2, url: "https://images.pexels.com/photos/4065617/pexels-photo-4065617.jpeg" },
  { id: 3, url: "https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg" },
  { id: 4, url: "https://images.pexels.com/photos/38325/vacuum-cleaner-carpet-cleaner-housework-housekeeping-38325.jpeg" },
  { id: 5, url: "https://images.pexels.com/photos/5825422/pexels-photo-5825422.jpeg" },
];

function ProductImages() {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const handleZoomToggle = () => setZoomed(!zoomed);
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) setZoomed(false);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Main Image */}
      <div
        className="relative w-full max-w-[500px] h-[500px] flex justify-center items-center border rounded-lg overflow-hidden bg-gray-100 shadow-md"
        onClick={handleZoomToggle}
      >
        <Image
          src={images[index].url}
          alt="Product Image"
          layout="fill"
          objectFit="contain"
          className="cursor-pointer transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-6">
        {images.map((img, i) => (
          <div
            key={img.id}
            onClick={() => setIndex(i)}
            className={`w-16 h-16 border rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md ${
              index === i ? "ring-2 ring-red-500" : "bg-gray-100"
            }`}
          >
            <Image
              src={img.url}
              alt={`Thumbnail ${img.id}`}
              width={64}
              height={64}
              objectFit="contain"
              className="hover:scale-105 transition-transform duration-200"
            />
          </div>
        ))}
      </div>

      {/* Arrow Navigation */}
      <div className="flex justify-between mt-6 w-full max-w-[500px] px-4">
        <button
          onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
          className="p-3 text-gray-700 hover:text-red-500 transition-all"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={() => setIndex(index === images.length - 1 ? 0 : index + 1)}
          className="p-3 text-gray-700 hover:text-red-500 transition-all"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Zoom Image */}
      {zoomed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={handleOutsideClick}
        >
          <div className="relative max-w-[90%] max-h-[90%]">
            <Image
              src={images[index].url}
              alt="Zoomed Image"
              width={800}
              height={800}
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
            {/* Zoom Navigation */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
              <button
                onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
                className="p-2 hover:text-red-500 transition-all"
              >
                <ChevronLeftIcon className="h-8 w-8" />
              </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white">
              <button
                onClick={() => setIndex(index === images.length - 1 ? 0 : index + 1)}
                className="p-2 hover:text-red-500 transition-all"
              >
                <ChevronRightIcon className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductImages;
