import { useState } from "react";
import Flag from "react-world-flags"; // Import from react-world-flags
import { BsChevronDown } from "react-icons/bs";

const FlagDropdown = ({ selectedCountry, onCountryChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleFlagSelect = (country) => {
    onCountryChange(country);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 text-white hover:text-red-500 transition-all ease-in-out"
      >
        <Flag code={selectedCountry} style={{ width: "24px", height: "16px" }} />
        <span>{selectedCountry === "US" ? "USA" : "Canada"}</span>
        <BsChevronDown
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900 text-white shadow-lg border border-gray-800 rounded-lg z-10">
          <button
            onClick={() => handleFlagSelect("US")}
            className="block w-full px-4 py-2 text-sm hover:bg-gray-800 hover:text-red-500 focus:outline-none transition-all ease-in-out border-b border-gray-700"
          >
            <Flag code="US" style={{ width: "24px", height: "16px" }} className="inline-block mr-2" />
            USA
          </button>
          <button
            onClick={() => handleFlagSelect("CA")}
            className="block w-full px-4 py-2 text-sm hover:bg-gray-800 hover:text-red-500 focus:outline-none transition-all ease-in-out"
          >
            <Flag code="CA" style={{ width: "24px", height: "16px" }} className="inline-block mr-2" />
            Canada
          </button>
        </div>
      )}
    </div>
  );
};

export default FlagDropdown;
