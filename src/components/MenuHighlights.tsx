import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import beefDish from "@/assets/dish-beef.jpg";
import salmonDish from "@/assets/dish-salmon.jpg";
import chocolateDessert from "@/assets/dessert-chocolate.jpg";

const MenuHighlights = () => {
  const dishes = [
    {
      name: "Beef Tenderloin",
      description: "Prime cut beef with truffle sauce, roasted vegetables, and herb-infused jus",
      price: "$48",
      image: beefDish,
      category: "Main Course"
    },
    {
      name: "Atlantic Salmon",
      description: "Fresh grilled salmon with citrus glaze, seasonal vegetables, and lemon butter",
      price: "$36",
      image: salmonDish,
      category: "Seafood"
    },
    {
      name: "Chocolate Soufflé",
      description: "Decadent dark chocolate soufflé with vanilla bean ice cream and berry coulis",
      price: "$16",
      image: chocolateDessert,
      category: "Dessert"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-burgundy mb-6">
              Signature Dishes
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              Experience our chef's most celebrated creations, each dish a perfect harmony 
              of flavors and artful presentation.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dishes.map((dish, index) => (
            <AnimatedSection key={index} animation="scale-in" delay={index * 150}>
            <Card key={index} className="group overflow-hidden shadow-soft hover:shadow-warm transition-spring border-0">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-spring"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber text-foreground text-sm font-medium px-3 py-1 rounded-full">
                    {dish.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-serif font-semibold text-burgundy">
                    {dish.name}
                  </h3>
                  <span className="text-xl font-semibold text-amber">
                    {dish.price}
                  </span>
                </div>
                <p className="text-warm-gray leading-relaxed">
                  {dish.description}
                </p>
              </CardContent>
            </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in" delay={600}>
          <div className="text-center mt-12">
            <p className="text-warm-gray mb-6">
              Discover our complete menu featuring seasonal specialties and wine pairings
            </p>
            <Link to="/menu" className="text-burgundy font-semibold hover:text-amber transition-smooth underline decoration-2 underline-offset-4">
              View Full Menu →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MenuHighlights;