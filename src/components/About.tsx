import { Check, MapPin, Clock, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  "Family owned & operated",
  "Fully licensed & insured",
  "All major brands serviced",
  "Competitive fixed pricing",
  "Same-week availability",
  "Workmanship warranty",
];

const stats = [
  { icon: MapPin, value: "Newcastle", label: "& Hunter Region" },
  { icon: Clock, value: "Same Week", label: "Service Available" },
  { icon: Shield, value: "Licensed", label: "& Fully Insured" },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      id="about" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 bg-background"
    >
      <div className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              About JSA
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground leading-tight mb-6">
              Local experts who
              <span className="text-accent"> actually care</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              JSA Airconditioning & Refrigeration is a family-owned business proudly serving 
              Newcastle and the Hunter Region. With Jarrod and Kasey at the helm, we bring 
              genuine care and decades of expertise to every job.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              We believe in honest advice, quality workmanship, and building lasting 
              relationships. When you choose JSA, you're choosing neighbors who genuinely 
              care about your comfort.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent-foreground" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4">
            {/* Big Stat */}
            <div className="bg-primary rounded-2xl p-10 text-center">
              <p className="font-display text-6xl font-extrabold text-primary-foreground mb-2">540+</p>
              <p className="text-primary-foreground/70">Happy customers across the region</p>
            </div>

            {/* Small Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.value} className="bg-muted rounded-2xl p-4 sm:p-6 text-center">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent mx-auto mb-2 sm:mb-3" />
                  <p className="font-display font-bold text-sm sm:text-base text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
