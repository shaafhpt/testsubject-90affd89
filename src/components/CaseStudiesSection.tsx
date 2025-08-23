import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      name: "Louis Garoz",
      result: "Generated $750,000 in Just Six Weeks",
      description: "Louis, an investment banker, had a low-ticket mentorship offer. We helped him reposition into a high-ticket program and scaled his personal brand, generating $750,000 in six weeks.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Ali Moayed", 
      result: "Gained 107k followers in 8 months",
      subtitle: "(unknown → authority in nutrition)",
      description: "Transformed Ali from unknown to nutrition authority with strategic content and personal branding.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Merek van Bylandt",
      result: "28k followers & $119.7k/mo in 6 mos", 
      subtitle: "(From broke influencer to industry-leader)",
      description: "Helped Merek transition from struggling influencer to industry leader with consistent high revenue.",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section id="case-studies" className="py-20 px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase mb-4">
            Case Studies
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Real Results, <span className="text-primary">Real Money</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-background rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="mb-6">
                <img 
                  src={study.image} 
                  alt={study.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-center mb-2">{study.name}</h3>
              </div>
              
              <h4 className="text-2xl font-bold text-primary mb-2 text-center">
                {study.result}
              </h4>
              
              {study.subtitle && (
                <p className="text-muted-foreground text-center mb-4 italic">
                  {study.subtitle}
                </p>
              )}
              
              <p className="text-muted-foreground mb-6 text-center">
                {study.description}
              </p>
              
              <div className="text-center">
                <Button variant="outline" size="sm" className="group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  See Results
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;