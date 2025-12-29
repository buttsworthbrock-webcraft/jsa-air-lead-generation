import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Charlestown",
    rating: 5,
    text: "Jarrod was fantastic from start to finish. He explained everything clearly, arrived on time, and the installation was spotless. Our new split system works perfectly. Highly recommend!",
    service: "Split System Installation",
  },
  {
    name: "David K.",
    location: "Maitland",
    rating: 5,
    text: "Called JSA for an urgent repair on a 40-degree day. They came out same day and had us cool again within hours. Professional, honest pricing, and genuinely friendly service.",
    service: "Emergency Repair",
  },
  {
    name: "Michelle T.",
    location: "Newcastle",
    rating: 5,
    text: "We had a whole-home ducted system installed. The team was incredibly tidy and respectful of our home. The zoning works brilliantly - exactly what we needed for our family.",
    service: "Ducted AC Installation",
  },
  {
    name: "Greg P.",
    location: "Lake Macquarie",
    rating: 5,
    text: "Been using JSA for all our rental properties. Always reliable, fair pricing, and they communicate well with tenants. Makes my job as a landlord so much easier.",
    service: "Ongoing Maintenance",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            What Our
            <br />
            <span className="text-muted-foreground">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it — hear from homeowners and businesses 
            across Newcastle and the Hunter Region.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative bg-card rounded-3xl p-8 sm:p-10 shadow-sm border border-border/50 hover:shadow-lg hover:border-accent/20 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-accent" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-cta text-cta"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-lg leading-relaxed mb-8">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center font-display font-bold text-accent">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <span className="hidden sm:block px-3 py-1.5 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 glass rounded-full px-8 py-4">
            <div className="flex -space-x-2">
              {["S", "D", "M", "G"].map((initial, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-accent/10 border-2 border-card flex items-center justify-center text-sm font-semibold text-accent"
                >
                  {initial}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cta text-cta" />
                ))}
                <span className="ml-2 font-semibold text-foreground">5.0</span>
              </div>
              <p className="text-sm text-muted-foreground">From 540+ happy customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
