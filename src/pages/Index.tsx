import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="absolute top-0 left-0 right-0 z-10 px-4 py-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="opacity-0 pointer-events-none">Spacer</div>
          <Link to="/about">
            <Button variant="outline" size="default" aria-label="Learn more about Transcontinental Investments">
              Learn More
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-4 pt-20">
        <div className="text-center animate-fade-in-up max-w-4xl mx-auto">
          <div className="mb-12 flex justify-center">
            <img 
              src={logo} 
              alt="Transcontinental Investments - Precious metals trading and mineral investment company based in East Africa" 
              className="h-auto w-full max-w-md md:max-w-lg"
            />
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-foreground mb-6">
            COMING SOON
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Investing in the future of precious metals and mineral markets across East Africa
          </p>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <a 
              href="https://www.instagram.com/transcontinental_investments" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow Transcontinental Investments on Instagram"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <Instagram size={20} className="text-foreground" />
            </a>
            <a 
              href="https://www.facebook.com/transcontinentalinvestments" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow Transcontinental Investments on Facebook"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <Facebook size={20} className="text-foreground" />
            </a>
            <a 
              href="https://x.com/T_C_Investments" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow Transcontinental Investments on X (Twitter)"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <Twitter size={20} className="text-foreground" />
            </a>
            <a 
              href="https://linkedin.com/company/transcontinentalinvestments" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow Transcontinental Investments on LinkedIn"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <Linkedin size={20} className="text-foreground" />
            </a>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-16 md:py-24 px-4 bg-secondary/5">
        <div className="container mx-auto">
          <WaitlistForm />
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

export default Index;
