import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const faqs = [
  {
    question: "How often should I service my air conditioner?",
    answer: "We recommend servicing your air conditioner at least once a year, ideally before summer. Regular maintenance ensures optimal efficiency, extends the lifespan of your unit, and can prevent costly breakdowns during peak usage periods.",
  },
  {
    question: "What size air conditioner do I need for my home?",
    answer: "The right size depends on factors like room dimensions, ceiling height, insulation, and sun exposure. A unit too small won't cool effectively, while one too large will cycle on and off frequently. We provide free assessments to recommend the perfect size for your space.",
  },
  {
    question: "How long does a typical installation take?",
    answer: "A standard split system installation usually takes 4-6 hours. Ducted systems may require 1-2 days depending on the complexity. We'll provide a clear timeline during your quote and always aim to minimise disruption to your day.",
  },
  {
    question: "What brands do you install and repair?",
    answer: "We're authorised installers and repairers for all major brands including Daikin, Mitsubishi Electric, Fujitsu, Samsung, LG, Panasonic, and more. Whatever brand you prefer or already have, we can help.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Absolutely. All our installations come with a workmanship warranty in addition to the manufacturer's warranty on the equipment. We stand behind our work and are always here if any issues arise.",
  },
  {
    question: "What areas do you service?",
    answer: "We proudly service Newcastle and the entire Hunter Region, including Maitland, Cessnock, Lake Macquarie, Port Stephens, and surrounding areas. Contact us to confirm we cover your location.",
  },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      id="faq" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 bg-muted"
    >
      <div className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
            FAQ
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground leading-tight mb-4">
            Common <span className="text-accent">questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our air conditioning services. Can't find what you're looking for? Give us a call.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-accent/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-accent py-6 text-base sm:text-lg [&[data-state=open]>svg]:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="tel:0447881898"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            Call us on 0447 881 898
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
