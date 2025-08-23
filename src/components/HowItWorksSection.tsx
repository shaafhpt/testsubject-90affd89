import howItWorksMockup from "@/assets/how-it-works-mockup.png";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "CREATE",
      description: "We help you create high-converting content in just 3 hours per week. Our expert team handles the scripting, ideation, and production guidance so you focus only on recording, not the technical details."
    },
    {
      number: "02", 
      title: "DISTRIBUTE",
      description: "We edit and distribute your content across YouTube and other platforms, while building high-converting funnels and implementing paid ad strategies that generate consistent leads."
    },
    {
      number: "03",
      title: "MONETIZE", 
      description: "We build your complete lead generation machine, optimizing your offer, structuring your sales process, and implementing automations that convert leads into high-value clients on autopilot."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">How It Works</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="text-primary text-2xl font-bold min-w-[60px]">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <img 
              src={howItWorksMockup} 
              alt="How It Works Dashboard" 
              className="w-full rounded-2xl shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;