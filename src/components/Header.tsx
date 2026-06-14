import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          NEW LOOK
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-gray-900">
            Products
          </Link>
          <Link href="/weather" className="text-gray-700 hover:text-gray-900">
            Weather
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-gray-900">
            Search
          </button>
          <button className="text-gray-700 hover:text-gray-900">
            Cart (0)
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
