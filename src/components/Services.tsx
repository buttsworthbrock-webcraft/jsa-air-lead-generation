import { Wind, Thermometer, Wrench, Sparkles } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Split System Installation",
    description: "Premium wall-mounted split systems for efficient heating and cooling. Perfect for individual rooms or open-plan living.",
  },
  {
    icon: Thermometer,
    title: "Ducted Air Systems",
    description: "Whole-home climate control with discreet ducted systems. Consistent temperature throughout every room.",
  },
  {
    icon: Wrench,
    title: "Service & Repairs",
    description: "Expert maintenance and repairs to keep your system running at peak efficiency. All major brands serviced.",
  },
  {
    icon: Sparkles,
    title: "Cleaning & Maintenance",
    description: "Professional deep cleaning and preventative maintenance to extend system life and improve air quality.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-frost">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Complete Climate Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From installation to ongoing maintenance, we handle all your heating, cooling, and refrigeration needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
