"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CartModal = () => {
  const router = useRouter();
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Product Name",
      price: 49.0,
      quantity: 2,
      imageUrl:
        "https://images.pexels.com/photos/28034954/pexels-photo-28034954/free-photo-of-a-black-and-white-photo-of-a-bridge-over-a-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(true);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  if (!isModalOpen) return null;

  return (
    <div
      ref={modalRef}
      className="w-max absolute p-6 rounded-none shadow-lg bg-gray-800 top-12 right-0 flex flex-col gap-6 z-20 border-t border-gray-700 border-solid"
    >
      {cart.length === 0 ? (
        <div className="text-white text-lg font-semibold">Your Cart is Empty</div>
      ) : (
        <div className="flex flex-col gap-6">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 border-b border-gray-600 pb-4">
              <Image
                src={item.imageUrl}
                alt="Product Image"
                width={80}
                height={100}
                className="object-cover rounded-lg"
              />
              <div className="flex flex-col justify-between w-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                  <div className="text-gray-300 font-medium text-lg">${item.price}</div>
                </div>
                <div className="text-sm text-gray-400">In Stock</div>
                <div className="flex justify-between items-center text-sm text-gray-400 mt-2">
                  <div className="flex items-center gap-2">
                    <button
                      className="bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-600 transition-all"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="text-white">{item.quantity}</span>
                    <button
                      className="bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-600 transition-all"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="text-blue-500 hover:text-blue-400 transition-all"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-4 mt-6 text-white">
            <div className="flex justify-between font-semibold text-lg">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="text-sm text-gray-400 mt-2">
              Shipping and taxes calculated at checkout.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-none text-sm transition-all hover:shadow-lg w-full sm:w-auto"
              onClick={() => router.push("/cart")} // Redirect to Cart Page
            >
              View Cart
            </button>
            <button
              className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-none text-sm transition-all hover:shadow-lg w-full sm:w-auto"
              onClick={() => router.push("/checkout")} // Redirect to Checkout Page
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
