import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import dmLogo from "@/assets/dm-logo.png";

const HeroSection = () => {
  const services = [
    { name: "Content Creation", icon: "✨", delay: "0s" },
    { name: "Lead Generation", icon: "🎯", delay: "0.2s" },
    { name: "Sales Funnels", icon: "🚀", delay: "0.4s" },
    { name: "Paid Advertising", icon: "📈", delay: "0.6s" }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-background">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"></div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8 py-20">
        {/* Top tagline */}
        <div className="mb-8 text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm tracking-wide">
            SERVICE FOUNDERS & INFO ENTREPRENEURS
          </span>
        </div>

        {/* Main headline */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            We Will Build A{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Paid & Organic
            </span>{" "}
            Content System That{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Attracts Leads
            </span>{" "}
            &{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Closes Deals
            </span>
          </h1>
          
          <div className="text-xl text-muted-foreground font-medium tracking-wide">
            (Done-For-You)
          </div>
        </div>

        {/* Floating service cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-glow"
              style={{ animationDelay: service.delay }}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <div className="text-sm font-medium text-foreground/80">
                {service.name}
              </div>
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          Get more qualified meetings without relying on cold emails or referrals and add 7-figures 
          without spending hours creating videos, funnels, or automations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Button 
            variant="hero" 
            size="hero" 
            className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 font-semibold shadow-glow"
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
          
          <Button 
            variant="outline" 
            size="hero"
            className="group border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary rounded-full px-8 py-4"
          >
            Learn More
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Trust indicator */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by 500+ service founders
          </p>
          <div className="flex items-center justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;