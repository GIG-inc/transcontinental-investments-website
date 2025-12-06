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

  // Blog Schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Transcontinental Investments Blog",
    "description": "Expert insights on precious metals trading, mineral investments, and market trends in East Africa. Investment guides and industry analysis from Transcontinental Investments.",
    "url": "https://transcontinentalinvestments.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Transcontinental Investments",
      "logo": {
        "@type": "ImageObject",
        "url": "https://transcontinentalinvestments.com/logo-square.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "datePublished": "2025-11-27",
      "author": {
        "@type": "Organization",
        "name": "Transcontinental Investments"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Transcontinental Investments",
        "logo": {
          "@type": "ImageObject",
          "url": "https://transcontinentalinvestments.com/logo-square.png"
        }
      },
      "url": `https://transcontinentalinvestments.com/blog/${post.slug}`,
      "articleSection": post.category
    }))
  };

  // CollectionPage Schema
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Blog & Market Insights - Transcontinental Investments",
    "description": "Expert insights on precious metals trading, mineral investments, and market trends in East Africa.",
    "url": "https://transcontinentalinvestments.com/blog"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Blog & Market Insights | Precious Metals Trading - Transcontinental Investments"
        description="Expert insights on precious metals trading, mineral investments, and market trends in East Africa. Investment guides and industry analysis from Transcontinental Investments."
        keywords="precious metals blog, gold investment guide, mineral market trends, East Africa mining insights, precious metals trading tips, gold market analysis"
        canonical="https://transcontinentalinvestments.com/blog"
      />

      {/* Add Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 border-b border-border" aria-labelledby="blog-heading">
        <div className="container mx-auto max-w-4xl">
          <h1 
            id="blog-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-6"
          >
            Blog & Market Insights
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Expert guidance on precious metals trading, mineral investments, and market trends in East Africa. Stay informed with analysis and insights from Transcontinental Investments.
          </p>
          <p className="text-base text-muted-foreground mt-4">
            Looking for investment opportunities? Explore our <Link to="/products" className="text-primary hover:underline font-medium">products and trading platform</Link> or <Link to="/about" className="text-primary hover:underline font-medium">learn more about our company</Link>.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <main>
        <section className="py-12 md:py-16 px-4" aria-label="Blog posts">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article key={post.slug}>
                  <Card className="hover:shadow-lg transition-shadow h-full">
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
                        <time className="text-sm text-muted-foreground" dateTime="2025-11-27">
                          {post.date}
                        </time>
                        <Link to={`/blog/${post.slug}`}>
                          <Button variant="ghost" size="sm" className="gap-2" aria-label={`Read ${post.title}`}>
                            Read More
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>

            {/* Empty State / Coming Soon Message */}
            {blogPosts.length === 1 && (
              <div className="mt-12 text-center py-12 px-4 bg-secondary/20 rounded-lg max-w-2xl mx-auto">
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground mb-4">
                  More Insights Coming Soon
                </h2>
                <p className="text-muted-foreground mb-6">
                  We're regularly publishing new content on precious metals markets, investment strategies, and industry trends. <Link to="/waitlist" className="text-primary hover:underline font-medium">Join our waitlist</Link> to receive updates when new articles are published.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link to="/products">
                    <Button variant="outline">
                      Explore Our Products
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="default">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;