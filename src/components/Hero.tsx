import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl mb-4">
            Discover the Latest Tech
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Premium electronics and gadgets at unbeatable prices. Free shipping
            on orders over R50.
          </p>
          <div className="flex gap-4">
            <Button
              size="lg"
              variant="default"
              className="bg-white text-black hover:bg-gray-100"
            >
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              View Deals
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
