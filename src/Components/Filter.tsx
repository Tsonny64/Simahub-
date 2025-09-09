"use client";

import React, { useState } from "react";

const Filter = () => {
  const [openSections, setOpenSections] = useState({
    categories: true,
    brands: true,
    price: true,
    reviews: true,
    condition: true,
    shipping: true,
    status: true,
  });

  const [checked, setChecked] = useState({
    categories: [],
    brands: [],
    reviews: [],
    condition: [],
    shipping: [],
    status: [],
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCheckboxChange = (section, value) => {
    setChecked((prev) => {
      const newChecked = { ...prev };
      if (newChecked[section].includes(value)) {
        newChecked[section] = newChecked[section].filter((item) => item !== value);
      } else {
        newChecked[section].push(value);
      }
      return newChecked;
    });
  };

  return (
    <div className="space-y-6 py-4">
      {[
        {
          label: "Categories",
          options: ["Laptops", "Desktops", "Tablets"],
        },
        {
          label: "Brands",
          options: ["Apple", "Dell", "HP", "Acer", "Asus"],
        },
        {
          label: "Price Range",
          options: [],
        },
        {
          label: "Customer Reviews",
          options: ["4 Stars & Up", "3 Stars & Up", "2 Stars & Up"],
        },
        {
          label: "Condition",
          options: ["New", "Refurbished", "Used"],
        },
        {
          label: "Shipping",
          options: ["Free Shipping", "Fast Delivery"],
        },
        {
          label: "Availability",
          options: ["In Stock", "Out of Stock"],
        },
      ].map((section, idx) => (
        <div key={idx} className="border-b border-gray-300 pb-4">
          <div
            className="flex justify-between items-center cursor-pointer hover:text-red-500"
            onClick={() => toggleSection(section.label.toLowerCase())}
          >
            <h3 className="text-lg font-semibold text-gray-800">{section.label}</h3>
            <span className="text-sm">
              {openSections[section.label.toLowerCase()] ? "▲" : "▼"}
            </span>
          </div>
          {openSections[section.label.toLowerCase()] && (
            <ul className="mt-2 space-y-2">
              {section.options.length ? (
                section.options.map((option, i) => (
                  <li key={i} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`${section.label}-${i}`}
                      className="mr-2"
                      checked={checked[section.label.toLowerCase()].includes(option)}
                      onChange={() => handleCheckboxChange(section.label.toLowerCase(), option)}
                    />
                    <label
                      htmlFor={`${section.label}-${i}`}
                      className="text-sm text-gray-700 cursor-pointer"
                      onClick={() => handleCheckboxChange(section.label.toLowerCase(), option)}
                    >
                      {option}
                    </label>
                  </li>
                ))
              ) : (
                <div className="flex gap-2 mt-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-20 border border-gray-300 rounded px-2 py-1"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-20 border border-gray-300 rounded px-2 py-1"
                  />
                </div>
              )}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filter;
