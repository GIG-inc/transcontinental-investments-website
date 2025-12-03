import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Blog = () => {
  const blogPosts = [
    {
      slug: "all-about-precious-metals",
      title: "Everything You Need to Know About Precious Metals",
      description: "A complete guide for investors covering gold, silver, platinum, palladium, and the growing East African mineral market.",
      date: "November 27, 2025",
      readTime: "12 min read",
      category: "Investment Guide",
    },
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
        "name": "Blog & Market Insights",
        "item": "https://transcontinentalinvestments.com/blog"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Blog & Market Insights | Precious Metals Trading News - Transcontinental Investments"
        description="Expert insights on precious metals trading, mineral investments, and market trends in East Africa. Investment guides and industry analysis from Transcontinental Investments."
        keywords="precious metals blog, gold investment guide, mineral market trends, East Africa mining insights, precious metals trading tips, gold market news Kenya"
        canonical="https://transcontinentalinvestments.com/blog"
      />

      {/* Add Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="py-12 md:py-20 border-b border-border" aria-labelledby="blog-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 id="blog-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Blog & Market Insights
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Expert guidance on precious metals trading, mineral investments, and market trends in East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <main className="flex-1">
        <section className="py-12 md:py-16" aria-label="Blog posts">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="font-medium text-primary">{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-2xl mb-2">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="gap-2">
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Context */}
            <div className="mt-16 max-w-2xl mx-auto text-center">
              <h2 className="font-display text-2xl md:text-3xl font-light text-foreground mb-4">
                Stay Informed
              </h2>
              <p className="text-muted-foreground mb-6">
                Our blog covers the latest developments in precious metals markets, investment strategies, and industry news. Learn more <Link to="/about" className="text-primary hover:underline">about our company</Link> or explore our <Link to="/products" className="text-primary hover:underline">products and services</Link>.
              </p>
              <Link to="/waitlist">
                <Button variant="default" size="lg">
                  Join Our Waitlist
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
