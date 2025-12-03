import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Globe, Users, Leaf, Target, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { SEO } from "@/components/SEO";

const About = () => {
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
        "name": "About Transcontinental Investments",
        "item": "https://transcontinentalinvestments.com/about"
      }
    ]
  };

  // AboutPage Schema
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Transcontinental Investments",
    "description": "Learn about Transcontinental Investments, a premier precious metals trading and mineral investment company in East Africa specializing in gold, silver, and platinum trade.",
    "url": "https://transcontinentalinvestments.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Transcontinental Investments",
      "url": "https://transcontinentalinvestments.com",
      "logo": "https://transcontinentalinvestments.com/logo-square.png",
      "description": "Premier precious metals trading and mineral investment company based in East Africa. We specialize in connecting miners, refiners, investors, corporations, and financial institutions through transparent and ethical mineral trade.",
      "foundingLocation": {
        "@type": "Place",
        "name": "East Africa"
      },
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
      "sameAs": [
        "https://www.instagram.com/transcontinental_investments",
        "https://www.facebook.com/transcontinentalinvestments",
        "https://x.com/T_C_Investments",
        "https://linkedin.com/company/transcontinentalinvestments"
      ]
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What minerals does Transcontinental Investments trade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Transcontinental Investments specializes in precious metals including gold, silver, and platinum, as well as rare earth elements and construction minerals. Our portfolio continues to expand based on market demand and opportunities across East Africa."
        }
      },
      {
        "@type": "Question",
        "name": "When will the Transcontinental Investments platform launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our innovative investment platform is scheduled to launch in early 2026. Join our waitlist to receive exclusive updates and early access opportunities to invest in precious metals and minerals."
        }
      },
      {
        "@type": "Question",
        "name": "How does Transcontinental Investments ensure ethical sourcing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We partner exclusively with certified suppliers who meet international standards for responsible mining. Our supply chain includes comprehensive verification and traceability measures to ensure ethical mineral sourcing across East Africa."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Transcontinental Investments | Leading Precious Metals Trading Company in East Africa"
        description="Learn about Transcontinental Investments, East Africa's premier precious metals trading and mineral investment company. We connect miners, refiners, investors, and institutions through ethical gold, silver, and platinum trade."
        keywords="about Transcontinental Investments, precious metals company East Africa, ethical mineral sourcing, sustainable mining, gold trading Kenya, mineral investment company, silver platinum trading Africa"
        canonical="https://transcontinentalinvestments.com/about"
      />

      {/* Add Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="about-hero py-16 md:py-24 px-4" aria-labelledby="about-heading">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 
            id="about-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-6"
          >
            About Transcontinental Investments
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Premier gold, silver, and platinum trading company connecting miners, investors, and institutions across East Africa and Beyond.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 pb-20">
        
        {/* Company Overview */}
        <section className="mb-16 animate-fade-in" aria-labelledby="who-we-are">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="text-primary" size={28} aria-hidden="true" />
            <h2 id="who-we-are" className="font-display text-3xl md:text-4xl font-light text-foreground">
              Who We Are
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Transcontinental Investments</strong> is a premier precious metals trading and mineral investment company based in East Africa. We specialize in connecting miners, refiners, investors, corporations, and financial institutions through transparent and ethical mineral trade.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our expertise spans <strong>gold, silver, platinum</strong>, and other valuable minerals, creating reliable supply chains that benefit all stakeholders in the mineral sector ecosystem across Kenya, Uganda, Tanzania, and Rwanda.
          </p>
        </section>

        {/* Mission */}
        <section className="mb-16 animate-fade-in" aria-labelledby="mission">
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-primary" size={28} aria-hidden="true" />
            <h2 id="mission" className="font-display text-3xl md:text-4xl font-light text-foreground">
              Our Mission
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            We invest in and actively grow the mineral sector by exploring opportunities in rare earth elements and construction minerals. Our mission is to empower investors with transparent access to mineral markets while supporting sustainable extraction and ethical sourcing practices across Africa.
          </p>
        </section>

        {/* What We Do */}
        <section className="mb-16 animate-fade-in" aria-labelledby="what-we-do">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="text-primary" size={28} aria-hidden="true" />
            <h2 id="what-we-do" className="font-display text-3xl md:text-4xl font-light text-foreground">
              What We Do
            </h2>
          </div>
          
          <div className="space-y-8">
            <article>
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3">
                Precious Metals Trading
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We facilitate the buying and selling of <strong>gold, silver, platinum</strong>, and valuable minerals. Our extensive network ensures competitive pricing and reliable delivery for institutional and individual clients across East Africa. Learn more about our <Link to="/product" className="text-primary hover:underline">products and trading platform</Link>.
              </p>
            </article>

            <article>
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3">
                Distribution & Logistics
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Through strategic partnerships with miners, refiners, and banks, we manage the complete supply chain from extraction to delivery, ensuring quality assurance and timely fulfillment. Explore our <Link to="/merchant" className="text-primary hover:underline">merchant services</Link> for suppliers and traders.
              </p>
            </article>

            <article>
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3">
                Investment Platform <span className="text-primary">(Launching Early 2026)</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Our innovative investment platform will democratize access to mineral markets. Individual investors can contribute funds to mineral projects and receive returns with competitive interest after a predetermined period.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Investors will have the flexibility to reinvest fully or partially, creating sustainable wealth-building opportunities through tangible asset exposure. <Link to="/waitlist" className="text-primary hover:underline">Join our waitlist</Link> for early access.
              </p>
            </article>

            <article>
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3">
                Portfolio Expansion
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We continuously explore rare earth elements and construction minerals, positioning our clients at the forefront of emerging commodity markets with significant growth potential. Read our <Link to="/blog" className="text-primary hover:underline">blog</Link> for the latest market insights.
              </p>
            </article>
          </div>
        </section>

        {/* Sustainable Practices */}
        <section className="mb-16 animate-fade-in" aria-labelledby="sustainability">
          <div className="flex items-center gap-3 mb-6">
            <Leaf className="text-primary" size={28} aria-hidden="true" />
            <h2 id="sustainability" className="font-display text-3xl md:text-4xl font-light text-foreground">
              Sustainable Practices & Ethical Sourcing
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Ethical sourcing</strong> and sustainable supply chain management are fundamental to our operations. We work exclusively with certified partners who adhere to responsible mining practices across East Africa.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our commitment to innovation drives us to continuously improve transparency, traceability, and environmental stewardship throughout the mineral value chain.
          </p>
        </section>

        {/* Vision */}
        <section className="mb-16 animate-fade-in" aria-labelledby="vision">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-primary" size={28} aria-hidden="true" />
            <h2 id="vision" className="font-display text-3xl md:text-4xl font-light text-foreground">
              Our Vision
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            To become a global leader in mineral investments by expanding our portfolio across continents, driving innovation in mining technologies, and creating accessible investment opportunities that generate sustainable returns for individuals and institutions worldwide.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-16 animate-fade-in" aria-labelledby="faq">
          <h2 id="faq" className="font-display text-3xl md:text-4xl font-light text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <article className="border-l-2 border-primary pl-6">
              <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-2">
                What minerals does Transcontinental Investments trade?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in precious metals including <strong>gold, silver, and platinum</strong>, as well as rare earth elements and construction minerals. Our portfolio continues to expand based on market demand and opportunities across East Africa.
              </p>
            </article>
            <article className="border-l-2 border-primary pl-6">
              <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-2">
                When will the investment platform launch?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our innovative investment platform is scheduled to launch in <strong>early 2026</strong>. Join our waitlist to receive exclusive updates and early access opportunities.
              </p>
            </article>
            <article className="border-l-2 border-primary pl-6">
              <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-2">
                How does Transcontinental Investments ensure ethical sourcing?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We partner exclusively with certified suppliers who meet international standards for responsible mining. Our supply chain includes comprehensive verification and traceability measures.
              </p>
            </article>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 px-6 bg-secondary/30 rounded-lg animate-fade-in" aria-labelledby="cta">
          <h2 id="cta" className="font-display text-2xl md:text-3xl font-light text-foreground mb-4">
            Ready to Invest in the Future?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Platform launching early 2026 — secure your spot to access mineral markets with confidence and transparency.
          </p>
          <Link to="/waitlist">
            <Button variant="default" size="lg" className="text-base">
              Join the Waitlist Today
            </Button>
          </Link>
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

export default About;