import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/WaitlistForm";
import { ArrowLeft } from "lucide-react";

const Waitlist = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="px-4 py-6 border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="default" className="gap-2" aria-label="Back to home">
              <ArrowLeft size={18} />
              Back to Home
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" size="default" aria-label="Learn more about Transcontinental Investments">
              Learn More
            </Button>
          </Link>
        </div>
      </header>

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
