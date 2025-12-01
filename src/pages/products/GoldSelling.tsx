import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";

const GoldSelling = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-4 py-4 sm:py-6 border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/products">
            <Button variant="ghost" size="sm" className="gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Products</span>
              <span className="sm:hidden">Back</span>
            </Button>
          </Link>
          <Link to="/waitlist">
            <Button variant="default" size="sm" className="text-xs sm:text-sm px-3 sm:px-4">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-4 sm:mb-6">
            Gold Selling Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 px-2">
            Premium gold supply to individuals, businesses, cooperations, and governments. Quality guaranteed with complete documentation.
          </p>
        </div>
      </section>

      {/* Who We Sell To */}
      <section className="py-10 sm:py-12 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-foreground mb-6 sm:mb-8 px-2">
            Who We Sell To
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              "Individual Buyers",
              "Businesses & Corporations",
              "Cooperative Groups",
              "Government Entities",
              "Banks & Financial Institutions",
              "International Buyers",
              "Precious Metal Refiners",
              "Sovereign Wealth Funds"
            ].map((buyer, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-foreground mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground mb-2">{buyer}</h3>
                  <p className="text-sm text-muted-foreground">
                    Reliable supply with full certification and documentation.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-foreground mb-6 sm:mb-8 px-2">
            Why Choose Us
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-medium text-foreground mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">All gold is authenticated and certified for purity.</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-medium text-foreground mb-2">Competitive Pricing</h3>
              <p className="text-muted-foreground">Fair market pricing with transparent cost structures.</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-medium text-foreground mb-2">International Standards</h3>
              <p className="text-muted-foreground">Compliance with global precious metals trading regulations.</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-medium text-foreground mb-2">Secure Delivery</h3>
              <p className="text-muted-foreground">Safe and insured transportation for all transactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* International Buyers */}
      <section className="py-10 sm:py-12 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4 sm:mb-6 px-2">
            Open to International Companies
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            We welcome partnerships with international companies looking to source premium precious metals from East Africa. Our extensive network and logistics capabilities ensure reliable supply chains.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light tracking-wide mb-4 sm:mb-6 px-2">
            Ready to Purchase Gold?
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 px-2">
            Join our waitlist to access our gold selling services.
          </p>
          <Link to="/waitlist">
            <Button size="lg" variant="secondary" className="text-sm sm:text-base">
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

export default GoldSelling;
