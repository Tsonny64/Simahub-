"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className="relative w-full max-w-lg">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for products"
        className="w-full py-3 px-6 bg-gray-800 text-white rounded-full border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none transition-all duration-300 ease-in-out placeholder-gray-400 hover:placeholder-gray-300"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition-all duration-300"
      >
        <FaSearch className="text-xl" />
      </button>
    </form>
  );
};

export default SearchBar;
