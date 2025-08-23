import { Button } from "@/components/ui/button";
import dmLogo from "@/assets/dm-logo.png";

const Navigation = () => {
  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between relative z-50">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-3">
          <img src={dmLogo} alt="Dominate Media" className="w-10 h-10" />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            How It Works
          </a>
          <a href="#case-studies" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            Case Studies
          </a>
          <a href="#why-us" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            Why Us?
          </a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            Testimonials
          </a>
          <a href="#faq" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            FAQ
          </a>
          <a href="#career" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
            Career
          </a>
        </div>
      </div>
      
      <Button variant="outline" size="default" className="bg-transparent border-foreground text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary">
        Learn More
      </Button>
    </nav>
  );
};

export default Navigation;