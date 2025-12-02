import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEO } from "@/components/SEO";

const GoldSelling = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Gold Selling Services | Buy Premium Gold in East Africa - Transcontinental Investments"
        description="Purchase high-quality gold from Transcontinental Investments. We supply premium gold to individuals, businesses, corporations, and governments across East Africa with full certification."
        keywords="buy gold Kenya, gold for sale East Africa, purchase gold Nairobi, gold suppliers Kenya, certified gold dealers, wholesale gold East Africa"
        canonical="https://transcontinentalinvestments.com/products/gold-selling"
      />
      <Navigation />

      {/* Hero */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-6">
            Gold Selling Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Premium gold supply to individuals, businesses, cooperations, and governments. Quality guaranteed with complete documentation.
          </p>
        </div>
      </section>

      {/* Who We Sell To */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8">
            Who We Sell To
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
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
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8">
            Why Choose Us
          </h2>
          <div className="space-y-6">
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
      <section className="py-12 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-6">
            Open to International Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We welcome partnerships with international companies looking to source premium precious metals from East Africa. Our extensive network and logistics capabilities ensure reliable supply chains.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide mb-6">
            Ready to Purchase Gold?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join our waitlist to access our gold selling services.
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

export default GoldSelling;
