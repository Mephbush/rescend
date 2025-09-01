import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

const Menu = () => {
  const menuSections = [
    {
      title: "Appetizers",
      items: [
        { name: "Oysters Rockefeller", price: "$18", description: "Fresh blue point oysters with spinach, herbs, and champagne butter" },
        { name: "Foie Gras Terrine", price: "$24", description: "House-made terrine with fig compote and brioche toast" },
        { name: "Tuna Tartare", price: "$22", description: "Yellowfin tuna with avocado, citrus, and sesame oil" },
        { name: "Burrata Caprese", price: "$16", description: "Imported burrata with heirloom tomatoes and basil oil" }
      ]
    },
    {
      title: "Main Courses",
      items: [
        { name: "Wagyu Beef Tenderloin", price: "$65", description: "8oz tenderloin with truffle sauce and roasted vegetables" },
        { name: "Lobster Thermidor", price: "$58", description: "Maine lobster with cognac cream sauce and gruyere" },
        { name: "Duck Confit", price: "$42", description: "Slow-cooked duck leg with cherry gastrique and wild rice" },
        { name: "Rack of Lamb", price: "$48", description: "Herb-crusted lamb with ratatouille and red wine reduction" },
        { name: "Atlantic Salmon", price: "$36", description: "Pan-seared salmon with lemon butter and seasonal vegetables" },
        { name: "Vegetarian Risotto", price: "$28", description: "Mushroom risotto with truffle oil and parmesan" }
      ]
    },
    {
      title: "Desserts",
      items: [
        { name: "Chocolate Soufflé", price: "$16", description: "Dark chocolate soufflé with vanilla bean ice cream" },
        { name: "Crème Brûlée", price: "$14", description: "Vanilla custard with caramelized sugar and fresh berries" },
        { name: "Tiramisu", price: "$12", description: "Traditional Italian tiramisu with espresso and mascarpone" },
        { name: "Lemon Tart", price: "$13", description: "Tart lemon curd with meringue and raspberry coulis" }
      ]
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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            {menuSections.map((section, sectionIndex) => (
              <AnimatedSection key={section.title} animation="fade-in-up" delay={sectionIndex * 200}>
                <div className="max-w-4xl mx-auto mb-16">
                  <h2 className="text-3xl font-serif font-bold text-burgundy mb-8 text-center">
                    {section.title}
                  </h2>
                  
                  <div className="grid gap-6">
                    {section.items.map((item, index) => (
                      <Card key={index} className="border-0 shadow-soft hover:shadow-warm transition-smooth">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-serif font-semibold text-burgundy">
                              {item.name}
                            </h3>
                            <span className="text-xl font-semibold text-amber">
                              {item.price}
                            </span>
                          </div>
                          <p className="text-warm-gray leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

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