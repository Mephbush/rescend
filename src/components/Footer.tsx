const Footer = () => {
  return (
    <footer className="bg-burgundy text-cream py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Bella Vista</h3>
            <p className="text-cream/80 leading-relaxed">
              Fine dining excellence since 2010. Creating memorable culinary 
              experiences with passion and dedication.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-cream/80">
              <li><a href="#home" className="hover:text-amber transition-smooth">Home</a></li>
              <li><a href="#about" className="hover:text-amber transition-smooth">About</a></li>
              <li><a href="#menu" className="hover:text-amber transition-smooth">Menu</a></li>
              <li><a href="#contact" className="hover:text-amber transition-smooth">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-cream/80 hover:text-amber transition-smooth">
                Facebook
              </a>
              <a href="#" className="text-cream/80 hover:text-amber transition-smooth">
                Instagram
              </a>
              <a href="#" className="text-cream/80 hover:text-amber transition-smooth">
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream/20 mt-8 pt-8 text-center">
          <p className="text-cream/60">
            © 2024 Bella Vista Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;