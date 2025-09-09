"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Computers, Tablets, & Accessories" },
  { name: "Cell Phones and Accessories" },
  { name: "Office Supplies & Ink" },
  { name: "TV & Home Theatre" },
  { name: "Headphones, Speakers, & Audio" },
  { name: "Cameras, Camcorders, & Drones" },
  { name: "Car Tech and GPS" },
  { name: "Appliances" },
  { name: "Smart Home" },
  { name: "Home Living" },
  { name: "Baby & Maternity" },
  { name: "Video Games & VR" },
  { name: "Wearable Technology" },
  { name: "Health & Fitness" },
  { name: "Sports, Recreation, & Transportation" },
  { name: "Movies & Music" },
  { name: "Musical Instruments & Equipment" },
  { name: "Toys, Games, & Education" },
  { name: "Beauty" },
  { name: "Personal Care" },
  { name: "Travel, Luggage, & Bags" },
  { name: "Watches, Jewelry, & Fashion" },
];

function CategoryList() {
  const scrollContainerRef = useRef(null);
  const scrollSpeedRef = useRef(0);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;

    const handleMouseMove = (e) => {
      if (!container) return;

      const { left, right } = container.getBoundingClientRect();
      const mouseX = e.clientX;

      const maxSpeed = 7;
      if (mouseX < left + 100) {
        const intensity = (left + 100 - mouseX) / 100;
        scrollSpeedRef.current = -maxSpeed * Math.min(intensity, 1);
      } else if (mouseX > right - 100) {
        const intensity = (mouseX - (right - 100)) / 100;
        scrollSpeedRef.current = maxSpeed * Math.min(intensity, 1);
      } else {
        scrollSpeedRef.current = 0;
      }
    };

    const smoothScroll = () => {
      if (container && scrollSpeedRef.current !== 0) {
        container.scrollLeft += scrollSpeedRef.current;
      }
      animationFrameRef.current = requestAnimationFrame(smoothScroll);
    };

    container.addEventListener("mousemove", handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(smoothScroll);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div
      className="px-4 overflow-x-scroll scrollbar-hide relative"
      ref={scrollContainerRef}
    >
      <div className="flex gap-4 md:gap-8">
        {categories.map((category, index) => (
          <Link
            href={`/list?cat=${encodeURIComponent(category.name)}`}
            key={index}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 group"
          >
            <div className="relative bg-slate-100 w-full h-96">
              <Image
                src="https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt={category.name}
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 font-medium text-lg text-center tracking-wide text-gray-700 group-hover:text-red-500 transition duration-700 relative">
              <span
                className="inline-block relative group"
              >
                {category.name}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-500 scale-x-0 transition-all duration-700 group-hover:scale-x-100 origin-left"></span>
              </span>
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
