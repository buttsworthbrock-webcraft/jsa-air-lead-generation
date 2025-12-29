import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Check } from "lucide-react";
import heroImage from "@/assets/hero-ac.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 min-h-screen items-center gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="pt-32 pb-12 lg:py-32 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-background rounded-full px-4 py-2 shadow-sm mb-8 opacity-0 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm font-medium text-foreground">Newcastle's Trusted HVAC Experts</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-[0.95] mb-6 opacity-0 animate-fade-up delay-100">
              Perfect
              <br />
              Climate,
              <br />
              <span className="text-accent">Every Room.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed opacity-0 animate-fade-up delay-200">
              Family-owned specialists delivering premium air conditioning and 
              refrigeration solutions across Newcastle and the Hunter Region.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12 opacity-0 animate-fade-up delay-300">
              <Button variant="hero" size="xl" onClick={scrollToContact}>
                Request Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl" onClick={() => window.location.href = "tel:0447881898"}>
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 opacity-0 animate-fade-up delay-400">
              {["540+ Happy Customers", "Same Week Service", "All Major Brands"].map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2 pt-24 lg:pt-0">
            <div className="relative opacity-0 animate-scale-in delay-200">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={heroImage}
                  alt="Professional air conditioning installation"
                  className="w-full aspect-[4/5] lg:aspect-[3/4] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-5 shadow-lg opacity-0 animate-slide-in delay-500">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <span className="text-2xl font-display font-bold text-accent">10+</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Years Experience</p>
                    <p className="text-sm text-muted-foreground">Trusted local experts</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-4 border-accent/20" />
              <div className="absolute top-1/2 -right-8 w-16 h-16 rounded-full bg-cta/10 animate-float" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />
    </section>
  );
};

export default Hero;
