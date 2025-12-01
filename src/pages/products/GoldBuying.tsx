import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";

const GoldBuying = () => {
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
            Gold Buying Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 px-2">
            We purchase gold from various sources across East Africa with transparent pricing and secure, efficient transactions.
          </p>
        </div>
      </section>

      {/* Who We Buy From */}
      <section className="py-10 sm:py-12 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-foreground mb-6 sm:mb-8 px-2">
            Who We Buy From
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
...
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-foreground mb-6 sm:mb-8 px-2">
            Our Buying Process
          </h2>
          <div className="space-y-4 sm:space-y-6">
...
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light tracking-wide mb-4 sm:mb-6 px-2">
            Ready to Sell Your Gold?
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 px-2">
            Join our waitlist to be among the first to access our gold buying services.
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

export default GoldBuying;
