import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Navigation } from "@/components/Navigation";
import { SEO } from "@/components/SEO";

const Waitlist = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Join Waitlist | Transcontinental Investments"
        description="Join the waitlist to be among the first to access our investment platform and secure your position in the future of precious metals and mineral markets."
        keywords="investment platform waitlist, precious metals investment, early access mineral trading, Transcontinental Investments waitlist"
        canonical="https://transcontinentalinvestments.com/waitlist"
      />
      <Navigation />

      {/* Waitlist Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-foreground mb-4">
              Join the Waitlist
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Be among the first to access our investment platform and secure your position in the future of mineral markets.
            </p>
          </div>
          
          <WaitlistForm />
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

export default Waitlist;
