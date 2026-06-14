import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
      <div className="container text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to NEW LOOK
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Discover the latest in contemporary fashion and style
        </p>
        <Link
          href="/products"
          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
