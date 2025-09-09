"use client";

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useRouter } from "next/navigation";

const CheckoutCart: React.FC = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const router = useRouter();

    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return <div className="empty-cart text-center p-6">Your cart is empty.</div>;
    }

    return (
        <div className="checkout-cart p-6">
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
            {cart.map((item) => (
                <div key={item.id} className="checkout-item flex gap-4 mb-4 border-b pb-4">
                    <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="checkout-image w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-400 mt-2 transition-all"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
            <div className="subtotal mt-4">
                <p className="text-lg font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
            </div>
            <button
                className="checkout-button mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition-all"
                onClick={() => router.push("/checkout")}
            >
                Proceed to Checkout
            </button>
        </div>
    );
};

export default CheckoutCart;
