const FeaturedSection = () => {
  return (
    <section className="container py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Why Choose NEW LOOK?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="mb-4 text-4xl">✨</div>
          <h3 className="text-xl font-bold mb-2">Quality Fashion</h3>
          <p className="text-gray-600">Carefully curated collection of high-quality clothing and accessories.</p>
        </div>
        <div className="text-center">
          <div className="mb-4 text-4xl">🚚</div>
          <h3 className="text-xl font-bold mb-2">Fast Shipping</h3>
          <p className="text-gray-600">Quick and reliable delivery to your doorstep.</p>
        </div>
        <div className="text-center">
          <div className="mb-4 text-4xl">💚</div>
          <h3 className="text-xl font-bold mb-2">Sustainable</h3>
          <p className="text-gray-600">Committed to sustainable and ethical fashion practices.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
