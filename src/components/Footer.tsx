import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center font-display font-bold text-sm">
                JSA
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Family-owned HVAC specialists serving Newcastle and the Hunter Region.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
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
                <a href="tel:0447881898" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  0447 881 898
                </a>
              </li>
              <li>
                <a href="mailto:info@jsaairconditioning.com.au" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-primary-foreground/60">
                  <MapPin className="w-4 h-4" />
                  Newcastle & Hunter
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/40">
          <p>© {currentYear} JSA Airconditioning & Refrigeration</p>
          <p>Licensed & Insured</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
