import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Store, ShieldCheck, BarChart, Users } from "lucide-react";

const MerchantPlatform = () => {
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
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-foreground">Coming Early 2026</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-6">
            Merchant Platform
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            A dedicated marketplace connecting gold buyers and sellers. Join our merchant network to trade gold directly through our secure platform.
          </p>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-12 text-center">
            Platform Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="p-4 rounded-lg bg-secondary mb-4">
                <Store className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground mb-2 text-xl">Digital Marketplace</h3>
              <p className="text-muted-foreground">
                Easy-to-use platform for listing, browsing, and trading gold with verified merchants.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="p-4 rounded-lg bg-secondary mb-4">
                <ShieldCheck className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground mb-2 text-xl">Verified Merchants</h3>
              <p className="text-muted-foreground">
                All merchants are vetted and verified to ensure safe and legitimate transactions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="p-4 rounded-lg bg-secondary mb-4">
                <BarChart className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground mb-2 text-xl">Real-Time Pricing</h3>
              <p className="text-muted-foreground">
                Access live market prices and competitive rates for informed trading decisions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="p-4 rounded-lg bg-secondary mb-4">
                <Users className="h-8 w-8 text-foreground" />
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
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8">
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
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8">
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
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide mb-6">
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

export default MerchantPlatform;
