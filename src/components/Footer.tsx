import { Facebook, Twitter, Instagram, Youtube, Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = "1234567890";
    const message = encodeURIComponent("Hi, I'm interested in FitPro Gym membership. Can you provide more information?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <footer className="bg-secondary border-t border-border/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">FP</span>
              </div>
              <span className="text-xl font-bold text-primary-foreground">FitPro Gym</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Your partner in achieving fitness excellence. Transform your body, transform your life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("transformations")}
                  className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Transformations
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone size={16} className="text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <span>123 Fitness Street, Gym District, City 12345</span>
              </li>
              <li>
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  <MessageCircle size={16} className="text-primary" />
                  WhatsApp Us
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary-foreground">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center text-primary-foreground/70"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center text-primary-foreground/70"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center text-primary-foreground/70"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center text-primary-foreground/70"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} FitPro Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
