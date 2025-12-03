import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Store, TrendingUp, Handshake, Users, Factory, Lightbulb, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEO } from "@/components/SEO";

const Product = () => {
  const products = [
    {
      icon: ShoppingCart,
      title: "Gold Buying",
      description: "We purchase gold from individuals, businesses, companies, and cooperations. Transparent pricing and secure transactions.",
      status: "Active"
    },
    {
      icon: Store,
      title: "Gold Selling",
      description: "We sell premium gold to individuals, businesses, cooperations, and governments. Quality guaranteed.",
      status: "Active"
    },
    {
      icon: TrendingUp,
      title: "Investment Platform",
      description: "A comprehensive platform for investing in precious metals and mineral markets. Coming early 2026.",
      status: "Coming Early 2026"
    },
    {
      icon: Handshake,
      title: "Mining Partnerships",
      description: "We partner with miners to help them obtain licenses and support their operations.",
      status: "Active"
    },
    {
      icon: Users,
      title: "Merchant Platform",
      description: "A dedicated platform for buyers and sellers to trade gold. Join our merchant network. Rolling out early 2026.",
      status: "Coming Early 2026"
    },
    {
      icon: Factory,
      title: "Refinery",
      description: "Our own refinery facility. Development starting late 2026, operations beginning early 2027.",
      status: "Development Late 2026"
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Innovation center for mining technology and robotics. Join us in transforming the mining sector.",
      status: "Active"
    }
  ];

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://transcontinentalinvestments.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products & Trading Platform",
        "item": "https://transcontinentalinvestments.com/products"
      }
    ]
  };

  // Service Schema (Main Offering)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Precious Metals Trading & Investment Services",
    "description": "Comprehensive precious metals trading services including gold buying and selling, investment platform, mining partnerships, merchant platform, refinery services, and mining innovation solutions in East Africa.",
    "url": "https://transcontinentalinvestments.com/products",
    "provider": {
      "@type": "Organization",
      "name": "Transcontinental Investments",
      "url": "https://transcontinentalinvestments.com",
      "logo": "https://transcontinentalinvestments.com/logo-square.png"
    },
    "serviceType": "Precious Metals Trading and Investment",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Kenya"
      },
      {
        "@type": "Country",
        "name": "Uganda"
      },
      {
        "@type": "Country",
        "name": "Tanzania"
      },
      {
        "@type": "Country",
        "name": "Rwanda"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Precious Metals Products and Services",
      "itemListElement": products.map((product) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": product.title,
          "description": product.description
        }
      }))
    }
  };

  // ItemList Schema for Products
  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Transcontinental Investments Products and Services",
    "description": "Comprehensive precious metals trading products and services offered by Transcontinental Investments",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": product.title,
        "description": product.description,
        "provider": {
          "@type": "Organization",
          "name": "Transcontinental Investments"
        },
        "areaServed": {
          "@type": "Place",
          "name": "East Africa"
        },
        "serviceType": "Precious Metals Trading"
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Products & Trading Platform | Transcontinental Investments - Gold Buying, Selling & Investment"
        description="Explore Transcontinental Investments' precious metals products: gold buying & selling in East Africa, investment platform (2026), mining partnerships, merchant platform, refinery, and innovation hub. Serving East Africa and beyond."
        keywords="Transcontinental Investments products, gold buying services Kenya, gold selling services East Africa, precious metals investment platform, mining partnerships, merchant platform, gold refinery, mining innovation hub"
        canonical="https://transcontinentalinvestments.com/products"
      />

      {/* Add Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 border-b border-border/50" aria-labelledby="products-heading">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 id="products-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-6">
            Products & Trading Platform
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions across the precious metals value chain. From buying and selling to innovation and refinement.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <main>
        <section className="py-16 md:py-20 px-4" aria-label="Products and services list">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-secondary/50" aria-hidden="true">
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
                    <p className="text-xs text-muted-foreground mb-3">
                      {product.status === "Active" 
                        ? "Available now. Contact us for more information." 
                        : "Join our waitlist for early access and updates."}
                    </p>
                    <Link to={product.status === "Active" ? "/contact" : "/waitlist"}>
                      <Button variant="outline" className="w-full" aria-label={`Learn more about ${product.title}`}>
                        {product.status === "Active" ? "Contact Us" : "Join Waitlist"}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Context Section */}
            <div className="max-w-4xl mx-auto space-y-8 mt-16">
              <article className="prose prose-lg max-w-none">
                <h2 className="font-display text-3xl font-light text-foreground mb-4">
                  Why Choose Transcontinental Investments?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As East Africa's premier precious metals trading company, we provide end-to-end solutions for individuals, businesses, and institutions looking to buy, sell, or invest in gold, silver, and platinum. Our transparent pricing, ethical sourcing, and extensive network make us the trusted partner for mineral transactions across Kenya, Uganda, Tanzania, and Rwanda.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Learn more <Link to="/about" className="text-primary hover:underline">about our company</Link>, explore our <Link to="/merchant" className="text-primary hover:underline">merchant services</Link>, or <Link to="/contact" className="text-primary hover:underline">contact us</Link> to discuss your precious metals needs.
                </p>
              </article>

              <article className="bg-secondary/20 p-8 rounded-lg">
                <h2 className="font-display text-2xl font-light text-foreground mb-4">
                  Investment Platform Launch - Early 2026
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our innovative investment platform will democratize access to mineral markets, allowing individual investors to participate in mineral projects with competitive returns. Don't miss early access opportunities.
                </p>
                <Link to="/waitlist">
                  <Button size="lg" variant="default">
                    Join the Waitlist
                  </Button>
                </Link>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* SEMANTIC FOOTER WITH PRIMARY PAGES */}
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
                    <Link to="/product" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Products & Trading
                    </Link>
                  </li>
                  <li>
                    <Link to="/merchant" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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
    </div>
  );
};

export default Product;