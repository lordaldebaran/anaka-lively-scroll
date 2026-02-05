import HeroSection from "@/components/HeroSection";
import ContextSection from "@/components/ContextSection";
import DetailsSection from "@/components/DetailsSection";
import MenuSection from "@/components/MenuSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ContextSection />
      <DetailsSection />
      <MenuSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
