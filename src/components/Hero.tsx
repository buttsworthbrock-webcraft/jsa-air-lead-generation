import { Button } from "@/components/ui/button";
import { Phone, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-ac.jpg";

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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col justify-center">
        <div className="max-w-2xl pt-32 pb-20">
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
          <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-md mb-10 leading-relaxed opacity-0 animate-fade-up delay-200">
            Family-owned air conditioning specialists. Expert installations, 
            repairs, and maintenance you can trust.
          </p>

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
              className="flex items-center gap-3 px-6 py-4 text-primary-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">0447 881 898</span>
            </a>
          </div>

          {/* Stats Row */}
          <div className="flex gap-12 opacity-0 animate-fade-up delay-400">
            <div>
              <p className="font-display text-4xl font-extrabold text-primary-foreground">540+</p>
              <p className="text-sm text-primary-foreground/50">Happy customers</p>
            </div>
            <div>
              <p className="font-display text-4xl font-extrabold text-primary-foreground">10+</p>
              <p className="text-sm text-primary-foreground/50">Years experience</p>
            </div>
            <div>
              <p className="font-display text-4xl font-extrabold text-accent">5.0</p>
              <p className="text-sm text-primary-foreground/50">Star rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground transition-colors group"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>

      {/* Decorative Corner */}
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-accent/30" />
    </section>
  );
};

export default Hero;
