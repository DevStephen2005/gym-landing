import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BMICalculator from "@/components/BMICalculator";
import TransformationGallery from "@/components/TransformationGallery";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
      <Hero />
      <Services />
      <BMICalculator />
      <TransformationGallery />
      <Pricing />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
