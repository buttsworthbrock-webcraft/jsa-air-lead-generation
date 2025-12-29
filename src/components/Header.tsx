import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-medium py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-lg transition-colors duration-300 ${
            isScrolled ? "bg-primary text-primary-foreground" : "bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground"
          }`}>
            JSA
          </div>
          <div className={`hidden sm:block transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
            <p className="font-display font-semibold text-sm leading-tight">Airconditioning</p>
            <p className="text-xs opacity-70">&amp; Refrigeration</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center gap-8 transition-colors duration-300 ${
          isScrolled ? "text-foreground" : "text-primary-foreground"
        }`}>
          {["Home", "Services", "About", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="font-medium hover:text-accent transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant={isScrolled ? "outline" : "heroOutline"}
            size="default"
            onClick={() => window.location.href = "tel:0447881898"}
          >
            <Phone className="w-4 h-4" />
            0447 881 898
          </Button>
          <Button
            variant={isScrolled ? "cta" : "hero"}
            size="default"
            onClick={() => scrollToSection("contact")}
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card shadow-strong border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium"
              >
                {item}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Button
                variant="outline"
                className="w-full justify-center"
                onClick={() => window.location.href = "tel:0447881898"}
              >
                <Phone className="w-4 h-4" />
                0447 881 898
              </Button>
              <Button
                variant="cta"
                className="w-full justify-center"
                onClick={() => scrollToSection("contact")}
              >
                Get a Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
