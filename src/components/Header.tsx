import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Dumbbell } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
              <Dumbbell className="text-primary-foreground" size={24} />
            </div>
            <span className="text-xl font-bold text-primary-foreground">FitPro Gym</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-primary-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-primary-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-primary-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("transformations")}
              className="text-primary-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Transformations
            </button>
            <Button onClick={() => scrollToSection("contact")} size="sm" className="font-semibold">
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-left text-primary-foreground/80 hover:text-primary transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-primary-foreground/80 hover:text-primary transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-left text-primary-foreground/80 hover:text-primary transition-colors py-2"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("transformations")}
              className="text-left text-primary-foreground/80 hover:text-primary transition-colors py-2"
            >
              Transformations
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full">
              Contact
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
