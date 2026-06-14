import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">NEW LOOK</h3>
            <p className="text-gray-400">Your destination for contemporary fashion.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/products" className="hover:text-white">Products</Link></li>
              <li><Link href="/" className="hover:text-white">New Arrivals</Link></li>
              <li><Link href="/" className="hover:text-white">Sale</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/" className="hover:text-white">Blog</Link></li>
              <li><Link href="/" className="hover:text-white">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/" className="hover:text-white">Returns</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 NEW LOOK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
