import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

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
          ? "py-3"
          : "py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled 
            ? "glass rounded-full px-6 py-2 shadow-lg" 
            : ""
        }`}>
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className={`relative transition-all duration-300 ${isScrolled ? "w-10 h-10" : "w-12 h-12"}`}>
              <div className={`absolute inset-0 rounded-2xl rotate-6 transition-all duration-300 ${
                isScrolled ? "bg-accent/20" : "bg-primary-foreground/10"
              }`} />
              <div className={`absolute inset-0 rounded-2xl flex items-center justify-center font-display font-bold transition-all duration-300 ${
                isScrolled 
                  ? "bg-primary text-primary-foreground text-sm" 
                  : "bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-base"
              }`}>
                JSA
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center gap-1 transition-colors duration-300`}>
            {[
              { name: "Home", id: "home" },
              { name: "Services", id: "services" },
              { name: "About", id: "about" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  isScrolled 
                    ? "text-foreground hover:bg-muted" 
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0447881898"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-medium transition-all duration-300 ${
                isScrolled 
                  ? "text-foreground hover:bg-muted" 
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">0447 881 898</span>
            </a>
            <Button
              variant={isScrolled ? "cta" : "hero"}
              size="default"
              onClick={() => scrollToSection("contact")}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2.5 rounded-full transition-all duration-300 ${
              isScrolled 
                ? "text-foreground hover:bg-muted" 
                : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
        isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}>
        <div className="container mx-auto px-4 pt-4">
          <div className="glass rounded-3xl p-6 shadow-xl">
            <nav className="flex flex-col gap-1 mb-6">
              {[
                { name: "Home", id: "home" },
                { name: "Services", id: "services" },
                { name: "About", id: "about" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-3 px-4 rounded-2xl hover:bg-muted transition-colors font-medium text-foreground"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
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
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
