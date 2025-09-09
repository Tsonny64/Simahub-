"use client";

import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { BsChevronDown } from "react-icons/bs";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 text-white hover:text-red-500 transition-all ease-in-out"
      >
        <FaUserCircle className="text-2xl" />
        <span>Profile</span>
        <BsChevronDown
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900 text-white shadow-lg border border-gray-800 rounded-lg">
          <button
            onClick={() => router.push("/profile")}
            className="block w-full px-4 py-2 text-sm hover:bg-gray-800 focus:outline-none transition-all ease-in-out"
          >
            Profile
          </button>
          <button
            className="block w-full px-4 py-2 text-sm hover:bg-gray-800 focus:outline-none transition-all ease-in-out"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
