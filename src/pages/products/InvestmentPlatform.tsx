import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, BarChart3, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const InvestmentPlatform = () => {
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
        "name": "Investment Platform",
        "item": "https://transcontinentalinvestments.com/products/investment-platform"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Investment Platform | Mineral Market Investment - Transcontinental Investments"
        description="Join our investment platform launching early 2026. Invest in precious metals and mineral markets with competitive returns and flexible reinvestment options in East Africa."
        keywords="mineral investment platform, precious metals investment, gold investment Kenya, investment opportunities East Africa, mineral market returns, invest in mining"
        canonical="https://transcontinentalinvestments.com/products/investment-platform"
      />

      {/* Add Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 px-4" aria-labelledby="investment-heading">
          <div className="container mx-auto max-w-4xl">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-foreground">Coming Early 2026</span>
            </div>
            <h1 id="investment-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-6">
              Investment Platform
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              A comprehensive digital platform for investing in precious metals and mineral markets across East Africa. Democratizing access to mineral investments.
            </p>
            <p className="text-sm text-muted-foreground">
              <Link to="/products" className="text-primary hover:underline">← Back to Products</Link>
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 px-4 bg-secondary/20" aria-labelledby="platform-features">
          <div className="container mx-auto max-w-4xl">
            <h2 id="platform-features" className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-12 text-center">
              Platform Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <div className="p-4 rounded-lg bg-secondary mb-4">
                  <TrendingUp className="h-8 w-8 text-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-medium text-foreground mb-2 text-xl">Real-Time Trading</h3>
                <p className="text-muted-foreground">
                  Access live market prices and execute trades instantly with our advanced trading engine.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="p-4 rounded-lg bg-secondary mb-4">
                  <Shield className="h-8 w-8 text-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-medium text-foreground mb-2 text-xl">Secure Investments</h3>
                <p className="text-muted-foreground">
                  Bank-level security with full regulatory compliance and insurance coverage.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="p-4 rounded-lg bg-secondary mb-4">
                  <BarChart3 className="h-8 w-8 text-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-medium text-foreground mb-2 text-xl">Portfolio Analytics</h3>
                <p className="text-muted-foreground">
                  Advanced tools and insights to track and optimize your investment performance.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="p-4 rounded-lg bg-secondary mb-4">
                  <Globe className="h-8 w-8 text-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-medium text-foreground mb-2 text-xl">Global Access</h3>
                <p className="text-muted-foreground">
                  Invest from anywhere in the world with multi-currency support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Can Invest In */}
        <section className="py-16 px-4" aria-labelledby="investment-opportunities">
          <div className="container mx-auto max-w-4xl">
            <h2 id="investment-opportunities" className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8">
              Investment Opportunities
            </h2>
            <div className="space-y-4">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium text-foreground mb-2">Physical Gold & Precious Metals</h3>
                <p className="text-muted-foreground">Own physical gold stored securely in our vaults with full liquidity options.</p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium text-foreground mb-2">Mining Projects</h3>
                <p className="text-muted-foreground">Invest directly in vetted mining operations across East Africa.</p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium text-foreground mb-2">Mineral Commodities</h3>
                <p className="text-muted-foreground">Trade various minerals including gold, copper, cobalt, and more.</p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium text-foreground mb-2">Investment Funds</h3>
                <p className="text-muted-foreground">Diversified portfolios managed by mineral market experts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground" aria-labelledby="investment-cta">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 id="investment-cta" className="font-display text-3xl md:text-4xl font-light tracking-wide mb-6">
              Be First in Line
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join our waitlist to get early access to the investment platform when it launches in early 2026.
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

export default InvestmentPlatform;
