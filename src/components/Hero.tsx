import { Button } from "@/components/ui/button";
import { Phone, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-ac.jpg";
import logo from "@/assets/logo.svg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background Image - Right Side */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
        <img
          src={heroImage}
          alt="Professional air conditioning installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40 lg:bg-gradient-to-r lg:from-primary lg:via-primary/80 lg:to-transparent" />
      </div>

      {/* Logo - Positioned in blank space */}
      <div className="absolute top-8 left-6 lg:left-12 z-20 opacity-0 animate-fade-up">
        <img 
          src={logo} 
          alt="JSA Airconditioning & Refrigeration" 
          className="h-24 lg:h-32 w-auto brightness-0 invert"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col justify-center">
        <div className="max-w-2xl pt-40 pb-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-medium text-sm uppercase tracking-widest">
              Newcastle & Hunter Region
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-primary-foreground leading-[0.9] tracking-tight mb-8 opacity-0 animate-fade-up delay-100">
            Your home,
            <br />
            <span className="text-accent">perfectly</span>
            <br />
            cooled.
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-md mb-4 leading-relaxed opacity-0 animate-fade-up delay-200">
            Family-owned air conditioning specialists. Expert installations, 
            repairs, and maintenance you can trust.
          </p>
          <p className="text-primary-foreground/60 text-xs mb-10 opacity-0 animate-fade-up delay-200">Licence: 470120C</p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-16 opacity-0 animate-fade-up delay-300">
            <Button 
              variant="cta" 
              size="xl" 
              onClick={scrollToContact}
              className="text-base"
            >
              Get Free Quote
            </Button>
            <a
              href="tel:0447881898"
              aria-label="Call us at 0447 881 898"
              className="flex items-center gap-3 px-6 py-4 text-primary-foreground hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span className="font-semibold">0447 881 898</span>
            </a>
          </div>

          {/* Stats Row */}
          <div className="flex gap-12 opacity-0 animate-fade-up delay-400">
            <div>
              <p className="font-display text-4xl font-extrabold text-primary-foreground">540+</p>
              <p className="text-sm text-primary-foreground/70">Happy customers</p>
            </div>
            <div>
              <p className="font-display text-4xl font-extrabold text-primary-foreground">10+</p>
              <p className="text-sm text-primary-foreground/70">Years experience</p>
            </div>
            <div>
              <p className="font-display text-4xl font-extrabold text-accent">5.0</p>
              <p className="text-sm text-primary-foreground/70">Star rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToServices}
        aria-label="Scroll to services section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-2"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" aria-hidden="true" />
      </button>

      {/* Decorative Corner */}
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-accent/30" />
    </section>
  );
};

export default Hero;
