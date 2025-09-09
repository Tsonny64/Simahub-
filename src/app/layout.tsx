import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import { CartProvider } from "@/Components/CartContext"; // Import CartProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simahub",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Metadata can be customized here */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>
        {/* Navbar (Full Width) */}
        <NavBar />

        {/* Full-width background */}
        <div className="bg-gray-100 min-h-screen">
          {/* Centered container with white borders */}
          <div className="max-w-screen-xl mx-auto bg-white min-h-screen border-l border-r border-white shadow-md">
            {/* Wrap your app with CartProvider here */}
            <CartProvider>
              {/* Main content */}
              <main className="flex-grow px-4 py-6">{children}</main>
            </CartProvider>
          </div>
        </div>

        {/* Footer (Full Width) */}
        <Footer />
      </body>
    </html>
  );
}
