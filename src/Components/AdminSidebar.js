'use client';

import { useState } from 'react';
import { HomeIcon, CollectionIcon, PlusCircleIcon, CogIcon } from '@heroicons/react/solid';

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`bg-gray-800 text-white ${collapsed ? 'w-16' : 'w-64'} h-full transition-all duration-300`}>
      <div className="flex justify-between items-center p-4">
        <button onClick={() => setCollapsed(!collapsed)} className="text-white">
          <span className="text-lg font-bold">{collapsed ? '>' : '<'}</span>
        </button>
        <span className={`text-2xl font-bold ${collapsed ? 'hidden' : ''}`}>Admin Dashboard</span>
      </div>
      <nav className="space-y-4 mt-6">
        <ul>
          <li>
            <a href="/admin" className="flex items-center space-x-2 text-white hover:bg-gray-700 p-2 rounded-md">
              <HomeIcon className="w-5 h-5" />
              {!collapsed && <span>Dashboard</span>}
            </a>
          </li>
          <li>
            <a href="/admin/products" className="flex items-center space-x-2 text-white hover:bg-gray-700 p-2 rounded-md">
              <CollectionIcon className="w-5 h-5" />
              {!collapsed && <span>Products</span>}
            </a>
          </li>
          <li>
            <a href="/admin/products/add" className="flex items-center space-x-2 text-white hover:bg-gray-700 p-2 rounded-md">
              <PlusCircleIcon className="w-5 h-5" />
              {!collapsed && <span>Add Product</span>}
            </a>
          </li>
          <li>
            <a href="/admin/settings" className="flex items-center space-x-2 text-white hover:bg-gray-700 p-2 rounded-md">
              <CogIcon className="w-5 h-5" />
              {!collapsed && <span>Settings</span>}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}