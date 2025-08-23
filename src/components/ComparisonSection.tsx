import { Button } from "@/components/ui/button";
import { X, Check } from "lucide-react";

const ComparisonSection = () => {
  const oldWayItems = [
    "Hiring separate agencies for content, ads, and funnels",
    "Creating random content that doesn't convert to leads", 
    "Spending thousands on ads without proper tracking or ROI",
    "Managing multiple platforms and technologies yourself"
  ];

  const dominateMediaItems = [
    "One integrated team handling your entire lead generation system",
    "Strategic content designed specifically to attract your ideal clients",
    "Performance-based campaigns with clear metrics and guaranteed results", 
    "All-in-one solution that integrates seamlessly with your sales process"
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Use Content to <span className="text-primary">Sell to Your Target Customers</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Old Way */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-8 text-center">OLD WAY</h3>
            <div className="space-y-6">
              {oldWayItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <X className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dominate Media Way */}
          <div className="bg-gradient-accent rounded-2xl p-8 shadow-glow">
            <h3 className="text-2xl font-bold mb-8 text-center text-primary-foreground">
              DOMINATE MEDIA
            </h3>
            <div className="space-y-6">
              {dominateMediaItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-primary-foreground mt-1 flex-shrink-0" />
                  <p className="text-primary-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="hero">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;