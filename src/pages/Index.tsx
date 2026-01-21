import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductShowcase from "@/components/ProductShowcase";
import FeedbackSection from "@/components/FeedbackSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <WelcomeSection />
        <FeaturesSection />
        <ProductShowcase />
        <FeedbackSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
