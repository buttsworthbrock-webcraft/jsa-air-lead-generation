import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-ac.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional air conditioning installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-cta text-cta" />
              ))}
            </div>
            <span className="text-primary-foreground/90 text-sm font-medium">
              540+ Happy Customers
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-in-up delay-100">
            Quality Climate
            <span className="block text-accent">Solutions</span>
            for Newcastle
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed animate-fade-in-up delay-200">
            Family-owned air conditioning and refrigeration specialists. 
            Modern, reliable systems installed by trusted local experts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-300">
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Request Free Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => window.location.href = "tel:0447881898"}
            >
              <Phone className="w-5 h-5" />
              Call Jarrod Now
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-md animate-fade-in-up delay-400">
            {[
              { value: "540+", label: "Customers" },
              { value: "10+", label: "Years Exp." },
              { value: "100%", label: "Licensed" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-display font-bold text-primary-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-primary-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
