import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { MerchantForm } from "@/components/MerchantForm";

const Merchants = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-4 py-6 border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="default" className="gap-2">
              <ArrowLeft size={18} />
              Back to Home
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="default" size="sm">
              About
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-foreground">Coming Early 2026</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-6">
            Become a Merchant
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Join our exclusive merchant platform to buy gold from us or sell gold to us. Connect directly with Transcontinental Investments for seamless, secure transactions.
          </p>
        </div>
      </section>

      {/* What is the Merchant Platform */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8 text-center">
            What is the Merchant Platform?
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Our merchant platform is a specialized marketplace designed for verified buyers and sellers to trade gold directly with Transcontinental Investments. Whether you want to purchase gold from us or sell gold to us, the platform provides:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background">
              <h3 className="font-medium text-foreground mb-3 text-xl">For Gold Buyers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Purchase verified, high-quality gold directly from us</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Access competitive pricing and real-time market rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Secure transactions with full documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Flexible order quantities and delivery options</span>
                </li>
              </ul>
            </div>
            <div className="p-6 border border-border rounded-lg bg-background">
              <h3 className="font-medium text-foreground mb-3 text-xl">For Gold Sellers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Sell your gold directly to us at fair market prices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Fast evaluation and transparent pricing process</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Immediate payment upon agreement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Professional assessment and certification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Merchant Application Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4">
              Apply to Become a Merchant
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below to register your interest. We'll contact you when the platform launches in early 2026.
            </p>
          </div>
          
          <MerchantForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Transcontinental Investments. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Merchants;
