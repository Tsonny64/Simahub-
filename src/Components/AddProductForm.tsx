import { useState } from 'react';

export default function AddProductForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate form
    if (!name || !price || !description) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }

    try {
      // Send the POST request to the API
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, price, description }),
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      const newProduct = await response.json();
      console.log('Product added:', newProduct);

      // Optionally reset the form after submission
      setName('');
      setPrice('');
      setDescription('');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block">Product Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="price" className="block">Price</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="description" className="block">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="bg-blue-500 text-white p-2 w-full" disabled={loading}>
        {loading ? 'Adding...' : 'Add Product'}
      </button>
    </form>
  );
}
In this form:

The handleSubmit function sends a POST request to the /api/products route when the form is submitted.
If the request is successful, it will log the new product in the console.
You can also reset the form after submitting, or display any error messages if the API call fails.
3. Displaying the Added Products
You can fetch and display the products in another part of the admin dashboard (e.g., in the ProductsList component) by calling the GET endpoint.

Example: Fetching Products (src/components/ProductsList.js)
javascript
Copy code
import { useEffect, useState } from 'react';

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };
    
    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <p>{product.name} - ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}