import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-2xl bg-accent/20 rotate-6" />
                <div className="absolute inset-0 rounded-2xl bg-primary-foreground/10 flex items-center justify-center font-display font-bold">
                  JSA
                </div>
              </div>
              <div>
                <p className="font-display font-semibold">Airconditioning</p>
                <p className="text-sm text-primary-foreground/50">& Refrigeration</p>
              </div>
            </div>
            <p className="text-primary-foreground/60 leading-relaxed max-w-sm">
              Family-owned business proudly serving Newcastle and the Hunter Region 
              with quality climate control solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-display font-semibold mb-5">Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold mb-5">Services</h4>
            <ul className="space-y-3 text-primary-foreground/60">
              <li>Split System Installation</li>
              <li>Ducted Air Systems</li>
              <li>Service & Repairs</li>
              <li>Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:0447881898" className="flex items-center gap-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  0447 881 898
                </a>
              </li>
              <li>
                <a href="mailto:info@jsaairconditioning.com.au" className="flex items-center gap-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-primary-foreground/60">
                  <MapPin className="w-4 h-4" />
                  Newcastle & Hunter
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/40">
          <p>© {currentYear} JSA Airconditioning & Refrigeration</p>
          <p>Fully Licensed & Insured</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
