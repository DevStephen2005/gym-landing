import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute top-40 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px)`,
            animationDelay: "1s"
          }}
        />
        <div 
          className="absolute bottom-20 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ 
            transform: `translateY(${scrollY * 0.25}px)`,
            animationDelay: "2s"
          }}
        />

        {/* Floating Shapes */}
        <div 
          className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-primary/30 rounded-lg animate-float"
          style={{ transform: `translateY(${scrollY * 0.15}px) rotate(45deg)` }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-secondary/30 rounded-full animate-float-slow"
          style={{ 
            transform: `translateY(${scrollY * 0.1}px)`,
            animationDelay: "0.5s"
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg animate-float"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px) rotate(-15deg)`,
            animationDelay: "1.5s"
          }}
        />
        <div 
          className="absolute top-1/2 left-1/3 w-8 h-8 border-2 border-accent/40 rounded-full animate-float-slow"
          style={{ 
            transform: `translateY(${scrollY * 0.12}px)`,
            animationDelay: "2.5s"
          }}
        />
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: `translateY(${scrollY * 0.05}px)`
          }}
        />
      </div>

      {/* Content with Parallax Effect */}
      <div 
        className="container mx-auto max-w-6xl relative z-10"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      >
        <div className="text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Transform Your Business
              <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                With Expert Solutions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver cutting-edge services that drive growth, enhance efficiency, 
              and help your business thrive in the digital age.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="group shadow-lg hover:shadow-xl transition-all"
            >
              Get Started Today
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More
            </Button>
          </div>

          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
