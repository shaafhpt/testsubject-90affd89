import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import dmLogo from "@/assets/dm-logo.png";

const HeroSection = () => {
  const services = [
    { name: "YOUTUBE", position: "top-1/4 right-1/4" },
    { name: "INSTAGRAM", position: "top-1/4 left-1/4" },
    { name: "FUNNELS", position: "bottom-1/4 left-1/4" },
    { name: "TIKTOK", position: "bottom-1/4 right-1/4" }
  ];

  return (
    <section 
      className="min-h-screen relative flex items-center justify-center px-8 py-20"
      style={{
        background: `
          var(--dot-pattern),
          var(--gradient-hero)
        `,
        backgroundSize: '20px 20px, 100% 100%'
      }}
    >
      {/* Floating Service Labels */}
      {services.map((service, index) => (
        <div 
          key={index}
          className={`absolute ${service.position} hidden lg:flex items-center gap-2 text-foreground font-medium tracking-wider text-sm`}
        >
          <div className="w-0 h-0 border-l-4 border-l-primary border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
          <span>{service.name}</span>
        </div>
      ))}
      
      {/* Central Logo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-32 h-32 rounded-full flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
          <div className="absolute inset-2 rounded-full bg-primary/30"></div>
          <div className="absolute inset-4 rounded-full bg-primary/50 shadow-logo-glow"></div>
          <img src={dmLogo} alt="DM" className="w-16 h-16 relative z-10" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center mt-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          We Will Build A <span className="text-primary">Paid & Organic</span> Content System That{" "}
          <span className="text-primary">Attracts Leads</span> &{" "}
          <span className="text-primary">Closes Deals</span>{" "}
          <span className="text-muted-foreground">(Done-For-You)</span>
        </h1>
        
        <Button 
          variant="hero" 
          size="hero" 
          className="group bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
        >
          Learn More
          <Play className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;