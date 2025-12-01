import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Shield, BarChart3, Globe } from "lucide-react";

const InvestmentPlatform = () => {
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
          <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full">
            <span className="text-xs sm:text-sm font-medium text-foreground">Coming Early 2026</span>
          </div>
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-4 sm:mb-6">
            Investment Platform
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 px-2">
            A comprehensive digital platform for investing in precious metals and mineral markets across East Africa. Democratizing access to mineral investments.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 sm:py-12 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8 sm:mb-12 text-center px-2">
            Platform Features
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="p-4 rounded-lg bg-secondary mb-4">
                <TrendingUp className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground mb-2 text-xl">Real-Time Trading</h3>
              <p className="text-muted-foreground">
                Access live market prices and execute trades instantly with our advanced trading engine.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="p-4 rounded-lg bg-secondary mb-4">
                <Shield className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground mb-2 text-xl">Secure Investments</h3>
              <p className="text-muted-foreground">
                Bank-level security with full regulatory compliance and insurance coverage.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="p-4 rounded-lg bg-secondary mb-4">
                <BarChart3 className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground mb-2 text-xl">Portfolio Analytics</h3>
              <p className="text-muted-foreground">
                Advanced tools and insights to track and optimize your investment performance.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="p-4 rounded-lg bg-secondary mb-4">
                <Globe className="h-8 w-8 text-foreground" />
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
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-foreground mb-6 sm:mb-8 px-2">
            Investment Opportunities
          </h2>
          <div className="space-y-3 sm:space-y-4">
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
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide mb-6">
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

export default InvestmentPlatform;
