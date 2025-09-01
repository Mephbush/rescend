import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import beefDish from "@/assets/dish-beef.jpg";
import salmonDish from "@/assets/dish-salmon.jpg";
import chocolateDessert from "@/assets/dessert-chocolate.jpg";
import heroImage from "@/assets/hero-restaurant.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      src: heroImage,
      title: "Main Dining Room",
      description: "Our elegant main dining area with warm ambient lighting"
    },
    {
      src: gallery1,
      title: "Intimate Dining",
      description: "Perfect setting for special occasions and romantic dinners"
    },
    {
      src: gallery2,
      title: "Culinary Excellence",
      description: "Our chefs at work creating culinary masterpieces"
    },
    {
      src: gallery3,
      title: "Wine Collection",
      description: "Extensive wine cellar with carefully curated selections"
    },
    {
      src: gallery4,
      title: "Private Dining",
      description: "Exclusive private dining room for special events"
    },
    {
      src: beefDish,
      title: "Signature Beef Tenderloin",
      description: "Prime cut beef with truffle sauce and roasted vegetables"
    },
    {
      src: salmonDish,
      title: "Atlantic Salmon",
      description: "Fresh grilled salmon with citrus glaze and seasonal vegetables"
    },
    {
      src: chocolateDessert,
      title: "Chocolate Soufflé",
      description: "Decadent dark chocolate soufflé with vanilla bean ice cream"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-cream">
          <div className="container mx-auto px-6 text-center">
            <AnimatedSection animation="fade-in-up">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                Gallery
              </h1>
              <p className="text-xl text-cream/90 max-w-2xl mx-auto">
                Take a visual journey through our restaurant, from our elegant dining spaces 
                to our exquisite culinary creations.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {galleryImages.map((image, index) => (
                <AnimatedSection 
                  key={index} 
                  animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"} 
                  delay={index * 100}
                >
                  <div className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-warm transition-spring">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-spring"
                      />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                        <h3 className="text-xl font-serif font-semibold mb-2">
                          {image.title}
                        </h3>
                        <p className="text-cream/90 text-sm">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <AnimatedSection animation="scale-in">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-3xl font-serif font-semibold text-burgundy mb-4">
                  Experience Bella Vista
                </h3>
                <p className="text-warm-gray mb-6">
                  Ready to create your own memorable dining experience? 
                  Reserve your table today and discover why Bella Vista is the perfect 
                  destination for special occasions and exceptional cuisine.
                </p>
                <a 
                  href="/reservations" 
                  className="inline-block bg-amber text-foreground font-semibold px-8 py-3 rounded-lg hover:bg-amber-light transition-smooth shadow-warm"
                >
                  Make a Reservation
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;