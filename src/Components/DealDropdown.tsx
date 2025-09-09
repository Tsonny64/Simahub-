import { useState } from "react";

const deals = [
  {
    name: "New",
    subcategories: ["Latest Releases", "Fresh Stock", "Limited Edition"],
  },
  {
    name: "Open-Box",
    subcategories: ["Discounted Open Box", "Like New", "Refurbished"],
  },
  {
    name: "Used",
    subcategories: ["Pre-owned", "Used with Warranty", "As-Is Deals"],
  },
  {
    name: "Black Friday Deals",
    subcategories: ["Doorbusters", "Exclusive Offers", "Limited-Time Discounts"],
  },
  {
    name: "Cyber Monday Deals",
    subcategories: ["Tech Deals", "Online-Only Offers", "Cyber Savings"],
  },
];

const DealDropdown = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (index) => {
    setActiveCategory(activeCategory === index ? null : index); // Toggle subcategory
  };

  return (
    <div
      className="absolute top-full left-0 mt-2 w-60 bg-gray-900 text-white shadow-lg border border-gray-800 rounded-lg max-h-80 z-50"
      style={{ scrollbarWidth: "thin", scrollbarColor: "gray-700 gray-900" }}
    >
      {/* Dropdown content with right-side scrollbar */}
      <div className="w-full max-h-80 overflow-y-auto pr-2">
        {deals.map((deal, index) => (
          <div key={index}>
            {/* Deal Category Header */}
            <button
              className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium relative group border-b border-gray-800 focus:outline-none"
              onClick={() => handleCategoryClick(index)}
            >
              <span className="relative">
                {deal.name}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
              <span
                className={`transition-transform duration-200 ${activeCategory === index ? "rotate-180" : ""}`}
              >
                &#9662;
              </span>
            </button>

            {/* Subcategories */}
            {activeCategory === index && (
              <div className="bg-gray-800">
                {deal.subcategories.map((subcategory, subIndex) => (
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

      {/* Scrollbar styling */}
      <style jsx>{`
        .w-full::-webkit-scrollbar {
          width: 8px; /* Set width of the scrollbar */
        }
        .w-full::-webkit-scrollbar-thumb {
          background-color: #4b5563; /* Set scrollbar thumb color */
          border-radius: 10px; /* Optional: round the scrollbar thumb */
        }
        .w-full::-webkit-scrollbar-track {
          background: #2d3748; /* Set track color */
        }
      `}</style>
    </div>
  );
};

export default DealDropdown;
