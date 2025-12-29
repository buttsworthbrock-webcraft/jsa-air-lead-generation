import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
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
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Get Started
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground leading-tight mb-6">
              Let's discuss
              <span className="text-muted-foreground"> your project</span>
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Ready for a quote, repair, or just some honest advice? 
              We'd love to hear from you.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="tel:0447881898"
                className="group flex items-center gap-4 p-4 rounded-xl bg-background hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cta/10 flex items-center justify-center group-hover:bg-cta transition-colors">
                  <Phone className="w-5 h-5 text-cta group-hover:text-cta-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Call us</p>
                  <p className="font-semibold text-foreground">0447 881 898</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="mailto:info@jsaairconditioning.com.au"
                className="group flex items-center gap-4 p-4 rounded-xl bg-background hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground text-sm">info@jsaairconditioning.com.au</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-background">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Service Area</p>
                  <p className="font-semibold text-foreground">Newcastle & Hunter Region</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-background rounded-2xl p-8 sm:p-10 shadow-sm">
              <h3 className="font-display text-xl font-bold text-foreground mb-1">Request a Quote</h3>
              <p className="text-sm text-muted-foreground mb-8">Free, no-obligation estimate</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-xl"
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-xl"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">What do you need?</option>
                  <option value="split">Split System Installation</option>
                  <option value="ducted">Ducted AC Installation</option>
                  <option value="repair">Repair / Service</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="other">Other</option>
                </select>
                <Textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="rounded-xl resize-none"
                />
                <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Request"}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
