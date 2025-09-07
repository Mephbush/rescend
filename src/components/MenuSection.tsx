import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import AnimatedSection from "@/components/AnimatedSection";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  is_featured: boolean;
  image_url?: string;
}

interface MenuCategory {
  id: string;
  name: string;
  description: string;
  display_order: number;
}

const MenuSection = () => {
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [menuItems, setMenuItems] = useState<Record<string, MenuItem[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        // Fetch categories
        const { data: categoriesData, error: categoriesError } = await supabase
          .from('menu_categories')
          .select('*')
          .eq('is_active', true)
          .order('display_order');

        if (categoriesError) throw categoriesError;

        // Fetch menu items
        const { data: itemsData, error: itemsError } = await supabase
          .from('menu_items')
          .select('*')
          .eq('is_available', true)
          .order('display_order');

        if (itemsError) throw itemsError;

        setCategories(categoriesData || []);
        
        // Group items by category
        const groupedItems: Record<string, MenuItem[]> = {};
        itemsData?.forEach(item => {
          if (!groupedItems[item.category_id]) {
            groupedItems[item.category_id] = [];
          }
          groupedItems[item.category_id].push(item);
        });
        
        setMenuItems(groupedItems);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {categories.map((category, sectionIndex) => (
          <AnimatedSection key={category.id} animation="fade-in-up" delay={sectionIndex * 200}>
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-serif font-bold text-burgundy mb-8 text-center">
                {category.name}
              </h2>
              
              <div className="grid gap-6">
                {menuItems[category.id]?.map((item, index) => (
                  <Card key={item.id} className="border-0 shadow-soft hover:shadow-warm transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-serif font-semibold text-burgundy">
                          {item.name}
                          {item.is_featured && (
                            <span className="ml-2 text-sm bg-amber text-foreground px-2 py-1 rounded-full">
                              Featured
                            </span>
                          )}
                        </h3>
                        <span className="text-xl font-semibold text-amber">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-warm-gray leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;