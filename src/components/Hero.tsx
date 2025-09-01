import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-restaurant.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>
      
      <AnimatedSection animation="fade-in" delay={300}>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-cream mb-6 leading-tight">
            Bella Vista
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-4 font-light">
            Fine Dining Experience
          </p>
          <p className="text-lg text-cream/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Where culinary artistry meets elegant ambiance. Experience exceptional cuisine 
            crafted with passion and served with sophistication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/menu">
              <Button variant="hero" size="xl">
                View Menu
              </Button>
            </Link>
            <Link to="/reservations">
              <Button variant="elegant" size="xl">
                Make Reservation
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cream/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;