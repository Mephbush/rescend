import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-burgundy mb-6">
            Visit Us
          </h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            Experience exceptional dining in the heart of the city. 
            We look forward to welcoming you to Bella Vista.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-soft border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-burgundy mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Address</h4>
                  <p className="text-warm-gray">
                    123 Culinary Avenue<br />
                    Downtown District<br />
                    New York, NY 10001
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                  <p className="text-warm-gray">(555) 123-4567</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <p className="text-warm-gray">reservations@bellavista.com</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Hours</h4>
                  <div className="text-warm-gray space-y-1">
                    <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                    <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                    <p>Sunday: 5:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-burgundy mb-6">
                Make a Reservation
              </h3>
              
              <div className="space-y-4">
                <p className="text-warm-gray mb-6">
                  Reserve your table for an unforgettable dining experience. 
                  We recommend booking in advance, especially for weekend evenings.
                </p>
                
                <div className="space-y-4">
                  <Button variant="reserve" className="w-full">
                    Book Online
                  </Button>
                  <Button variant="outline" className="w-full">
                    Call to Reserve
                  </Button>
                </div>
                
                <div className="mt-8 p-4 bg-amber/10 rounded-lg">
                  <h4 className="font-semibold text-burgundy mb-2">Special Events</h4>
                  <p className="text-sm text-warm-gray">
                    Private dining rooms available for special occasions, 
                    corporate events, and celebrations. Contact us for details.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;