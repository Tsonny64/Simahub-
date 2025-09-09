// src/pages/api/products.js

let products = []; // A temporary storage for products. You can later replace this with a database.

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Return the list of products
    res.status(200).json(products);
  } else if (req.method === 'POST') {
    // Add a new product
    const { name, price, description } = req.body;

    if (!name || !price || !description) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newProduct = {
      id: products.length + 1,
      name,
      price,
      description,
    };

    products.push(newProduct); // Save the product to the temporary storage
    res.status(201).json(newProduct); // Respond with the newly added product
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
