import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Classic White Shirt",
    price: "$49.99",
    image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Premium Blue Jeans",
    price: "$79.99",
    image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Casual T-Shirt",
    price: "$29.99",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Elegant Black Dress",
    price: "$129.99",
    image: "https://images.pexels.com/photos/2220294/pexels-photo-2220294.jpeg?w=400&h=400&fit=crop",
  },
];

const ProductGrid = () => {
  return (
    <section className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <div className="relative h-64 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-bold">{product.price}</span>
                <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
