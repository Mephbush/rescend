import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-serif font-bold text-burgundy">
              Bella Vista
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-burgundy transition-smooth">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-burgundy transition-smooth">
              About
            </a>
            <a href="#menu" className="text-foreground hover:text-burgundy transition-smooth">
              Menu
            </a>
            <a href="#contact" className="text-foreground hover:text-burgundy transition-smooth">
              Contact
            </a>
          </nav>

          <Button variant="reserve" className="hidden md:inline-flex">
            Reserve Table
          </Button>

          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;