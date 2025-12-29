import { Wind, Thermometer, Wrench, Sparkles, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Split Systems",
    description: "Premium wall-mounted units for precise climate control in any room.",
    features: ["Energy efficient", "Quiet operation", "Smart controls"],
  },
  {
    icon: Thermometer,
    title: "Ducted AC",
    description: "Whole-home comfort with discreet, zoned temperature management.",
    features: ["Zone control", "Hidden design", "Central management"],
  },
  {
    icon: Wrench,
    title: "Repairs",
    description: "Expert diagnostics and repairs for all major brands and models.",
    features: ["Same-day service", "All brands", "Parts warranty"],
  },
  {
    icon: Sparkles,
    title: "Maintenance",
    description: "Preventative care to maximize efficiency and extend system life.",
    features: ["Deep cleaning", "Filter service", "Health check"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4 opacity-0 animate-fade-up">
            What We Do
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-up delay-100">
            Complete Climate
            <br />
            <span className="text-muted-foreground">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl opacity-0 animate-fade-up delay-200">
            From installation to ongoing care, we handle every aspect of your 
            heating, cooling, and refrigeration needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-accent/30 overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 rounded-full bg-muted text-sm font-medium text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
