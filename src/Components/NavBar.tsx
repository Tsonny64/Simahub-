"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
  FaBell,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Navicons from "./Navicons";
import SearchBar from "./SearchBar";
import CartModal from "./CartModal";
import ShopDropdown from "./ShopDropdown";
import DealDropdown from "./DealDropdown";  // Import the DealDropdown component
import CountryFlag from "react-world-flags"; // Use a flag library like react-world-flags

const NavBar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isDealsOpen, setIsDealsOpen] = useState(false); // Manage Deals dropdown visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu
  const shopMenuRef = useRef(null); // For detecting clicks outside of the shop menu
  const dealsMenuRef = useRef(null); // For detecting clicks outside of the deals menu

  // Categories data
  const categories = [
    {
      name: "Computers, Tablets, & Accessories",
      subcategories: ["Laptops", "Desktops", "Tablets", "Accessories"],
    },
    {
      name: "Cell Phones and Accessories",
      subcategories: [
        "Smartphones",
        "Phone Cases",
        "Chargers",
        "Screen Protectors",
      ],
    },
    {
      name: "Office Supplies & Ink",
      subcategories: ["Printers", "Printer Ink", "Paper", "Stationery"],
    },
    {
      name: "TV & Home Theatre",
      subcategories: [
        "Smart TVs",
        "Projectors",
        "Soundbars",
        "Home Theatre Systems",
      ],
    },
    {
      name: "Headphones, Speakers, & Audio",
      subcategories: ["Headphones", "Speakers", "Earbuds", "Amplifiers"],
    },
    {
      name: "Cameras, Camcorders, & Drones",
      subcategories: ["Cameras", "Camcorders", "Drones", "Lenses"],
    },
    {
      name: "Car Tech and GPS",
      subcategories: [
        "Car Stereos",
        "GPS Devices",
        "Dash Cams",
        "Car Chargers",
      ],
    },
    {
      name: "Appliances",
      subcategories: [
        "Refrigerators",
        "Microwaves",
        "Washing Machines",
        "Air Conditioners",
      ],
    },
    {
      name: "Smart Home",
      subcategories: [
        "Smart Speakers",
        "Smart Thermostats",
        "Smart Lights",
        "Security Systems",
      ],
    },
    {
      name: "Home Living",
      subcategories: ["Furniture", "Bedding", "Kitchenware", "Decor"],
    },
    {
      name: "Baby & Maternity",
      subcategories: [
        "Strollers",
        "Car Seats",
        "Baby Clothing",
        "Maternity Wear",
      ],
    },
    {
      name: "Video Games & VR",
      subcategories: ["Consoles", "Games", "VR Headsets", "Accessories"],
    },
    {
      name: "Wearable Technology",
      subcategories: ["Smartwatches", "Fitness Trackers", "Smart Glasses"],
    },
    {
      name: "Health & Fitness",
      subcategories: [
        "Fitness Equipment",
        "Supplements",
        "Yoga Mats",
        "Health Monitors",
      ],
    },
    {
      name: "Sports, Recreation, & Transportation",
      subcategories: ["Bikes", "Scooters", "Sports Gear", "Camping Gear"],
    },
    {
      name: "Movies & Music",
      subcategories: ["DVDs", "Blu-rays", "Vinyl", "CDs"],
    },
    {
      name: "Musical Instruments & Equipment",
      subcategories: ["Guitars", "Drums", "Keyboards", "Microphones"],
    },
    {
      name: "Toys, Games, & Education",
      subcategories: ["Toys", "Board Games", "Learning Toys", "Outdoor Games"],
    },
    {
      name: "Beauty",
      subcategories: ["Makeup", "Skincare", "Haircare", "Fragrance"],
    },
    {
      name: "Personal Care",
      subcategories: [
        "Hair Removal",
        "Shaving",
        "Skin Treatments",
        "Oral Care",
      ],
    },
    {
      name: "Travel, Luggage, & Bags",
      subcategories: ["Luggage", "Backpacks", "Travel Accessories", "Handbags"],
    },
    {
      name: "Watches, Jewelry, & Fashion",
      subcategories: ["Watches", "Necklaces", "Bracelets", "Clothing"],
    },
  ];

  // Deal Categories
  const dealCategories = ["New", "Open Box", "Used"];

  // Close the menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        shopMenuRef.current &&
        !shopMenuRef.current.contains(event.target) &&
        dealsMenuRef.current &&
        !dealsMenuRef.current.contains(event.target)
      ) {
        setIsShopOpen(false);
        setIsDealsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSubMenuToggle = (category) => {
    setIsSubMenuOpen(isSubMenuOpen === category ? null : category);
  };

  const handleProfile = () => setIsProfileOpen((prev) => !prev);
  const handleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <div className="sticky top-0 z-50 bg-gray-800 text-white shadow-lg">
      {/* MOBILE VIEW */}
      <div className="flex items-center justify-between px-3 py-2 md:hidden">
      <Link href="/" aria-label="Homepage">
          <Image
            src="/logo.png"
            alt="SimaHub Logo"
            width={30} // Adjust dimensions as needed
            height={30}
            className="rounded-full"
          />
        </Link>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="bg-gray-900 text-white flex flex-col p-4 md:hidden">
          <Link href="/" className="py-2 hover:text-red-500">
            Home
          </Link>
          <Link href="/shop" className="py-2 hover:text-red-500">
            Shop
          </Link>
          <Link href="/deals" className="py-2 hover:text-red-500">
            Deals
          </Link>
          <Link href="/about" className="py-2 hover:text-red-500">
            About Us
          </Link>
          <Link href="/contact" className="py-2 hover:text-red-500">
            Contact
          </Link>
        </div>
      )}

      {/* DESKTOP VIEW */}
      <div className="hidden md:flex flex-col">
        {/* TOP BAR */}
        <div className="flex items-center justify-between px-6 bg-gray-700 py-2">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Homepage"
          >

      {/* LOGO */}
            <Image
              src="/logo.png"
              alt="SimaHub Logo"
              width={100}
              height={80}
              className="object-contain items-center rounded justify-center"/>
            <div className="text-3xl font-bold"></div>
          </Link>
      {/* SEARCH BAR */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-lg">
                <SearchBar />
            </div>
          </div>
      {/*NAVICONS */}
          <div className="flex items-center gap-6">
            <Navicons />
          </div>
        </div>

      {/* CARTMODAL */}

        {/* SECOND PART: Navigation Links */}
        <div className="flex items-center justify-between gap-12bg-gradient-to-b from-gray-700 to-gray-700 text-white px-8 py-3 border-t border-gray-800">
          <nav className="flex gap-12 text-lg font-medium relative w-full">
            {/* Shop Dropdown */}
            <div className="relative" ref={shopMenuRef}>
  <button
    onClick={() => setIsShopOpen(!isShopOpen)}
    className="hover:text-red-500 transition flex items-center"
  >
    <span>Shop</span>
    <span className="ml-2">&#9662;</span>
  </button>
  {isShopOpen && <ShopDropdown categories={categories} />}
</div>
{/* Deals Dropdown */}
<div className="relative" ref={dealsMenuRef}>
              <button
                onClick={() => setIsDealsOpen(!isDealsOpen)}
                className="hover:text-red-500 transition flex items-center"
              >
                <span>Deals</span>
                <span className="ml-2">&#9662;</span>
              </button>
              {isDealsOpen && <DealDropdown />}
            </div>
            

            {/* Other Links */}
            <Link href="/about" className="cursor-pointer hover:text-red-500">About Us</Link>
            <Link href="/contact" className="cursor-pointer hover:text-red-500">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
