import { Button } from "@/components/ui/button";
import { MerchantForm } from "@/components/MerchantForm";
import { Navigation } from "@/components/Navigation";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Merchant = () => {
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
        "name": "Merchant Services",
        "item": "https://transcontinentalinvestments.com/merchants"
      }
    ]
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Merchant Platform - Gold Trading Services",
    "description": "Exclusive merchant platform for buying gold from and selling gold to Transcontinental Investments. Secure B2B precious metals trading for verified buyers and sellers in East Africa.",
    "url": "https://transcontinentalinvestments.com/merchants",
    "provider": {
      "@type": "Organization",
      "name": "Transcontinental Investments",
      "url": "https://transcontinentalinvestments.com",
      "logo": "https://transcontinentalinvestments.com/logo-square.png"
    },
    "serviceType": "B2B Precious Metals Trading Platform",
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
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://transcontinentalinvestments.com/merchants"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Merchant Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gold Buying Service",
            "description": "Purchase verified, high-quality gold directly from Transcontinental Investments with competitive pricing and secure transactions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gold Selling Service",
            "description": "Sell gold directly to Transcontinental Investments at fair market prices with fast evaluation and immediate payment"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Merchant Platform | Buy from us Sell to us - Transcontinental Investments"
        description="Join our exclusive merchant platform to buy gold from us or sell gold to us. Connect with Transcontinental Investments for secure, seamless gold transactions. Launching early 2026."
        keywords="merchant platform gold, buy gold wholesale, sell gold Kenya, gold buyers East Africa, gold sellers platform, B2B gold trading, gold merchant services"
        canonical="https://transcontinentalinvestments.com/merchants"
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

      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4" aria-labelledby="merchant-heading">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-foreground">Coming Early 2026</span>
          </div>
          <h1 
            id="merchant-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-6"
          >
            Merchant Platform
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our exclusive merchant platform to buy gold from us or sell gold to us. Connect directly with Transcontinental Investments for seamless, secure B2B precious metals transactions.
          </p>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Learn more about our <Link to="/product" className="text-primary hover:underline">products and services</Link> or read <Link to="/about" className="text-primary hover:underline">about our company</Link>.
          </p>
        </div>
      </section>

      {/* What is the Merchant Platform */}
      <section className="py-12 px-4 bg-secondary/20" aria-labelledby="platform-description">
        <div className="container mx-auto max-w-4xl">
          <h2 
            id="platform-description"
            className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8 text-center"
          >
            What is the Merchant Platform?
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Our merchant platform is a specialized marketplace designed for verified buyers and sellers to trade gold directly with Transcontinental Investments. Whether you want to purchase gold from us or sell gold to us, the platform provides:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="p-6 border border-border rounded-lg bg-background">
              <h3 className="font-medium text-foreground mb-3 text-xl">For Gold Buyers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Purchase verified, high-quality gold directly from us</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Access competitive pricing and real-time market rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Secure transactions with full documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Flexible order quantities and delivery options</span>
                </li>
              </ul>
            </article>
            <article className="p-6 border border-border rounded-lg bg-background">
              <h3 className="font-medium text-foreground mb-3 text-xl">For Gold Sellers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Sell your gold directly to us at fair market prices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Fast evaluation and transparent pricing process</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Immediate payment upon agreement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Professional assessment and certification</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4" aria-labelledby="benefits-heading">
        <div className="container mx-auto max-w-4xl">
          <h2 
            id="benefits-heading"
            className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8 text-center"
          >
            Why Choose Our Merchant Platform?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              As East Africa's premier precious metals trading company, Transcontinental Investments offers a trusted, transparent, and efficient merchant platform for businesses and traders. Our platform eliminates intermediaries, reduces transaction costs, and ensures secure dealings backed by our reputation for <Link to="/about" className="text-primary hover:underline">ethical sourcing and sustainable practices</Link>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're a local gold trader, mining company, cooperative group, or international buyer, our merchant services provide the infrastructure and support you need to succeed in the precious metals market. Explore our full range of <Link to="/product" className="text-primary hover:underline">products and trading solutions</Link> or <Link to="/contact" className="text-primary hover:underline">contact us</Link> to discuss partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Merchant Application Form */}
      <section className="py-16 px-4 bg-secondary/20" aria-labelledby="application-heading">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <h2 
              id="application-heading"
              className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4"
            >
              Apply to Become a Merchant
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below to register your interest. We'll contact you when the platform launches in early 2026 with exclusive early access opportunities.
            </p>
          </div>
          
          <MerchantForm />

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Not ready to apply? <Link to="/waitlist" className="text-primary hover:underline">Join our general waitlist</Link> for platform updates.
            </p>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Merchant;