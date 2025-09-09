"use client";
import ProductImages from "@/Components/ProductImages";
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, HeartIcon, PlusIcon, MinusIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faStore} from '@fortawesome/free-solid-svg-icons';

const SinglePage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [deliveryOption, setDeliveryOption] = useState("Delivery");
  const [quantity, setQuantity] = useState(1);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  // Increase or decrease quantity
  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Main Content */}
      <div className="relative flex flex-col lg:flex-row gap-16">
        {/* Product Images */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ProductImages />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Product Name */}
          <div>
            <h1 className="text-4xl font-semibold text-gray-900 tracking-tight">
              Apple AirPods Pro 2 Noise Cancelling True Wireless Earbuds
            </h1>

            {/* Review Score with Stars */}
            <div className="mt-2 flex items-center">
              <div className="flex text-yellow-400">
                {/* 5 star review (adjust based on actual review score) */}
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} className="h-5 w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className={`${
                        idx < 4 ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15l-5.5 3 1.5-6.5-5-4.5 6.5-.5L10 0l2.5 6 6.5 .5-5 4.5 1.5 6.5L10 15z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                ))}
              </div>
              <span className="ml-2 text-gray-600">(120 reviews)</span>
            </div>

            {/* Product Info */}
            <p className="text-sm text-gray-500 mt-2">
              Brand: <span className="text-gray-700">PlayStation</span> | Model:{" "}
              <span className="text-gray-700">1000035072</span> | Web Code:{" "}
              <span className="text-gray-700">16593427</span>
            </p>

            {/* Price */}
            <div className="mt-4 flex items-center gap-2">
              <h2 className="text-sm font-bold text-red-600 ">Save $50.00</h2>
              <p className="text-3xl font-bold text-red-600">$300.00</p>
              <span className="text-base text-gray-500 line-through">$350.00</span>
            </div>
            <hr className="my-4  border-gray-300" />
          </div>

          {/* Delivery or Pickup Section */}
        <div className="mt-6 bg-gray-100 p-6 rounded-md shadow-md border border-gray-300">
          <div className="flex gap-4 justify-start items-center">
            <button
              onClick={() => setDeliveryOption("Delivery")}
              className={`w-full py-3 px-8 rounded-md font-medium transition-all duration-300 shadow-md ${
                deliveryOption === "Delivery"
                  ? "bg-blue-400 text-white hover:bg-blue-500"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <FontAwesomeIcon icon={faTruck} className="h-6 w-6 inline-block mr-2" />
              Delivery
            </button>
            <button
              onClick={() => setDeliveryOption("Pickup")}
              className={`w-full py-3 px-8 rounded-md font-medium transition-all duration-300 shadow-md ${
                deliveryOption === "Pickup"
                  ? "bg-red-400 text-white hover:bg-red-500"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <FontAwesomeIcon icon={faStore} className="h-6 w-6 inline-block mr-2" />
              Pickup
            </button>
          </div>

            {/* Dynamic Content */}
          <div className="mt-6">
            {deliveryOption === "Delivery" ? (
              <div>
                <p className="text-sm text-gray-700">
                  Free and fast shipping on orders over $150. Estimated delivery:
                  2-3 days.
                </p>
                <button className="mt-4 bg-gray-700 text-white py-3 px-6 rounded-md shadow-md hover:bg-gray-800 w-full">
                  Add to Cart
                </button>
              </div>
            ) : (
              <div>
                <p className="text-sm text-gray-700">
                  Pick up in store: Available at the locations below.
                </p>
                <ul className="mt-2 text-sm text-gray-600">
                  <li>✔ Store A - Available</li>
                  <li>✔ Store B - Available</li>
                  <li>✘ Store C - Out of stock</li>
                </ul>
                <button className="mt-4 bg-gray-700 text-white py-3 px-6 rounded-md shadow-md hover:bg-gray-800 w-full">
                  Pick Up in Store
                </button>
              </div>
            )}
          </div>
        </div>

          {/* Wishlist */}
          <div className="mt-4">
            <button className="text-gray-600 hover:text-gray-800">
              <HeartIcon className="h-6 w-6 inline-block mr-2" />
              Add to Wishlist
            </button>
          </div>

          {/* Quantity Selector */}
          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={() => handleQuantityChange("decrease")}
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300"
            >
              <MinusIcon className="h-5 w-5" />
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increase")}
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300"
            >
              <PlusIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Collapsible Sections */}
      <div className="mt-16">
        {[
          {
            title: "About This Product",
            content: (
              <p>
                Apple AirPods Pro 2 have been engineered to deliver up to 2x
                more Active Noise Cancellation than the previous generation.
                With Adaptive Transparency, a redesigned MagSafe Charging Case,
                and a powerful audio experience, these are the ultimate
                wireless earbuds for music lovers and professionals.
              </p>
            ),
          },
          {
            title: "Customer Reviews",
            content: (
              <div>
                <p className="font-semibold">John D:</p>
                <p>"Excellent sound quality, totally worth the price!"</p>
                <p className="font-semibold mt-2">Sarah W:</p>
                <p>"I love the noise cancellation feature. Great product!"</p>
              </div>
            ),
          },
          {
            title: "Specifications",
            content: (
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-gray-900 border border-gray-300 rounded-md shadow-md">
                  <tbody>
                    {[
                      { name: "Product Condition", value: "Brand New" },
                      { name: "Product Line", value: "AirPods" },
                      { name: "Headphone Style", value: "In-Ear/Ear Bud" },
                      { name: "Primary Headset Usage", value: "Telephone Communication" },
                      { name: "Band Style", value: "None" },
                      { name: "Sports & Fitness Ear Clip", value: "No" },
                      { name: "Noise Cancelling Type", value: "Active Noise Cancelling" },
                      { name: "Noise Cancelling", value: "Yes" },
                      { name: "Echo Reduction", value: "Yes" },
                      { name: "Truly Wireless", value: "Yes" },
                      { name: "Wireless", value: "Yes" },
                      { name: "Bluetooth", value: "Yes" },
                      { name: "Water/Sweat Resistant", value: "Yes" },
                      { name: "Inline Volume Control", value: "Yes" },
                      { name: "iPod/iPhone Control", value: "Yes" },
                      { name: "Built-in Mic", value: "Yes" },
                      { name: "Voice Assistant Built-In", value: "Siri" },
                      { name: "Plug Material", value: "Silicone" },
                      { name: "Power Source", value: "Lithium Ion Coin Cell Battery" },
                      { name: "Colour", value: "White" },
                      { name: "Colour Family", value: "White" },
                      { name: "Weight", value: "50.8 g" },
                      {
                        name: "Manufacturer's Warranty - Parts",
                        value: "1 year",
                      },
                      {
                        name: "Manufacturer's Warranty - Labour",
                        value: "1 year",
                      },
                    ].map((spec, idx) => (
                      <tr
                        key={idx}
                        className={`${
                          idx % 2 === 0 ? "bg-gray-300" : "bg-white"
                        } border-b border-g`}
                      >
                        <td className="px-4 py-2 font-medium text-gray-700">
                          {spec.name}
                        </td>
                        <td className="px-4 py-2">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ),
          }
          
        ].map((section, idx) => (
          <div
            key={idx}
            className={`py-4 border-b border-gray-300 hover:bg-gray-50 transition-all`}
          >
            <button
              onClick={() => toggleSection(section.title)}
              className="flex justify-between w-full text-lg font-medium text-gray-900 group"
            >
              <span>{section.title}</span>
              <span>
                {activeSection === section.title ? (
                  <ChevronUpIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-700" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-700" />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeSection === section.title ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="mt-4 text-gray-600 text-sm">
                {section.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglePage;
