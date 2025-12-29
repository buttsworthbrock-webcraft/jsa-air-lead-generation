import { CheckCircle2, Users, Award, MapPin } from "lucide-react";

const features = [
  "Family owned & operated",
  "Fully licensed & insured",
  "All major brands serviced",
  "Competitive pricing",
  "Same-week availability",
  "Workmanship warranty",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              About JSA
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Local Climate
              <span className="text-accent"> Experts</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              JSA Airconditioning &amp; Refrigeration is a family-owned business proudly serving 
              the Newcastle region and beyond. With extensive industry experience, Jarrod and 
              Kasey are committed to providing modern, reliable climate solutions for homes 
              and workplaces.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We believe in honest advice, quality workmanship, and building lasting 
              relationships with our customers. When you choose JSA, you're choosing 
              a local team that genuinely cares about your comfort.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <p className="font-display text-4xl font-bold text-foreground mb-2">540+</p>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft text-center">
              <div className="w-14 h-14 rounded-xl bg-cta/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-cta" />
              </div>
              <p className="font-display text-4xl font-bold text-foreground mb-2">10+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="col-span-2 bg-primary rounded-2xl p-8 shadow-soft text-center">
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-primary-foreground" />
              </div>
              <p className="font-display text-2xl font-bold text-primary-foreground mb-2">
                Newcastle &amp; Hunter Region
              </p>
              <p className="text-primary-foreground/70">
                Proudly serving our local community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
