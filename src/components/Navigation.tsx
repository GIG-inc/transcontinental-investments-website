import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/merchants", label: "Merchants" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10 relative">
      <div className="container mx-auto md:py-4 px-[26px] py-[16px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 relative z-[60] group">
            <span className="font-display font-bold text-xl text-white tracking-wider group-hover:text-gray-300 transition-colors duration-200">TCI</span>
          </Link>

          {/* Desktop Navigation - SEMANTIC NAV STRUCTURE */}
          <nav 
            className="hidden md:flex items-center gap-8" 
            role="navigation" 
            aria-label="Main Navigation"
          >
            <ul id="primary-menu" className="flex items-center gap-8 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`text-sm font-medium transition-all duration-200 relative py-1 ${
                      isActive(link.to)
                        ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/waitlist">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-white/20 bg-white/5 text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Join Waitlist
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile toggle button */}
          <div className="md:hidden relative z-[60]">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((prev) => !prev)}
              className="h-11 w-11 text-white hover:bg-white/10 border border-white/10"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />

            {/* Dropdown - SEMANTIC NAV STRUCTURE */}
            <motion.div
              key="dropdown"
              id="mobile-menu"
              className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 shadow-2xl md:hidden z-50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <nav 
                className="container mx-auto px-[26px] py-6" 
                role="navigation" 
                aria-label="Mobile Navigation"
              >
                <ul className="flex flex-col gap-1 list-none m-0 p-0">
                  {navLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className={`text-base font-medium transition-all py-3 px-4 rounded-md block ${
                          isActive(link.to)
                            ? "text-white bg-white/10"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}

                  <li className="mt-4">
                    <Link to="/waitlist" onClick={() => setOpen(false)}>
                      <Button className="w-full bg-white text-black hover:bg-gray-200 font-medium">
                        Join Waitlist
                      </Button>
                    </Link>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};