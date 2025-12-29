import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Snowflake } from "lucide-react";
import heroImage from "@/assets/hero-ac.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional air conditioning installation"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-hero opacity-90" />
      </div>

      {/* Animated Blobs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-cta/10 rounded-full blur-[80px] animate-float" />

      {/* Floating Elements */}
      <div className="absolute top-32 right-20 hidden xl:block animate-float delay-200">
        <div className="glass-dark rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
            <Snowflake className="w-5 h-5 text-accent" />
          </div>
          <div className="text-primary-foreground">
            <p className="text-xs opacity-60">Trusted by</p>
            <p className="font-semibold">540+ Customers</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 glass-dark rounded-full px-5 py-2.5 mb-8 opacity-0 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-primary-foreground/80 text-sm font-medium">
                Newcastle&apos;s Trusted HVAC Experts
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] mb-6 opacity-0 animate-fade-up delay-100">
              Climate
              <br />
              <span className="text-gradient">Comfort</span>
              <br />
              Delivered
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-primary-foreground/70 mb-10 max-w-lg leading-relaxed opacity-0 animate-fade-up delay-200">
              Family-owned specialists bringing modern, reliable air conditioning 
              and refrigeration solutions to homes and businesses across Newcastle.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 opacity-0 animate-fade-up delay-300">
              <Button variant="hero" size="xl" onClick={scrollToContact}>
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                onClick={() => window.location.href = "tel:0447881898"}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 sm:gap-12 opacity-0 animate-fade-up delay-400">
              {[
                { value: "540+", label: "Happy Clients" },
                { value: "10+", label: "Years Experience" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-primary-foreground/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/30 rounded-full blur-[100px] animate-pulse-glow" />
              <div className="relative w-80 h-80 animate-morph bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-primary-foreground/5 backdrop-blur-xl flex items-center justify-center">
                  <Snowflake className="w-24 h-24 text-primary-foreground/40 animate-float" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
