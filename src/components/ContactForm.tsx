import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    urgency: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Quote Request Received!",
      description: "Jarrod will be in touch with you shortly.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      urgency: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-frost">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Change the
              <span className="text-accent"> Temperature</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Ready for a quote, repair, or service? Contact Jarrod &amp; Kasey today 
              to discuss your heating, cooling, and refrigeration needs.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:0447881898"
                className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-soft hover:shadow-medium transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-cta/10 flex items-center justify-center group-hover:bg-cta transition-colors">
                  <Phone className="w-5 h-5 text-cta group-hover:text-cta-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us now</p>
                  <p className="font-semibold text-foreground text-lg">0447 881 898</p>
                </div>
              </a>

              <a
                href="mailto:info@jsaairconditioning.com.au"
                className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-soft hover:shadow-medium transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <p className="font-semibold text-foreground">info@jsaairconditioning.com.au</p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Service Area</p>
                  <p className="font-semibold text-foreground">Newcastle &amp; Hunter Region</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Working Hours</p>
                  <p className="font-semibold text-foreground">Mon - Sat: 7am - 5pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl p-8 shadow-medium">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Request a Free Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-lg border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select Service *</option>
                  <option value="split">Split System Installation</option>
                  <option value="ducted">Ducted Air System</option>
                  <option value="service">Service &amp; Repair</option>
                  <option value="maintenance">Cleaning &amp; Maintenance</option>
                  <option value="other">Other</option>
                </select>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-lg border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Timeframe *</option>
                  <option value="week">This Week</option>
                  <option value="2weeks">In a Couple of Weeks</option>
                  <option value="month">This Month</option>
                  <option value="months">In a Couple of Months</option>
                </select>
              </div>
              <Textarea
                name="message"
                placeholder="Tell us about your project (optional)"
                value={formData.message}
                onChange={handleChange}
                rows={4}
              />
              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Request Quote"}
                <Send className="w-4 h-4" />
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                We typically respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
