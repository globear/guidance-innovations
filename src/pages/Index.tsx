import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FounderSection from "@/components/FounderSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
      
      <Header />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <WhyChooseUsSection />
        <FounderSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
