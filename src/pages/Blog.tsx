import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Blog | Insights on Precious Metals Trading - Transcontinental Investments"
        description="Expert insights on precious metals trading, mineral investments, and market trends in East Africa. Investment guides and industry analysis."
        keywords="precious metals blog, gold investment guide, mineral market trends, East Africa mining insights, precious metals trading tips"
        canonical="https://transcontinentalinvestments.com/blog"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 md:py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Insights & Resources
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Expert guidance on precious metals trading, mineral investments, and market trends in East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Transcontinental Investments. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
