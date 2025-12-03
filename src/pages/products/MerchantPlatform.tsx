import { Button } from "@/components/ui/button";
import { Store, ShieldCheck, BarChart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const MerchantPlatform = () => {
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
        "name": "Merchant Platform",
        "item": "https://transcontinentalinvestments.com/products/merchant-platform"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Merchant Platform | Gold Trading Marketplace - Transcontinental Investments"
        description="Join our merchant platform launching early 2026. Trade gold directly with us through our secure B2B marketplace for verified buyers and sellers in East Africa."
        keywords="merchant platform gold, B2B gold trading, gold marketplace Kenya, wholesale gold trading, merchant gold buying, merchant gold selling"
        canonical="https://transcontinentalinvestments.com/products/merchant-platform"
      />

      {/* Add Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 px-4" aria-labelledby="merchant-platform-heading">
          <div className="container mx-auto max-w-4xl">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-foreground">Coming Early 2026</span>
            </div>
            <h1 id="merchant-platform-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-6">
              Merchant Platform
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              A dedicated marketplace connecting gold buyers and sellers. Join our merchant network to trade gold directly through our secure platform.
            </p>
            <p className="text-sm text-muted-foreground">
              <Link to="/products" className="text-primary hover:underline">← Back to Products</Link> | <Link to="/merchants" className="text-primary hover:underline">Apply as Merchant →</Link>
            </p>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-12 px-4 bg-secondary/20" aria-labelledby="merchant-features">
          <div className="container mx-auto max-w-4xl">
            <h2 id="merchant-features" className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-12 text-center">
              Platform Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <div className="p-4 rounded-lg bg-secondary mb-4">
                  <Store className="h-8 w-8 text-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-medium text-foreground mb-2 text-xl">Digital Marketplace</h3>
                <p className="text-muted-foreground">
                  Easy-to-use platform for listing, browsing, and trading gold with verified merchants.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="p-4 rounded-lg bg-secondary mb-4">
                  <ShieldCheck className="h-8 w-8 text-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-medium text-foreground mb-2 text-xl">Verified Merchants</h3>
                <p className="text-muted-foreground">
                  All merchants are vetted and verified to ensure safe and legitimate transactions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="p-4 rounded-lg bg-secondary mb-4">
                  <BarChart className="h-8 w-8 text-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-medium text-foreground mb-2 text-xl">Real-Time Pricing</h3>
                <p className="text-muted-foreground">
                  Access live market prices and competitive rates for informed trading decisions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="p-4 rounded-lg bg-secondary mb-4">
                  <Users className="h-8 w-8 text-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-medium text-foreground mb-2 text-xl">Merchant Network</h3>
                <p className="text-muted-foreground">
                  Connect with a growing community of trusted gold buyers and sellers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* For Buyers */}
        <section className="py-16 px-4" aria-labelledby="for-buyers">
          <div className="container mx-auto max-w-4xl">
            <h2 id="for-buyers" className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8">
              For Gold Buyers
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-medium text-foreground mb-2">Direct Access</h3>
                <p className="text-muted-foreground">Purchase gold directly from verified sellers without intermediaries.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-medium text-foreground mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">All gold is tested and certified before transactions are completed.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-medium text-foreground mb-2">Competitive Prices</h3>
                <p className="text-muted-foreground">Compare offers from multiple sellers to get the best deals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* For Sellers */}
        <section className="py-16 px-4 bg-secondary/20" aria-labelledby="for-sellers">
          <div className="container mx-auto max-w-4xl">
            <h2 id="for-sellers" className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8">
              For Gold Sellers
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-medium text-foreground mb-2">Wider Market</h3>
                <p className="text-muted-foreground">Reach more potential buyers through our digital marketplace.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-medium text-foreground mb-2">Fair Pricing</h3>
                <p className="text-muted-foreground">Set your own prices based on market rates and demand.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-medium text-foreground mb-2">Secure Transactions</h3>
                <p className="text-muted-foreground">Protected payments and escrow services for peace of mind.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground" aria-labelledby="merchant-platform-cta">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 id="merchant-platform-cta" className="font-display text-3xl md:text-4xl font-light tracking-wide mb-6">
              Join the Merchant Network
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Sign up now to become a merchant and be ready when the platform launches in early 2026.
            </p>
            <Link to="/merchants">
              <Button size="lg" variant="secondary">
                Apply as Merchant
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MerchantPlatform;
