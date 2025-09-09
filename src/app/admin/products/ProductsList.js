'use client';

import { useEffect, useState } from 'react';

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data.products || []);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Manage Products</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="p-2 border-b">Product Name</th>
              <th className="p-2 border-b">Price</th>
              <th className="p-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id}>
                <td className="p-2 border-b">{product.name}</td>
                <td className="p-2 border-b">${product.price}</td>
                <td className="p-2 border-b">
                  <button className="text-blue-500 hover:underline">Edit</button>
                  <button className="ml-4 text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
