import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const GoldBuying = () => {
  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://transcontinentalinvestments.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products & Trading",
        "item": "https://transcontinentalinvestments.com/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Gold Buying Services",
        "item": "https://transcontinentalinvestments.com/products/gold-buying"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Gold Buying Services | We Buy Gold in East Africa - Transcontinental Investments"
        description="Sell your gold to Transcontinental Investments. We purchase gold from individuals, businesses, and mining companies in Kenya, Uganda, Tanzania with transparent pricing and immediate payment."
        keywords="buy gold Kenya, sell gold East Africa, gold buyers Kenya, gold purchasing services, sell gold Nairobi, cash for gold Kenya, gold dealers East Africa"
        canonical="https://transcontinentalinvestments.com/products/gold-buying"
      />

      {/* Add Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 px-4" aria-labelledby="gold-buying-heading">
          <div className="container mx-auto max-w-4xl">
            <h1 id="gold-buying-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-6">
              Gold Buying Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We purchase gold from various sources across East Africa with transparent pricing and secure, efficient transactions.
            </p>
            <p className="text-sm text-muted-foreground">
              <Link to="/products" className="text-primary hover:underline">← Back to Products</Link>
            </p>
          </div>
        </section>

        {/* Who We Buy From */}
        <section className="py-12 px-4 bg-secondary/20" aria-labelledby="who-we-buy">
          <div className="container mx-auto max-w-4xl">
            <h2 id="who-we-buy" className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8">
              Who We Buy From
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {["Individual Sellers", "Local Gold Traders", "Mining Companies", "Cooperative Groups"].map((source, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-foreground mt-1 flex-shrink-0" aria-hidden="true" />
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
        <section className="py-16 px-4" aria-labelledby="buying-process">
          <div className="container mx-auto max-w-4xl">
            <h2 id="buying-process" className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8">
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
        <section className="py-16 px-4 bg-primary text-primary-foreground" aria-labelledby="gold-buying-cta">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 id="gold-buying-cta" className="font-display text-3xl md:text-4xl font-light tracking-wide mb-6">
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
      </main>

      <Footer />
    </div>
  );
};

export default GoldBuying;
