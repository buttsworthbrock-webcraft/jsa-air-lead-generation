import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
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
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Quote Request Sent!",
      description: "Jarrod will be in touch within 24 hours.",
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
    <section id="contact" className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Let's Talk
              <br />
              <span className="text-muted-foreground">Climate</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md leading-relaxed">
              Ready for a quote, repair, or service? Get in touch and we'll 
              help find the perfect solution for your space.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:0447881898"
                className="group flex items-center gap-5 bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-lg hover:border-cta/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-cta/10 flex items-center justify-center group-hover:bg-cta group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-6 h-6 text-cta group-hover:text-cta-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Call us</p>
                  <p className="font-semibold text-foreground text-lg">0447 881 898</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>

              <a
                href="mailto:info@jsaairconditioning.com.au"
                className="group flex items-center gap-5 bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <p className="font-semibold text-foreground">info@jsaairconditioning.com.au</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 bg-card rounded-2xl p-6 shadow-sm border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Area</p>
                    <p className="font-semibold text-foreground">Newcastle & Hunter</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-card rounded-2xl p-6 shadow-sm border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Hours</p>
                    <p className="font-semibold text-foreground">Mon-Sat 7am-5pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-3xl p-8 sm:p-10 shadow-lg border border-border/50">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Request a Quote
            </h3>
            <p className="text-muted-foreground mb-8">Free, no-obligation estimate</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-12 rounded-xl border-border/50 focus:border-accent"
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-xl border-border/50 focus:border-accent"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-xl border-border/50 focus:border-accent"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-xl border border-border/50 bg-background px-4 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                >
                  <option value="">Service type</option>
                  <option value="split">Split System</option>
                  <option value="ducted">Ducted AC</option>
                  <option value="service">Repair</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="other">Other</option>
                </select>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-xl border border-border/50 bg-background px-4 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                >
                  <option value="">Timeframe</option>
                  <option value="week">This week</option>
                  <option value="2weeks">2 weeks</option>
                  <option value="month">This month</option>
                  <option value="months">Flexible</option>
                </select>
              </div>
              <Textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="rounded-xl border-border/50 focus:border-accent resize-none"
              />
              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Request"}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
