import { WaitlistForm } from "@/components/WaitlistForm";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Waitlist = () => {
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
        "name": "Join Waitlist",
        "item": "https://transcontinentalinvestments.com/waitlist"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Join Waitlist | Transcontinental Investments - Early Access to Investment Platform"
        description="Join the waitlist for Transcontinental Investments' mineral investment platform. Be among the first to access gold, silver, and platinum investment opportunities in East Africa. Launching 2026."
        keywords="investment platform waitlist, precious metals investment, early access mineral trading, Transcontinental Investments waitlist, gold investment Kenya, mineral trading East Africa"
        canonical="https://transcontinentalinvestments.com/waitlist"
      />

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navigation />

      {/* Waitlist Section */}
      <main className="flex-grow">
        <section className="py-16 md:py-24 px-4" aria-labelledby="waitlist-heading">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <h1 
                id="waitlist-heading"
                className="font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-foreground mb-6"
              >
                Join the Waitlist
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Be among the first to access our investment platform and secure your position in the future of mineral markets. Our platform launches in early 2026.
              </p>
            </div>
            
            <WaitlistForm />

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                By joining, you'll receive updates on our platform launch, market insights, and exclusive early-access opportunities.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Waitlist;
