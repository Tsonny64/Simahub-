"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "BLACK FRIDAY IS HERE! High Voltage Deals Guaranteed",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/11031182/pexels-photo-11031182.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/deals", // Navigate to deals page
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Browse for your Apple products here",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/14438772/pexels-photo-14438772.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/apple-products", // Navigate to Apple products page
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Playstation 5 Pro In Stores!",
    description: "Click Here For All Playstation Related Items!",
    img: "https://images.pexels.com/photos/13189272/pexels-photo-13189272.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/playstation", // Navigate to PlayStation products page
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];


const Slider = () => {
  const [current, setCurrent] = useState(0);

  // Automatic Slide Transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000); // 7 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`, // Move slides horizontally
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex-shrink-0 grid grid-cols-2 items-center"
          >
            {/* Text Content */}
            <div className="flex flex-col justify-center px-8 md:px-16">
              <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-2">
                {slide.description}
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="bg-gray-800 text-white px-8 py-3 mt-4 hover:bg-gray-700 transition-all rounded-full">
                  Shop Now
                </button>
              </Link>
            </div>

            {/* Background Image */}
            <div className="relative w-full h-full">
              <Image
                src={slide.img}
                alt={slide.title}
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Circles */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 border-2 rounded-full ${
              current === index
                ? "border-gray-800 bg-gray-800"
                : "border-gray-400 bg-transparent"
            } hover:border-gray-700 transition-all`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
