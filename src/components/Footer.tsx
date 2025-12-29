import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center font-display font-bold text-lg">
                JSA
              </div>
              <div>
                <p className="font-display font-semibold">Airconditioning</p>
                <p className="text-sm opacity-70">&amp; Refrigeration</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Family-owned business proudly serving the Newcastle and Hunter region 
              with quality air conditioning and refrigeration services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Split System Installation</li>
              <li>Ducted Air Systems</li>
              <li>Service &amp; Repairs</li>
              <li>Cleaning &amp; Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:0447881898" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  0447 881 898
                </a>
              </li>
              <li>
                <a href="mailto:info@jsaairconditioning.com.au" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  info@jsaairconditioning.com.au
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-primary-foreground/70">
                  <MapPin className="w-4 h-4" />
                  Newcastle &amp; Hunter Region
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>&copy; {currentYear} JSA Airconditioning &amp; Refrigeration. All rights reserved.</p>
          <p>Licence: [Your Licence Number]</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
