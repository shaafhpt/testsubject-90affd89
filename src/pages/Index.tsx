import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SocialProofSection from "@/components/SocialProofSection";
import ComparisonSection from "@/components/ComparisonSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <SocialProofSection />
      <ComparisonSection />
      <CaseStudiesSection />
    </div>
  );
};

export default Index;