import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Globe, Users, Leaf, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <Link to="/#waitlist">
            <Button variant="default" size="sm">Join Waitlist</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="about-hero py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-6">
            About Transcontinental Investments
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Leading the future of precious metals trading and mineral investments across East Africa and beyond.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 pb-20">
        
        {/* Company Overview */}
        <section className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="text-primary" size={28} />
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground">Who We Are</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Transcontinental Investments is a premier precious metals trading and mineral investment company based in East Africa. We specialize in connecting miners, refiners, investors, corporations, and financial institutions through transparent and ethical mineral trade.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our expertise spans gold, silver, platinum, and other valuable minerals, creating reliable supply chains that benefit all stakeholders in the mineral sector ecosystem.
          </p>
        </section>

        {/* Mission */}
        <section className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-primary" size={28} />
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground">Our Mission</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            We invest in and actively grow the mineral sector by exploring opportunities in rare earth elements and construction minerals. Our mission is to empower investors with transparent access to mineral markets while supporting sustainable extraction and ethical sourcing practices across Africa.
          </p>
        </section>

        {/* What We Do */}
        <section className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="text-primary" size={28} />
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground">What We Do</h2>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3">Precious Metals Trading</h3>
              <p className="text-muted-foreground leading-relaxed">
                We facilitate the buying and selling of gold, silver, platinum, and valuable minerals. Our extensive network ensures competitive pricing and reliable delivery for institutional and individual clients.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3">Distribution & Logistics</h3>
              <p className="text-muted-foreground leading-relaxed">
                Through strategic partnerships with miners, refiners, and banks, we manage the complete supply chain from extraction to delivery, ensuring quality assurance and timely fulfillment.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3">Investment Platform (Launching Early 2026)</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Our innovative investment platform will democratize access to mineral markets. Individual investors can contribute funds to mineral projects and receive returns with competitive interest after a predetermined period.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Investors will have the flexibility to reinvest fully or partially, creating sustainable wealth-building opportunities through tangible asset exposure.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3">Portfolio Expansion</h3>
              <p className="text-muted-foreground leading-relaxed">
                We continuously explore rare earth elements and construction minerals, positioning our clients at the forefront of emerging commodity markets with significant growth potential.
              </p>
            </div>
          </div>
        </section>

        {/* Sustainable Practices */}
        <section className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Leaf className="text-primary" size={28} />
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground">Sustainable Practices</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Ethical sourcing and sustainable supply chain management are fundamental to our operations. We work exclusively with certified partners who adhere to responsible mining practices.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our commitment to innovation drives us to continuously improve transparency, traceability, and environmental stewardship throughout the mineral value chain.
          </p>
        </section>

        {/* Vision */}
        <section className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-primary" size={28} />
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground">Our Vision</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            To become a global leader in mineral investments by expanding our portfolio across continents, driving innovation in mining technologies, and creating accessible investment opportunities that generate sustainable returns for individuals and institutions worldwide.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-16 animate-fade-in">
          <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-2">What minerals do you trade?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in precious metals including gold, silver, and platinum, as well as rare earth elements and construction minerals. Our portfolio continues to expand based on market demand and opportunities.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-2">When will the investment platform launch?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our innovative investment platform is scheduled to launch in early 2026. Join our waitlist to receive exclusive updates and early access opportunities.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-2">How do you ensure ethical sourcing?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We partner exclusively with certified suppliers who meet international standards for responsible mining. Our supply chain includes comprehensive verification and traceability measures.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 px-6 bg-secondary/30 rounded-lg animate-fade-in">
          <h2 className="font-display text-2xl md:text-3xl font-light text-foreground mb-4">
            Ready to Invest in the Future?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Platform launching early 2026 — secure your spot to access mineral markets with confidence and transparency.
          </p>
          <Link to="/#waitlist">
            <Button variant="default" size="lg" className="text-base">
              Join the Waitlist Today
            </Button>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Transcontinental Investments. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
