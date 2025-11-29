import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";

const GoldBuying = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-4 py-6 border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/products">
            <Button variant="ghost" size="default" className="gap-2">
              <ArrowLeft size={18} />
              Back to Products
            </Button>
          </Link>
          <Link to="/waitlist">
            <Button variant="default" size="sm">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-6">
            Gold Buying Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            We purchase gold from various sources across East Africa with transparent pricing and secure, efficient transactions.
          </p>
        </div>
      </section>

      {/* Who We Buy From */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8">
            Who We Buy From
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {["Individual Sellers", "Local Gold Traders", "Mining Companies", "Cooperative Groups"].map((source, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-foreground mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground mb-2">{source}</h3>
                  <p className="text-sm text-muted-foreground">
                    Competitive pricing and immediate payment options available.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8">
            Our Buying Process
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-medium text-foreground mb-2">1. Assessment</h3>
              <p className="text-muted-foreground">Professional evaluation of your gold's quality and purity.</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-medium text-foreground mb-2">2. Transparent Pricing</h3>
              <p className="text-muted-foreground">Clear pricing based on current market rates.</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-medium text-foreground mb-2">3. Secure Transaction</h3>
              <p className="text-muted-foreground">Safe and compliant purchase process.</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-medium text-foreground mb-2">4. Immediate Payment</h3>
              <p className="text-muted-foreground">Fast payment processing upon agreement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide mb-6">
            Ready to Sell Your Gold?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join our waitlist to be among the first to access our gold buying services.
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

export default GoldBuying;
