import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import MenuSection from "@/components/MenuSection";

const Menu = () => {

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-cream">
          <div className="container mx-auto px-6 text-center">
            <AnimatedSection animation="fade-in-up">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                Our Menu
              </h1>
              <p className="text-xl text-cream/90 max-w-2xl mx-auto">
                Discover our carefully crafted dishes, each prepared with the finest ingredients 
                and culinary expertise.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Menu Sections */}
        <MenuSection />

        {/* Wine Pairing Note */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <AnimatedSection animation="scale-in">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-serif font-semibold text-burgundy mb-4">
                  Wine Pairings Available
                </h3>
                <p className="text-warm-gray mb-6">
                  Our sommelier has carefully selected wines to complement each dish. 
                  Ask your server about our recommended pairings.
                </p>
                <p className="text-sm text-warm-gray/80">
                  Prices subject to change based on seasonal availability. 
                  Please inform us of any dietary restrictions.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Menu;