import "../styles/globals.css"; // Import your global styles
import { CartProvider } from "@/Components/CartContext"; // Make sure the path is correct
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Wrap your entire app with CartProvider to make cart context accessible in all components
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
