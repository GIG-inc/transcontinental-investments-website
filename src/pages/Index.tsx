import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin, ShoppingCart, Store, TrendingUp, Handshake, Users, Factory, Lightbulb, Building2, Briefcase, Landmark, Globe } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { SEO } from "@/components/SEO";

const Index = () => {
  const products = [{
    icon: ShoppingCart,
    title: "Gold Buying",
    description: "Purchase gold from miners and sellers across East Africa with transparent pricing",
    link: "/products/gold-buying"
  }, {
    icon: Store,
    title: "Gold Selling",
    description: "Sell premium gold to investors and international buyers",
    link: "/products/gold-selling"
  }, {
    icon: TrendingUp,
    title: "Investment Platform",
    description: "Invest in gold, silver, platinum and rare minerals",
    link: "/products/investment-platform",
    badge: "2026"
  }, {
    icon: Handshake,
    title: "Mining Partnerships",
    description: "Partnership opportunities with mining operations",
    link: "/products/mining-partnerships"
  }, {
    icon: Users,
    title: "Merchant Platform",
    description: "Digital marketplace for precious metals trading",
    link: "/products/merchant-platform",
    badge: "2026"
  }, {
    icon: Factory,
    title: "Refinery",
    description: "State-of-the-art gold and precious metals refining facility",
    link: "/products/refinery",
    badge: "2027"
  }, {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Research and development in mining technology",
    link: "/products/innovation-hub"
  }];

  const audiences = [{
    icon: Users,
    title: "Individual Sellers",
    desc: "Sell your gold with transparent pricing"
  }, {
    icon: Briefcase,
    title: "Local Gold Traders",
    desc: "Partner with us for reliable transactions"
  }, {
    icon: Building2,
    title: "Mining Companies",
    desc: "Scale operations with our support"
  }, {
    icon: Users,
    title: "Cooperative Groups",
    desc: "Fair pricing for community miners"
  }, {
    icon: Landmark,
    title: "Financial Institutions",
    desc: "Secure precious metals supply"
  }, {
    icon: Globe,
    title: "International Buyers",
    desc: "Source premium gold from East Africa"
  }];

  // Structured Data for Products
  const productSchemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": product.title,
        "description": product.description,
        "url": `https://transcontinentalinvestments.com${product.link}`
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Transcontinental Investments | Buy & Sell Gold, Precious Metals Trading in East Africa"
        description="Transcontinental Investments - East Africa's leading precious metals trading platform. Buy gold, sell gold, invest in silver, platinum & minerals. Ethical sourcing, transparent pricing. Serving Kenya, Uganda, Tanzania & Rwanda."
        keywords="Transcontinental Investments, buy gold Kenya, sell gold East Africa, precious metals trading, gold dealers Nairobi, mineral investment, platinum trading, silver trading, ethical gold sourcing Africa"
        canonical="https://transcontinentalinvestments.com/"
      />

      {/* Add Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemaData) }}
      />

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 md:py-0" aria-labelledby="hero-heading">
          <div className="container mx-auto">
            <div className="text-center animate-fade-in-up max-w-5xl mx-auto">
              <div className="mb-8 md:mb-12 flex justify-center">
                <Logo 
                  className="h-auto w-full max-w-md md:max-w-2xl" 
                  aria-label="Transcontinental Investments Logo"
                />
              </div>
              
              {/* FIXED H1 - Now contains brand name and keywords */}

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-foreground mb-6">
                COMING SOON
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Buy, sell, and invest in precious metals and minerals with Transcontinental Investments. We are currently focused on the precious metals mining sector and will be expanding into other mining markets in the future.
              </p>
              
              <div className="mb-10">
                <Link to="/waitlist">
                  <Button 
                    size="lg" 
                    className="font-medium" 
                    aria-label="Join the waitlist for Transcontinental Investments"
                  >
                    Join the Waitlist
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center justify-center gap-3 md:gap-4" role="navigation" aria-label="Social media links">
                <a 
                  href="https://www.instagram.com/transcontinental_investments" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Follow Transcontinental Investments on Instagram" 
                  className="p-2 md:p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <Instagram size={18} className="text-foreground md:w-5 md:h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/transcontinentalinvestments" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Follow Transcontinental Investments on Facebook" 
                  className="p-2 md:p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <Facebook size={18} className="text-foreground md:w-5 md:h-5" />
                </a>
                <a 
                  href="https://x.com/T_C_Investments" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Follow Transcontinental Investments on X (Twitter)" 
                  className="p-2 md:p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <Twitter size={18} className="text-foreground md:w-5 md:h-5" />
                </a>
                <a 
                  href="https://linkedin.com/company/transcontinentalinvestments" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Follow Transcontinental Investments on LinkedIn" 
                  className="p-2 md:p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <Linkedin size={18} className="text-foreground md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 md:py-24 px-4 bg-secondary/20" aria-labelledby="vision-heading">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 
                id="vision-heading"
                className="font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-foreground mb-6"
              >
                Our Vision
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To be a leading Investment Company that specializes in all types of mining. We aim to be a self-sufficient company with complete vertical integration—from buying from miners, owning mines, operating refineries and processing plants, maintaining reserves, to selling directly to markets. Our goal is to become a self-sustaining Mining Investment Company that innovates the mining industry.
              </p>
              <div className="mt-8">
                <Link to="/about">
                  <Button variant="outline" size="lg">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 md:py-24 px-4" aria-labelledby="products-heading">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 
                id="products-heading"
                className="font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-foreground mb-6"
              >
                Our Products & Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions across the precious metals value chain
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-secondary/50 group-hover:bg-secondary transition-colors" aria-hidden="true">
                        <product.icon className="h-6 w-6 text-foreground" />
                      </div>
                      {product.badge && (
                        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    <Link to={product.link}>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link to="/products">
                <Button size="lg" variant="default">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="py-16 md:py-24 px-4 bg-secondary/20" aria-labelledby="clients-heading">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 
                id="clients-heading"
                className="font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-foreground mb-6"
              >
                Who We Work With
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We serve a diverse range of clients across the precious metals ecosystem
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audiences.map((audience, index) => (
                <div key={index} className="p-6 bg-background border border-border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary/50" aria-hidden="true">
                      <audience.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-2">{audience.title}</h3>
                      <p className="text-sm text-muted-foreground">{audience.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                Open to partnerships with international companies seeking premium precious metals from East Africa
              </p>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 md:py-24 px-4" aria-labelledby="blog-heading">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 
              id="blog-heading"
              className="font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-foreground mb-6"
            >
              Latest Insights
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay informed with our latest articles on precious metals, market trends, and industry news.
            </p>
            <Link to="/blog">
              <Button variant="default" size="lg">
                Read Our Blog
              </Button>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 bg-primary text-primary-foreground" aria-labelledby="cta-heading">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 
              id="cta-heading"
              className="font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-6"
            >
              Join Us in Transforming Mining
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Be part of the future of precious metals investment in East Africa. Join our waitlist today.
            </p>
            <Link to="/waitlist">
              <Button size="lg" variant="secondary" className="font-medium">
                Join the Waitlist
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-4 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Transcontinental Investments. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;