import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-8 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            SERVICE FOUNDERS & INFO ENTREPRENEURS!
          </p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            We Will Build A <span className="text-primary">Paid & Organic</span> Content System That{" "}
            <span className="text-primary">Attracts Leads</span> &{" "}
            <span className="text-primary">Closes Deals</span>{" "}
            <span className="text-muted-foreground">(Done-For-You)</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Get more qualified meetings without relying on cold emails or referrals and add 7-figures 
            without spending hours creating videos, funnels, or automations.
          </p>
        </div>
        
        <Button variant="hero" size="hero" className="group">
          <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;