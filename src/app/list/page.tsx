"use client";

import React from "react";
import Filter from "@/Components/Filter"; // Assuming the Filter component is in the same directory
import ProductCategoryPage from "@/Components/ProductCategoryPage";
import Productlist from "@/Components/Productlist";

const ListPage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Top Section: Main Banner */}
      <div className="px-6 py-4">
        <div className="text-center mb-4 bg-red-500 p-10 rounded-md">
          <h1 className="text-2xl font-bold">Biggest Sale of the Season</h1>
          <p className="text-gray-600">Don't miss out on the best deals for laptops, tablets, and more.</p>
          <button className="mt-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-red-700">
            Shop Now
          </button>
        </div>
      </div>

      {/* Product Category Page Section */}
      <div className="px-6 py-4">
        <ProductCategoryPage />
      </div>

      {/* Main Content Section */}
      <div className="flex">
        {/* Filter Section */}
        <aside className="w-1/4 px-4 bg-gray-50">
          <Filter />
        </aside>

        {/* Product Listings Section */}
        <main className="flex-1 px-4">
          {/* Banners under ProductCategoryPage */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-red-100 text-center rounded">
              <h2 className="text-lg font-bold">Exclusive Deals on Laptops</h2>
              <p className="text-gray-600">Grab exclusive discounts on selected laptops and accessories.</p>
              <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Shop Now
              </button>
            </div>
            <div className="p-4 bg-green-100 text-center rounded">
              <h2 className="text-lg font-bold">Summer Sale on Tablets</h2>
              <p className="text-gray-600">Shop the latest tablets and accessories at discounted prices.</p>
              <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Shop Now
              </button>
            </div>
          </div>

          {/* Best Match and Product Listings */}
          <div className="flex justify-between items-center mb-4 border-gray-500 bg-opacity-20 bg-gray-600 rounded-md p-3">
            <p className="text-gray-700">Showing 1-20 of 538 products</p>
            <select className="border border-gray-300 rounded px-3 py-2 text-gray-600">
              <option>Best Match</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Rating</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="">
            <Productlist />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ListPage;
