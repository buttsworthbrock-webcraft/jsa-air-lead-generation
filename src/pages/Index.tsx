import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-[100]">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <Services />
        <Brands />
        <Testimonials />
        <About />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
