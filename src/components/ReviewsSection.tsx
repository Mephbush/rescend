import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import AnimatedSection from "@/components/AnimatedSection";

interface Review {
  id: string;
  customer_name: string;
  rating: number;
  title?: string;
  review_text: string;
  created_at: string;
}

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data, error } = await supabase
          .from('reviews')
          .select('*')
          .eq('is_approved', true)
          .order('created_at', { ascending: false })
          .limit(6);

        if (error) throw error;
        setReviews(data || []);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-amber text-amber' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (reviews.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-burgundy mb-6">
              What Our Guests Say
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              Discover why our guests keep coming back for exceptional dining experiences.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <AnimatedSection key={review.id} animation="scale-in" delay={index * 150}>
              <Card className="h-full shadow-soft hover:shadow-warm transition-smooth border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-warm-gray">
                      {review.rating}/5 stars
                    </span>
                  </div>
                  
                  {review.title && (
                    <h3 className="text-lg font-serif font-semibold text-burgundy mb-3">
                      {review.title}
                    </h3>
                  )}
                  
                  <p className="text-warm-gray leading-relaxed mb-4">
                    {review.review_text}
                  </p>
                  
                  <div className="border-t pt-4">
                    <p className="font-medium text-foreground">
                      {review.customer_name}
                    </p>
                    <p className="text-sm text-warm-gray">
                      {new Date(review.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;