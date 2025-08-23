const SocialProofSection = () => {
  // Placeholder logos - in a real implementation, these would be actual publication logos
  const publications = [
    "Forbes", "Entrepreneur", "Inc.", "Fast Company", "TechCrunch", 
    "Business Insider", "Harvard Business Review", "Wired", "Bloomberg", 
    "Wall Street Journal", "Fortune"
  ];

  return (
    <section className="py-20 px-8 bg-card">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          <span className="text-primary">Recognized By Over 11 Publications</span> As the #1 Leading<br />
          Firm In B2B Lead Generation
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
          {publications.map((publication, index) => (
            <div key={index} className="bg-muted rounded-lg p-4 h-16 flex items-center justify-center">
              <span className="text-muted-foreground font-semibold text-sm">
                {publication}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;