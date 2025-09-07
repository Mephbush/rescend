import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { supabase } from "@/integrations/supabase/client";
import beefDish from "@/assets/dish-beef.jpg";
import salmonDish from "@/assets/dish-salmon.jpg";
import chocolateDessert from "@/assets/dessert-chocolate.jpg";

interface FeaturedDish {
  id: string;
  name: string;
  description: string;
  price: number;
  category_name: string;
  image: string;
}

const MenuHighlights = () => {
  const [featuredDishes, setFeaturedDishes] = useState<FeaturedDish[]>([]);
  const [loading, setLoading] = useState(true);

  // Fallback dishes in case no featured items are found
  const fallbackDishes = [
    {
      id: "fallback-1",
      name: "Beef Tenderloin",
      description: "Prime cut beef with truffle sauce, roasted vegetables, and herb-infused jus",
      price: 48,
      category_name: "Main Course",
      image: beefDish
    },
    {
      id: "fallback-2",
      name: "Atlantic Salmon", 
      description: "Fresh grilled salmon with citrus glaze, seasonal vegetables, and lemon butter",
      price: 36,
      category_name: "Seafood",
      image: salmonDish
    },
    {
      id: "fallback-3",
      name: "Chocolate Soufflé",
      description: "Decadent dark chocolate soufflé with vanilla bean ice cream and berry coulis",
      price: 16,
      category_name: "Dessert",
      image: chocolateDessert
    }
  ];

  useEffect(() => {
    const fetchFeaturedDishes = async () => {
      try {
        const { data, error } = await supabase
          .from('menu_items')
          .select(`
            id,
            name,
            description,
            price,
            image_url,
            menu_categories (
              name
            )
          `)
          .eq('is_featured', true)
          .eq('is_available', true)
          .limit(3);

        if (error) throw error;

        if (data && data.length > 0) {
          const formattedDishes = data.map((item, index) => ({
            id: item.id,
            name: item.name,
            description: item.description || "",
            price: item.price,
            category_name: item.menu_categories?.name || "Special",
            image: item.image_url || [beefDish, salmonDish, chocolateDessert][index % 3]
          }));
          setFeaturedDishes(formattedDishes);
        } else {
          // Use fallback dishes if no featured items found
          setFeaturedDishes(fallbackDishes);
        }
      } catch (error) {
        console.error('Error fetching featured dishes:', error);
        setFeaturedDishes(fallbackDishes);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedDishes();
  }, []);

  const dishes = loading ? fallbackDishes : featuredDishes;

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
            <AnimatedSection key={dish.id} animation="scale-in" delay={index * 150}>
            <Card className="group overflow-hidden shadow-soft hover:shadow-warm transition-spring border-0">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-spring"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber text-foreground text-sm font-medium px-3 py-1 rounded-full">
                    {dish.category_name}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-serif font-semibold text-burgundy">
                    {dish.name}
                  </h3>
                  <span className="text-xl font-semibold text-amber">
                    ${dish.price.toFixed(2)}
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