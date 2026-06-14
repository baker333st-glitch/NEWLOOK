import ProductGrid from "@/components/ProductGrid";

export const metadata = {
  title: "Products - NEW LOOK",
  description: "Browse our collection of fashion items",
};

export default function ProductsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Our Collection</h1>
      <ProductGrid />
    </div>
  );
}
