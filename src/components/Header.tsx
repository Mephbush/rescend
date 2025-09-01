import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={logo} 
              alt="Bella Vista Logo" 
              className="h-12 w-12 animate-float group-hover:animate-pulse-glow transition-all"
            />
            <h1 className="text-2xl font-serif font-bold text-burgundy group-hover:text-amber transition-smooth">
              Bella Vista
            </h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-smooth ${isActive('/') ? 'text-burgundy font-semibold' : 'text-foreground hover:text-burgundy'}`}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`transition-smooth ${isActive('/menu') ? 'text-burgundy font-semibold' : 'text-foreground hover:text-burgundy'}`}
            >
              Menu
            </Link>
            <Link 
              to="/about" 
              className={`transition-smooth ${isActive('/about') ? 'text-burgundy font-semibold' : 'text-foreground hover:text-burgundy'}`}
            >
              About
            </Link>
            <Link 
              to="/gallery" 
              className={`transition-smooth ${isActive('/gallery') ? 'text-burgundy font-semibold' : 'text-foreground hover:text-burgundy'}`}
            >
              Gallery
            </Link>
            <Link 
              to="/reservations" 
              className={`transition-smooth ${isActive('/reservations') ? 'text-burgundy font-semibold' : 'text-foreground hover:text-burgundy'}`}
            >
              Reservations
            </Link>
          </nav>

          <Link to="/reservations">
            <Button variant="reserve" className="hidden md:inline-flex">
              Reserve Table
            </Button>
          </Link>

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