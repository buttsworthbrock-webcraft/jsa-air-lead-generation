import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center">
            <Logo 
              className={`h-12 w-auto transition-colors duration-500 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            />
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2" aria-label="Main navigation">
            {[
              { name: "Home", id: "home" },
              { name: "Services", id: "services" },
              { name: "About", id: "about" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg ${
                  isScrolled 
                    ? "text-muted-foreground hover:text-foreground" 
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0447881898"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-accent" 
                  : "text-primary-foreground hover:text-accent"
              }`}
            >
              <Phone className="w-4 h-4" />
              0447 881 898
            </a>
            <Button variant="cta" size="default" onClick={() => scrollToSection("contact")}>
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <button
            className={`lg:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg transition-colors ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-lg">
          <div className="container mx-auto px-6 py-6">
            <nav className="flex flex-col gap-2 mb-6">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left py-3 px-4 rounded-lg hover:bg-muted text-foreground font-medium"
                >
                  {item}
                </button>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <Button variant="outline" onClick={() => window.location.href = "tel:0447881898"}>
                <Phone className="w-4 h-4" />
                0447 881 898
              </Button>
              <Button variant="cta" onClick={() => scrollToSection("contact")}>
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
