import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, Store, TrendingUp, Handshake, Users, Factory, Lightbulb } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: ShoppingCart,
      title: "Gold Buying",
      description: "We purchase gold from individuals, businesses, companies, and cooperations. Transparent pricing and secure transactions.",
      link: "/products/gold-buying",
      status: "Active"
    },
    {
      icon: Store,
      title: "Gold Selling",
      description: "We sell premium gold to individuals, businesses, cooperations, and governments. Quality guaranteed.",
      link: "/products/gold-selling",
      status: "Active"
    },
    {
      icon: TrendingUp,
      title: "Investment Platform",
      description: "A comprehensive platform for investing in precious metals and mineral markets. Coming early 2026.",
      link: "/products/investment-platform",
      status: "Coming Early 2026"
    },
    {
      icon: Handshake,
      title: "Mining Partnerships",
      description: "We partner with miners to help them obtain licenses and support their operations.",
      link: "/products/mining-partnerships",
      status: "Active"
    },
    {
      icon: Users,
      title: "Merchant Platform",
      description: "A dedicated platform for buyers and sellers to trade gold. Join our merchant network. Rolling out early 2026.",
      link: "/products/merchant-platform",
      status: "Coming Early 2026"
    },
    {
      icon: Factory,
      title: "Refinery",
      description: "Our own refinery facility. Development starting late 2026, operations beginning early 2027.",
      link: "/products/refinery",
      status: "Development Late 2026"
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Innovation center for mining technology and robotics. Join us in transforming the mining sector.",
      link: "/products/innovation-hub",
      status: "Active"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-4 py-4 sm:py-6 border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </Button>
          </Link>
          <Link to="/waitlist">
            <Button variant="default" size="sm" className="text-xs sm:text-sm px-3 sm:px-4">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 border-b border-border/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-4 sm:mb-6">
            Our Products & Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Comprehensive solutions across the precious metals value chain. From buying and selling to innovation and refinement.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-secondary/50">
                      <product.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                      {product.status}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={product.link}>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
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

export default Products;
