import { Wind, Thermometer, Wrench, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Split Systems",
    description: "Wall-mounted units for precise room-by-room climate control with whisper-quiet operation.",
    color: "accent",
  },
  {
    icon: Thermometer,
    title: "Ducted AC",
    description: "Whole-home solutions with discrete vents and intelligent zone management.",
    color: "cta",
  },
  {
    icon: Wrench,
    title: "Repairs",
    description: "Fast, reliable diagnostics and repairs for all major brands. Same-day service available.",
    color: "accent",
  },
  {
    icon: Sparkles,
    title: "Maintenance",
    description: "Preventative care programs to maximize efficiency and extend system life.",
    color: "cta",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 bg-background">
      <div className="container mx-auto px-6">
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
          {services.map((service, index) => {
            const colorClasses = service.color === "accent" 
              ? "bg-accent/10 text-accent group-hover:bg-accent" 
              : "bg-cta/10 text-cta group-hover:bg-cta";
            
            return (
              <div
                key={service.title}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${colorClasses} flex items-center justify-center mb-6 transition-all duration-300 group-hover:text-white group-hover:scale-110`}>
                  <service.icon className="w-6 h-6" />
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
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
