import { ArrowRight } from "lucide-react";
import serviceSplit from "@/assets/service-split.jpg";
import serviceDucted from "@/assets/service-ducted.jpg";
import serviceRepair from "@/assets/service-repair.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    image: serviceSplit,
    title: "Split Systems",
    description: "Wall-mounted units for precise room-by-room climate control with whisper-quiet operation.",
    color: "accent",
  },
  {
    image: serviceDucted,
    title: "Ducted AC",
    description: "Whole-home solutions with discrete vents and intelligent zone management.",
    color: "cta",
  },
  {
    image: serviceRepair,
    title: "Repairs",
    description: "Fast, reliable diagnostics and repairs for all major brands. Same-day service available.",
    color: "accent",
  },
  {
    image: serviceMaintenance,
    title: "Maintenance",
    description: "Preventative care programs to maximize efficiency and extend system life.",
    color: "cta",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      id="services" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 bg-background"
    >
      <div className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Our Services
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground leading-tight">
              Everything you need for
              <span className="text-accent"> perfect comfort</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md lg:text-right">
            From new installations to ongoing maintenance, we provide complete climate solutions for homes and businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const badgeColor = service.color === "accent" 
              ? "bg-accent text-accent-foreground" 
              : "bg-cta text-cta-foreground";
            
            return (
              <div
                key={service.title}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 ${badgeColor} px-3 py-1 rounded-full text-xs font-semibold`}>
                    {service.title}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-300">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
