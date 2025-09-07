import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuHighlights from "@/components/MenuHighlights";
import ReviewsSection from "@/components/ReviewsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <ReviewsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;