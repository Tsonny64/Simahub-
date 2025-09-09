import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-64 mt-24">
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* LEFT: Logo & Contact Info */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <Link href="/" className="flex items-center gap-3" aria-label="Homepage">
            <Image
              src="/logo.png"
              alt="SimaHub Logo"
              width={50}
              height={50}
              className="rounded object-contain"
            />
            <h2 className="text-2xl font-bold">SimaHub</h2>
          </Link>
          <p className="text-gray-400 text-sm">
            4884 rue st-Dominique, Montreal, QC, H2T1T8, Canada
          </p>
          <span className="text-gray-400 text-sm">Thomas.Simaku@hotmail.com</span>
          <span className="text-gray-400 text-sm">+1 514 755 9532</span>
          <div className="flex gap-3 mt-4">
            {["facebook", "instagram", "youtube", "pinterest", "x"].map((icon) => (
              <Image
                key={icon}
                src={`/${icon}.png`}
                alt={icon}
                width={20}
                height={20}
                className="cursor-pointer hover:opacity-75"
              />
            ))}
          </div>
        </div>

        {/* CENTER: Quick Links */}
        <div className="flex justify-between w-full md:w-2/3 lg:w-1/2 border-r border-gray-700 pr-8 mt-">
          {[
            {
              title: "About Us",
              links: ["Careers", "Newsroom", "Sustainability"],
            },
            {
              title: "Customer Services",
              links: [
                "Contact Us",
                "Help",
                "Shipping Information",
                "Returns",
              ],
            },
            {
              title: "My SimaHub Account",
              links: ["Order Status", "Manage Account", "Wishlist"],
            },
          ].map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              <h3 className="text-sm font-bold text-gray-500 mb-2">
                {section.title}
              </h3>
              {section.links.map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm hover:text-red-500 transition"
                >
                  {link}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* RIGHT: Subscribe & Secure Payments */}
        <div className="flex flex-col gap-6 w-full md:w-1/3 lg:w-1/4 pl-8">
          {/* Subscribe Section */}
<div className="flex flex-col gap-3">
  <h3 className="text-sm font-semibold">Subscribe</h3>
  <p className="text-gray-400 text-sm">
    Be the first to get the latest news about trends, promotions, and
    much more!
  </p>
  <div className="flex">
    <input
      type="email"
      placeholder="Email Address"
      className="flex-1 px-3 py-2 border border-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
    />
    <button className="px-4 py-2 bg-red-500 text-white text-sm border border-red-500 hover:bg-red-600 hover:border-red-600 transition">
      JOIN
    </button>
  </div>
</div>

          {/* Secure Payments Section */}
          <div>
            <h3 className="text-sm font-semibold">Secure Payments</h3>
            <div className="flex gap-3 mt-2">
              {["discover", "skrill", "paypal", "mastercard", "visa"].map(
                (payment) => (
                  <Image
                    key={payment}
                    src={`/${payment}.png`}
                    alt={payment}
                    width={40}
                    height={25}
                    className="object-contain"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-xs">
        <p>&copy; {new Date().getFullYear()} SimaHub. All rights reserved.</p>
        <p className="mt-2">
          <Link href="/terms" className="hover:text-red-500 transition">
            Terms of Service
          </Link>{" "}
          |{" "}
          <Link href="/privacy" className="hover:text-red-500 transition">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
