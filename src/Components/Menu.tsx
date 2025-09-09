"use client";

import React from "react";
import { FaChevronRight } from "react-icons/fa";

interface Category {
  name: string;
  subcategories: string[];
}

interface MenuProps {
  categories: Category[];
  isSubMenuOpen: string | null;
  handleSubMenuToggle: (category: string) => void;
}

const Menu: React.FC<MenuProps> = ({ categories, isSubMenuOpen, handleSubMenuToggle }) => {
  return (
    <div>
        </div>
  );
}

export default Menu;
