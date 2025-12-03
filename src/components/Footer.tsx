import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Transcontinental Investments</h3>
            <p className="text-sm text-muted-foreground mb-4">
              East Africa's leading precious metals trading and mineral investment platform.
            </p>
          </div>

          {/* Quick Links - PRIMARY PAGES */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav role="navigation" aria-label="Footer Navigation">
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About Transcontinental
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Products & Trading
                  </Link>
                </li>
                <li>
                  <Link to="/merchants" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Merchant Services
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <nav role="navigation" aria-label="Resources Navigation">
              <ul className="space-y-2">
                <li>
                  <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Blog & Market Insights
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/waitlist" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Join Waitlist
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect With Us</h4>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/transcontinental_investments" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/transcontinentalinvestments" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://x.com/T_C_Investments" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="X (Twitter)"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://linkedin.com/company/transcontinentalinvestments" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Transcontinental Investments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
