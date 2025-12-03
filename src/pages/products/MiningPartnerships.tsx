import { Button } from "@/components/ui/button";
import { Handshake, FileCheck, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const MiningPartnerships = () => {
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
        "name": "Products & Trading",
        "item": "https://transcontinentalinvestments.com/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Mining Partnerships",
        "item": "https://transcontinentalinvestments.com/products/mining-partnerships"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Mining Partnerships | Support for Miners - Transcontinental Investments"
        description="Partner with us for mining license support and operational assistance. We help miners obtain licenses and provide comprehensive support for mining operations in East Africa."
        keywords="mining partnerships Kenya, mining license support, mining operations support, partner with miners East Africa, mining assistance Kenya"
        canonical="https://transcontinentalinvestments.com/products/mining-partnerships"
      />

      {/* Add Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 px-4" aria-labelledby="mining-heading">
          <div className="container mx-auto max-w-4xl">
            <h1 id="mining-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-6">
              Mining Partnerships
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We partner with miners across East Africa to help them obtain necessary licenses, access equipment, and scale their operations sustainably.
            </p>
            <p className="text-sm text-muted-foreground">
              <Link to="/products" className="text-primary hover:underline">← Back to Products</Link>
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-12 px-4 bg-secondary/20" aria-labelledby="support-services">
          <div className="container mx-auto max-w-4xl">
            <h2 id="support-services" className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-12 text-center">
              How We Support Miners
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <div className="p-4 rounded-lg bg-secondary mb-4">
                  <FileCheck className="h-8 w-8 text-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-medium text-foreground mb-2 text-xl">License Acquisition</h3>
                <p className="text-muted-foreground">
                  Guidance and support through the licensing process, ensuring compliance with all regulations.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="p-4 rounded-lg bg-secondary mb-4">
                  <Handshake className="h-8 w-8 text-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-medium text-foreground mb-2 text-xl">Equipment Access</h3>
                <p className="text-muted-foreground">
                  Help miners purchase and access modern mining equipment to improve productivity.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="p-4 rounded-lg bg-secondary mb-4">
                  <Users className="h-8 w-8 text-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-medium text-foreground mb-2 text-xl">Technical Training</h3>
                <p className="text-muted-foreground">
                  Capacity building and training programs for safe and efficient mining practices.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="p-4 rounded-lg bg-secondary mb-4">
                  <TrendingUp className="h-8 w-8 text-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-medium text-foreground mb-2 text-xl">Market Access</h3>
                <p className="text-muted-foreground">
                  Connect miners with buyers and provide fair pricing for their minerals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4" aria-labelledby="partnership-benefits">
          <div className="container mx-auto max-w-4xl">
            <h2 id="partnership-benefits" className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8">
              Partnership Benefits
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-medium text-foreground mb-2">Legal Compliance</h3>
                <p className="text-muted-foreground">Navigate the regulatory landscape with expert guidance and support.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-medium text-foreground mb-2">Financial Support</h3>
                <p className="text-muted-foreground">Access to financing options for equipment and operational costs.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-medium text-foreground mb-2">Sustainable Practices</h3>
                <p className="text-muted-foreground">Implement environmentally responsible mining methods.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-medium text-foreground mb-2">Long-term Relationships</h3>
                <p className="text-muted-foreground">Build lasting partnerships that benefit all stakeholders.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Can Partner */}
        <section className="py-12 px-4 bg-secondary/20" aria-labelledby="who-can-partner">
          <div className="container mx-auto max-w-4xl">
            <h2 id="who-can-partner" className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-6 text-center">
              Who Can Partner With Us
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              We work with artisanal miners, small-scale mining operations, cooperative groups, and established mining companies looking to expand their operations in East Africa. <Link to="/contact" className="text-primary hover:underline">Contact us</Link> to discuss partnership opportunities.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground" aria-labelledby="mining-cta">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 id="mining-cta" className="font-display text-3xl md:text-4xl font-light tracking-wide mb-6">
              Become a Partner
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join our network of mining partners and grow your operations with our support.
            </p>
            <Link to="/waitlist">
              <Button size="lg" variant="secondary">
                Join Waitlist
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MiningPartnerships;
