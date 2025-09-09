"use client";

import { useState, useEffect, useRef } from "react";
import { HiOutlineUser, HiOutlineBell, HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineFlag } from "react-icons/md"; // For placeholder flag
import Link from "next/link";
import CartModal from "./CartModal";
import FlagDropdown from "./FlagDropdown"; // Import the FlagDropdown component

const Navicons = () => {
  const [selectedCountry, setSelectedCountry] = useState("🇺🇸"); // Default country (USA)
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0); // Dynamic cart value
  const profileMenuRef = useRef(null);
  const countryMenuRef = useRef(null);

  // Mock data for cart total (update dynamically based on your logic)
  useEffect(() => {
    // Replace with actual logic to fetch cart total
    setCartTotal(0);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (countryMenuRef.current && !countryMenuRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="flex items-center gap-6">
      {/* Flag Dropdown Component */}
      <FlagDropdown selectedCountry={selectedCountry} onCountryChange={handleCountryChange} />

      {/* Profile Dropdown */}
      <div className="relative" ref={profileMenuRef}>
        <div
          onClick={() => setIsProfileOpen((prev) => !prev)}
          className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition-all ease-in-out"
        >
          <HiOutlineUser className="text-2xl" />
          <span className="text-sm">Sign In / Register</span>
        </div>
        {isProfileOpen && (
          <div className="absolute left-0 mt-2 w-40 bg-gray-800 text-white p-2 rounded-lg shadow-lg border border-gray-600 animate-fadeIn">
            <Link
              href="/profile"
              className="block py-2 px-4 hover:text-red-500 transition-all ease-in-out"
            >
              Profile
            </Link>
            <div className="border-t border-gray-600"></div>
            <button className="block py-2 px-4 w-full text-left hover:text-red-500 transition-all ease-in-out">
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Notifications */}
      <div className="relative flex items-center gap-2 cursor-pointer hover:text-red-500 transition-all ease-in-out">
        <HiOutlineBell className="text-2xl" />
        <span className="text-sm">Notifications</span>
      </div>

      {/* Shopping Cart */}
      <div className="relative">
        <div
          onClick={() => setIsCartOpen((prev) => !prev)}
          className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition-all ease-in-out"
        >
          <HiOutlineShoppingBag className="text-2xl" />
          <span className="text-sm">Cart</span>
          {cartTotal > 0 && (
            <span className="ml-2 text-sm font-semibold">${cartTotal.toFixed(2)}</span>
          )}
        </div>
        {isCartOpen && <CartModal />}
      </div>
    </div>
  );
};

export default Navicons;
