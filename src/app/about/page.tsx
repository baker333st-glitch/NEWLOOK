export const metadata = {
  title: "About Us - NEW LOOK",
  description: "Learn about NEW LOOK fashion store",
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About NEW LOOK</h1>
        <div className="space-y-4 text-gray-700">
          <p>
            Welcome to NEW LOOK, your destination for contemporary fashion and style.
            We are dedicated to bringing you the latest trends and timeless pieces.
          </p>
          <p>
            Our curated collection features high-quality clothing and accessories
            designed for the modern individual who values both style and comfort.
          </p>
          <p>
            With over a decade of experience in the fashion industry, we pride ourselves
            on exceptional customer service and sustainable practices.
          </p>
        </div>
      </div>
    </div>
  );
}
