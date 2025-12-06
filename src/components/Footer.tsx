import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-black text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4 tracking-wide">Transcontinental Investments</h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              East Africa's leading precious metals trading and mineral investment platform.
            </p>
          </div>

          {/* Quick Links - PRIMARY PAGES */}
          <div>
            <h4 className="font-bold text-white mb-4 tracking-wide">Quick Links</h4>
            <nav role="navigation" aria-label="Footer Navigation">
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    About Transcontinental
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    Products & Trading
                  </Link>
                </li>
                <li>
                  <Link to="/merchants" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    Merchant Services
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4 tracking-wide">Resources</h4>
            <nav role="navigation" aria-label="Resources Navigation">
              <ul className="space-y-3">
                <li>
                  <Link to="/blog" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    Blog & Market Insights
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/waitlist" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    Join Waitlist
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white mb-4 tracking-wide">Connect With Us</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/transcontinental_investments" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-200"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/transcontinentalinvestments" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-200"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://x.com/T_C_Investments" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="X (Twitter)"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-200"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/transcontinentalinvestments" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Transcontinental Investments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
