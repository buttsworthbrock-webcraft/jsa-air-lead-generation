import { forwardRef } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="bg-primary text-primary-foreground py-16" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img 
                src={logo} 
                alt="JSA Airconditioning & Refrigeration" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Family-owned HVAC specialists serving Newcastle and the Hunter Region.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/jsaairconditioning"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/jsaairconditioning"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", id: "home" },
                { name: "Services", id: "services" },
                { name: "Service Areas", id: "service-areas" },
                { name: "Testimonials", id: "testimonials" },
                { name: "FAQ", id: "faq" },
                { name: "About", id: "about" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Split Systems</li>
              <li>Ducted AC</li>
              <li>Repairs</li>
              <li>Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:0447881898" aria-label="Call us at 0447 881 898" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  0447 881 898
                </a>
              </li>
              <li>
                <a href="mailto:info@jsaairconditioning.com.au" aria-label="Email us at info@jsaairconditioning.com.au" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  Email Us
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-primary-foreground/70">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  Newcastle & Hunter
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/40">
          <p>© {currentYear} JSA Airconditioning & Refrigeration</p>
          <p>Licence: 470120C • Licensed & Insured</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
