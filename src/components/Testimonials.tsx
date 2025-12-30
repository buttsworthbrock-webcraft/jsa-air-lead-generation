import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Charlestown",
    rating: 5,
    text: "Jarrod was fantastic from start to finish. He explained everything clearly, arrived on time, and the installation was spotless. Our new split system works perfectly.",
    service: "Split System",
  },
  {
    name: "David Kim",
    location: "Maitland",
    rating: 5,
    text: "Called JSA for an urgent repair on a 40-degree day. They came out same day and had us cool again within hours. Professional, honest pricing, and genuinely friendly.",
    service: "Emergency Repair",
  },
  {
    name: "Michelle Torres",
    location: "Newcastle",
    rating: 5,
    text: "We had a whole-home ducted system installed. The team was incredibly tidy and respectful of our home. The zoning works brilliantly for our family.",
    service: "Ducted AC",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      id="testimonials"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 bg-secondary"
    >
      <div className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
            Testimonials
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground leading-tight mb-4">
            Trusted by 540+
            <span className="text-accent"> local customers</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cta text-cta" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center font-bold text-accent text-sm">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location} · {testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-3 bg-background rounded-full px-6 py-3 shadow-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-cta text-cta" />
              ))}
            </div>
            <span className="font-semibold text-foreground">5.0</span>
            <span className="text-muted-foreground text-sm">from 540+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
