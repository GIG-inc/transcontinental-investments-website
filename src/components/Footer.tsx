import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-16 px-4 text-white overflow-hidden">
      {/* Gradient background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl text-white mb-4 tracking-wide">Transcontinental Investments</h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              East Africa's leading precious metals trading and mineral investment platform.
            </p>
            <div className="h-1 w-12 bg-gradient-to-r from-gray-500 to-transparent rounded-full" />
          </div>

          {/* Quick Links - PRIMARY PAGES */}
          <div>
            <h4 className="font-bold text-white mb-4 tracking-wide">Quick Links</h4>
            <nav role="navigation" aria-label="Footer Navigation">
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                    About Transcontinental
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                    Products & Trading
                  </Link>
                </li>
                <li>
                  <Link to="/merchants" className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
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
                  <Link to="/blog" className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                    Blog & Market Insights
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/waitlist" className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                    Join Waitlist
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white mb-4 tracking-wide">Connect With Us</h4>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/transcontinental_investments" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/transcontinentalinvestments" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://x.com/T_C_Investments" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="X (Twitter)"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/transcontinentalinvestments" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Transcontinental Investments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
