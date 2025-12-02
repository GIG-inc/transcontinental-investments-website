import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/merchants", label: "Merchants" },
    { to: "/blog", label: "Blog" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/50">
      <div className="container mx-auto md:py-5 px-[26px] py-[19px]">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display font-semibold text-lg">TCI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/waitlist">
              <Button variant="default" size="sm" aria-label="Join the waitlist">
                Join Waitlist
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`text-base font-medium transition-colors py-2 ${
                      isActive(link.to)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to="/waitlist" onClick={() => setOpen(false)} className="mt-4">
                  <Button variant="default" className="w-full" aria-label="Join the waitlist">
                    Join Waitlist
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
