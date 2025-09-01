const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-burgundy mb-8">
            Our Story
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="text-left space-y-6">
              <p className="text-lg text-warm-gray leading-relaxed">
                Founded in 2010, Bella Vista has been a cornerstone of fine dining, 
                offering an unparalleled culinary experience that celebrates both 
                tradition and innovation.
              </p>
              <p className="text-lg text-warm-gray leading-relaxed">
                Our passionate chefs source the finest ingredients from local farms 
                and trusted suppliers, creating dishes that honor seasonal flavors 
                while pushing the boundaries of culinary artistry.
              </p>
              <p className="text-lg text-warm-gray leading-relaxed">
                Every meal at Bella Vista is crafted to be a memorable journey, 
                where exceptional service meets extraordinary cuisine in an 
                atmosphere of refined elegance.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-8 shadow-soft">
              <h3 className="text-2xl font-serif font-semibold text-burgundy mb-4">
                Our Philosophy
              </h3>
              <ul className="space-y-3 text-warm-gray">
                <li className="flex items-start">
                  <span className="text-amber mr-3 mt-1">•</span>
                  Fresh, locally-sourced ingredients
                </li>
                <li className="flex items-start">
                  <span className="text-amber mr-3 mt-1">•</span>
                  Innovative culinary techniques
                </li>
                <li className="flex items-start">
                  <span className="text-amber mr-3 mt-1">•</span>
                  Exceptional service standards
                </li>
                <li className="flex items-start">
                  <span className="text-amber mr-3 mt-1">•</span>
                  Warm, welcoming atmosphere
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;