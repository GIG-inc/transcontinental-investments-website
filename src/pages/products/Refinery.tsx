import { Button } from "@/components/ui/button";
import { Factory, Zap, Shield, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEO } from "@/components/SEO";

const Refinery = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Gold Refinery | Processing & Purification Services - Transcontinental Investments"
        description="Our state-of-the-art gold refinery facility launching in 2027. Advanced processing and purification with sustainable practices and international certification standards."
        keywords="gold refinery East Africa, gold processing Kenya, gold purification, precious metals refining, refinery services Kenya, gold certification"
        canonical="https://transcontinentalinvestments.com/products/refinery"
      />
      <Navigation />

      {/* Hero */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-foreground">Development Late 2026 • Operations Early 2027</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-6">
            Refinery Facility
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            A state-of-the-art precious metals refinery facility. Bringing world-class refining capabilities to East Africa with sustainable practices.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8 text-center">
            Our Vision
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            To establish East Africa's premier refining facility, creating a complete value chain from mining to refined products, supporting local economies and international standards.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="p-4 rounded-lg bg-secondary mb-4">
                <Factory className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground mb-2 text-xl">Modern Infrastructure</h3>
              <p className="text-muted-foreground">
                Latest refining technology and equipment for maximum efficiency and purity.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="p-4 rounded-lg bg-secondary mb-4">
                <Zap className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground mb-2 text-xl">High Capacity</h3>
              <p className="text-muted-foreground">
                Designed to process significant volumes to meet regional demand.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="p-4 rounded-lg bg-secondary mb-4">
                <Shield className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground mb-2 text-xl">International Standards</h3>
              <p className="text-muted-foreground">
                Compliance with global refining standards and certifications.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="p-4 rounded-lg bg-secondary mb-4">
                <Leaf className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground mb-2 text-xl">Sustainable Operations</h3>
              <p className="text-muted-foreground">
                Environmentally responsible processes with minimal ecological impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8">
            Development Timeline
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-medium text-foreground mb-2">Late 2026 - Development Phase</h3>
              <p className="text-muted-foreground">Site preparation, construction, and equipment installation begins.</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-medium text-foreground mb-2">Q4 2026 - Testing & Commissioning</h3>
              <p className="text-muted-foreground">Equipment testing, staff training, and regulatory approvals.</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-medium text-foreground mb-2">Early 2027 - Operations Begin</h3>
              <p className="text-muted-foreground">Full-scale commercial operations commence with initial processing capacity.</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-medium text-foreground mb-2">Mid 2027 - Full Capacity</h3>
              <p className="text-muted-foreground">Ramp up to full operational capacity and expanded services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-6 text-center">
            Strategic Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 border border-border rounded-lg bg-background">
              <h3 className="font-medium text-foreground mb-2">Local Value Addition</h3>
              <p className="text-muted-foreground">Process raw materials locally, adding value before export.</p>
            </div>
            <div className="p-6 border border-border rounded-lg bg-background">
              <h3 className="font-medium text-foreground mb-2">Job Creation</h3>
              <p className="text-muted-foreground">Employing local talent and providing skills development opportunities.</p>
            </div>
            <div className="p-6 border border-border rounded-lg bg-background">
              <h3 className="font-medium text-foreground mb-2">Supply Chain Control</h3>
              <p className="text-muted-foreground">Vertical integration from mining to refined product delivery.</p>
            </div>
            <div className="p-6 border border-border rounded-lg bg-background">
              <h3 className="font-medium text-foreground mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">Guarantee purity and quality at every stage of production.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide mb-6">
            Stay Updated
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join our waitlist to receive updates on our refinery development and operations launch.
          </p>
          <Link to="/waitlist">
            <Button size="lg" variant="secondary">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Transcontinental Investments. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Refinery;
