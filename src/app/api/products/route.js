// src/app/api/products/route.js
import { NextResponse } from 'next/server';

let products = []; // Temporary in-memory store for products

// Handle GET and POST requests
export async function GET() {
  return NextResponse.json({ products });
}

export async function POST(request) {
  const { name, price, description, image } = await request.json();

  // Validate input data
  if (!name || !price || !description || !image) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  // Create new product
  const newProduct = {
    id: products.length + 1,
    name,
    price: parseFloat(price),
    description,
    image,
  };

  // Add product to the "in-memory" list
  products.push(newProduct);

  return NextResponse.json({ message: 'Product added successfully', product: newProduct }, { status: 201 });
}
