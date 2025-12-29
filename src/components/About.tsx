import { CheckCircle2, Users, Award, MapPin, Zap } from "lucide-react";

const features = [
  "Family owned & operated",
  "Fully licensed & insured",
  "All major brands",
  "Competitive pricing",
  "Same-week availability",
  "Workmanship warranty",
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="lg:col-span-6">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              About Us
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Local Experts,
              <br />
              <span className="text-muted-foreground">Real Results</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              JSA Airconditioning & Refrigeration is a family-owned business proudly serving 
              Newcastle and the Hunter Region. With Jarrod and Kasey at the helm, we bring 
              genuine care and expertise to every installation and service call.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We believe in honest advice, quality workmanship, and building lasting 
              relationships. When you choose JSA, you're choosing neighbors who genuinely 
              care about your comfort.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-lg hover:border-accent/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <p className="font-display text-4xl font-bold text-foreground mb-1">540+</p>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>

              <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-lg hover:border-accent/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-cta/10 flex items-center justify-center mb-5">
                  <Award className="w-6 h-6 text-cta" />
                </div>
                <p className="font-display text-4xl font-bold text-foreground mb-1">10+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>

              <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-lg hover:border-accent/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <p className="font-display text-4xl font-bold text-foreground mb-1">Same</p>
                <p className="text-muted-foreground">Week Service</p>
              </div>

              <div className="bg-primary rounded-3xl p-8 shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-5">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="font-display text-xl font-bold text-primary-foreground mb-1">
                  Newcastle & Hunter
                </p>
                <p className="text-primary-foreground/60">Service Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
