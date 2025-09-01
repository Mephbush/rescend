import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const team = [
    {
      name: "Chef Marco Rossi",
      role: "Executive Chef",
      description: "With over 20 years of experience in Michelin-starred restaurants across Europe, Chef Marco brings authentic Italian passion to every dish."
    },
    {
      name: "Isabella Chen",
      role: "Pastry Chef",
      description: "Graduate of Le Cordon Bleu Paris, Isabella creates exquisite desserts that are both visually stunning and unforgettably delicious."
    },
    {
      name: "James Morrison",
      role: "Sommelier",
      description: "Certified Master Sommelier with an exceptional palate for wine pairings, James curates our extensive wine collection."
    }
  ];

  const awards = [
    "James Beard Award Nominee 2023",
    "Wine Spectator Award of Excellence",
    "AAA Four Diamond Restaurant",
    "OpenTable Diners' Choice Award",
    "Best Fine Dining Restaurant - Local Guide 2023"
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
                About Bella Vista
              </h1>
              <p className="text-xl text-cream/90 max-w-2xl mx-auto">
                A culinary journey that began with passion and dedication to excellence
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-in-up">
                <h2 className="text-4xl font-serif font-bold text-burgundy mb-8 text-center">
                  Our Journey
                </h2>
              </AnimatedSection>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection animation="slide-in-left" delay={200}>
                  <div className="space-y-6">
                    <p className="text-lg text-warm-gray leading-relaxed">
                      Bella Vista opened its doors in 2010 with a simple vision: to create an 
                      extraordinary dining experience that celebrates the finest ingredients, 
                      innovative techniques, and warm hospitality.
                    </p>
                    <p className="text-lg text-warm-gray leading-relaxed">
                      Founded by renowned chef Marco Rossi, our restaurant has become a 
                      cornerstone of fine dining, earning recognition from food critics 
                      and diners alike for our commitment to culinary excellence.
                    </p>
                    <p className="text-lg text-warm-gray leading-relaxed">
                      Every dish tells a story, every ingredient is carefully sourced, 
                      and every meal is crafted to create lasting memories for our guests.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="slide-in-right" delay={400}>
                  <div className="bg-gradient-subtle p-8 rounded-lg">
                    <h3 className="text-2xl font-serif font-semibold text-burgundy mb-6">
                      Our Values
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-amber mr-3 mt-1 text-xl">•</span>
                        <span className="text-warm-gray">Commitment to using only the finest, locally-sourced ingredients</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber mr-3 mt-1 text-xl">•</span>
                        <span className="text-warm-gray">Innovation in culinary techniques while respecting tradition</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber mr-3 mt-1 text-xl">•</span>
                        <span className="text-warm-gray">Exceptional service that makes every guest feel special</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber mr-3 mt-1 text-xl">•</span>
                        <span className="text-warm-gray">Creating a warm, elegant atmosphere for memorable dining</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-in-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold text-burgundy mb-6">
                  Meet Our Team
                </h2>
                <p className="text-lg text-warm-gray max-w-2xl mx-auto">
                  Our talented team of culinary professionals brings years of experience 
                  and passion to create exceptional dining experiences.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <AnimatedSection key={index} animation="scale-in" delay={index * 150}>
                  <Card className="border-0 shadow-soft hover:shadow-warm transition-smooth h-full">
                    <CardContent className="p-8 text-center">
                      <div className="w-20 h-20 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-serif font-bold text-foreground">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-burgundy mb-2">
                        {member.name}
                      </h3>
                      <p className="text-amber font-medium mb-4">
                        {member.role}
                      </p>
                      <p className="text-warm-gray leading-relaxed">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-in-up">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-burgundy mb-6">
                  Recognition & Awards
                </h2>
                <p className="text-lg text-warm-gray max-w-2xl mx-auto mb-8">
                  We are honored to be recognized by industry leaders and food enthusiasts 
                  for our commitment to culinary excellence.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {awards.map((award, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg shadow-soft text-center">
                    <div className="w-12 h-12 bg-amber rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-xl">🏆</span>
                    </div>
                    <p className="font-semibold text-burgundy">
                      {award}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;