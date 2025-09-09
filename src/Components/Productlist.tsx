"use client";
import React, { useState, useEffect } from "react";
import { MdArrowForward, MdArrowBack } from "react-icons/md"; // Simple arrow icons

const Productlist: React.FC<{ filters: any }> = ({ filters }) => {
  const {
    categories = [],
    brands = [],
    priceRange = { min: "", max: "" },
    reviews = [],
  } = filters || {};

  // Updated product examples with Pexels images
  const products = [
    {
      id: 1,
      name: "Sony 65\" 4K Ultra HD TV",
      price: 899.99,
      reviews: 5,
      brand: "Sony",
      category: "TVs",
      sale: true,
      saleLabel: "Boxing Day Price Now",
      image: "https://images.pexels.com/photos/5094009/pexels-photo-5094009.jpeg",
      discount: "$150",
    },
    {
      id: 2,
      name: "Apple MacBook Pro 16\"",
      price: 2399.99,
      reviews: 4,
      brand: "Apple",
      category: "Laptops",
      sale: true,
      saleLabel: "Top Deal",
      image: "https://images.pexels.com/photos/3760284/pexels-photo-3760284.jpeg",
      discount: "$0",
    },
    {
      id: 3,
      name: "Samsung Galaxy S23 Ultra",
      price: 1199.99,
      reviews: 4,
      brand: "Samsung",
      category: "Smartphones",
      sale: false,
      image: "https://images.pexels.com/photos/964690/pexels-photo-964690.jpeg",
      discount: "$0",
    },
    {
      id: 4,
      name: "Bose Noise Cancelling Headphones 700",
      price: 379.99,
      reviews: 5,
      brand: "Bose",
      category: "Headphones",
      sale: true,
      saleLabel: "Liquidation",
      image: "https://images.pexels.com/photos/1761278/pexels-photo-1761278.jpeg",
      discount: "$50",
    },
    {
      id: 5,
      name: "LG 27\" UltraGear Gaming Monitor",
      price: 449.99,
      reviews: 4,
      brand: "LG",
      category: "Monitors",
      sale: true,
      saleLabel: "Top Deal",
      image: "https://images.pexels.com/photos/276024/pexels-photo-276024.jpeg",
      discount: "$100",
    },
    {
      id: 6,
      name: "Microsoft Surface Laptop 5",
      price: 1299.99,
      reviews: 5,
      brand: "Microsoft",
      category: "Laptops",
      sale: false,
      image: "https://images.pexels.com/photos/1574662/pexels-photo-1574662.jpeg",
      discount: "$0",
    },
  ];

  const filteredProducts = products.filter((product) => {
    if (categories.length && !categories.includes(product.category)) return false;
    if (brands.length && !brands.includes(product.brand)) return false;
    if (priceRange.min && product.price < parseInt(priceRange.min)) return false;
    if (priceRange.max && product.price > parseInt(priceRange.max)) return false;
    if (reviews.length && !reviews.includes(product.reviews)) return false;
    return true;
  });

  const productsPerSlide = 4;
  const totalSlides = Math.ceil(filteredProducts.length / productsPerSlide);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false); // Track if we are on the client-side

  useEffect(() => {
    setIsClient(true); // Only set after client-side mounting
  }, []);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  if (!isClient) {
    return null; // Return nothing until the component has mounted on the client
  }

  return (
    <div className="py-6">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * (100 / productsPerSlide)}%)` }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex-none w-full sm:w-1/4 lg:w-1/6 px-2 cursor-pointer product-card" // Added product-card class here
              onClick={() => window.location.href = `/product/${product.id}`} // Redirect to the product page
            >
              <div className="text-center">
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-contain mb-2"
                  />
                </div>

                {/* Product Details */}
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                <div className="text-gray-500 text-xs mb-1">Includes $5.75 EHF</div>
                <div className="flex items-center justify-center gap-1 text-yellow-500">
                  {"★".repeat(product.reviews)}
                  <span className="text-gray-600 text-xs">({product.reviews} Reviews)</span>
                </div>

                {/* Price */}
                <p className="text-red-600 text-lg font-semibold mt-1">
                  ${product.price.toFixed(2)}{" "}
                  <span className="text-[10px] text-red-600">SAVE {product.discount}</span>
                </p>

                {/* Sale Label */}
                {product.sale && (
                  <div className="text-center mt-2 bg-blue-400 text-white text-xs font-semibold rounded-md px-2 py-1">
                    {product.saleLabel}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-600 text-xl"
          onClick={prevSlide}
        >
          <MdArrowBack />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-600 text-xl"
          onClick={nextSlide}
        >
          <MdArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Productlist;
