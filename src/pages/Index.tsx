import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
const Index = () => {
  return <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Header Navigation */}
      <header className="absolute top-0 left-0 right-0 z-10 px-4 py-4 md:py-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="opacity-0 pointer-events-none">Spacer</div>
          <div className="flex items-center gap-4 md:gap-6">
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link to="/waitlist">
              <Button variant="default" size="sm" aria-label="Join the waitlist">
                Join Waitlist
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Screen, Centered */}
      <section className="flex-1 flex items-center justify-center px-4">
        <div className="text-center animate-fade-in-up max-w-4xl mx-auto">
          <div className="mb-8 md:mb-10 flex justify-center">
            <Logo className="h-auto w-full max-w-md md:max-w-2xl" />
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-light tracking-wider text-foreground mb-4 md:mb-6">
            COMING SOON
          </h1>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">Buy, sell, and invest in precious metals and minerals with Transcontinental Investments. Investing in the future of precious metals and mineral markets across East Africa</p>
          
          {/* CTA Button */}
          <div className="mb-8 md:mb-10">
            <Link to="/waitlist">
              <Button size="lg" className="font-medium" aria-label="Join the waitlist for Transcontinental Investments">
                Join the Waitlist
              </Button>
            </Link>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 md:gap-4">
            <a href="https://www.instagram.com/transcontinental_investments" target="_blank" rel="noopener noreferrer" aria-label="Follow Transcontinental Investments on Instagram" className="p-2 md:p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors">
              <Instagram size={18} className="text-foreground md:w-5 md:h-5" />
            </a>
            <a href="https://www.facebook.com/transcontinentalinvestments" target="_blank" rel="noopener noreferrer" aria-label="Follow Transcontinental Investments on Facebook" className="p-2 md:p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors">
              <Facebook size={18} className="text-foreground md:w-5 md:h-5" />
            </a>
            <a href="https://x.com/T_C_Investments" target="_blank" rel="noopener noreferrer" aria-label="Follow Transcontinental Investments on X (Twitter)" className="p-2 md:p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors">
              <Twitter size={18} className="text-foreground md:w-5 md:h-5" />
            </a>
            <a href="https://linkedin.com/company/transcontinentalinvestments" target="_blank" rel="noopener noreferrer" aria-label="Follow Transcontinental Investments on LinkedIn" className="p-2 md:p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors">
              <Linkedin size={18} className="text-foreground md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Transcontinental Investments. All rights reserved.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;