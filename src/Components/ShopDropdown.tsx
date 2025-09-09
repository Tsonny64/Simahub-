import { useState } from "react";

const ShopDropdown = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (index) => {
    setActiveCategory(activeCategory === index ? null : index); // Toggle subcategory
  };

  return (
    <div
      className="absolute top-full left-0 mt-2 w-72 bg-gray-900 text-white shadow-lg border border-gray-800 rounded-lg max-h-96 overflow-y-auto z-50"
      style={{ scrollbarWidth: "thin", scrollbarColor: "gray-700 gray-900" }}
    >
      {categories.map((category, index) => (
        <div key={index}>
          {/* Category Header */}
          <button
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium relative group border-b border-gray-800 focus:outline-none"
            onClick={() => handleCategoryClick(index)}
          >
            <span className="relative">
              {category.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </span>
            <span
              className={`transition-transform duration-200 ${
                activeCategory === index ? "rotate-180" : ""
              }`}
            >
              &#9662;
            </span>
          </button>

          {/* Subcategories */}
          {activeCategory === index && (
            <div className="bg-gray-800">
              {category.subcategories.map((subcategory, subIndex) => (
                <div
                  key={subIndex}
                  className="px-6 py-2 text-xs relative group hover:bg-gray-700 border-b border-gray-700"
                >
                  <span className="relative">
                    {subcategory}
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShopDropdown;
