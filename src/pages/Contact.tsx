import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        "name": "Contact Us",
        "item": "https://transcontinentalinvestments.com/contact"
      }
    ]
  };

  // ContactPage Schema
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Transcontinental Investments",
    "description": "Contact Transcontinental Investments for inquiries about gold trading, precious metals investment, mining partnerships, or business opportunities in East Africa.",
    "url": "https://transcontinentalinvestments.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Transcontinental Investments",
      "url": "https://transcontinentalinvestments.com",
      "email": "info@transcontinentalinvestments.com",
      "areaServed": ["Kenya", "Uganda", "Tanzania", "Rwanda"]
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyZ3Aucc4Di9RgSpchofWiI0rE10x6U1W5-J8xqJY6p9m4HNUOGehEXnnE3aZLf-RlD/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: values.fullName,
            email: values.email,
            phone: values.phone || "Not provided",
            message: `Subject: ${values.subject}\n\n${values.message}`,
          }),
        }
      );

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      form.reset();
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Contact Us | Get in Touch - Transcontinental Investments"
        description="Contact Transcontinental Investments for inquiries about gold trading, precious metals investment, mining partnerships, or business opportunities in East Africa. Serving Kenya, Uganda, Tanzania, and Rwanda."
        keywords="contact Transcontinental Investments, gold trading inquiry, precious metals contact, East Africa gold dealers contact, mining partnership inquiry, gold buyers Kenya contact"
        canonical="https://transcontinentalinvestments.com/contact"
      />

      {/* Add Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 bg-secondary/20" aria-labelledby="contact-heading">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 id="contact-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services or interested in partnership opportunities? We'd love to hear from you. Learn more <Link to="/about" className="text-primary hover:underline">about our company</Link>.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 md:py-24 px-4" aria-label="Contact form and information">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-light tracking-wide text-foreground mb-8">
                  Get in Touch
                </h2>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary/50">
                      <Mail className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Email</h3>
                      <a href="mailto:info@transcontinentalinvestments.com" className="text-muted-foreground hover:text-foreground transition-colors">
                        info@transcontinentalinvestments.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary/50">
                      <MapPin className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        East Africa<br />
                        Kenya, Uganda, Tanzania, Rwanda
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-medium text-foreground mb-4">Follow Us</h3>
                  <div className="flex items-center gap-3">
                    <a 
                      href="https://www.instagram.com/transcontinental_investments" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Follow us on Instagram"
                      className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-foreground" />
                    </a>
                    <a 
                      href="https://www.facebook.com/transcontinentalinvestments" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Follow us on Facebook"
                      className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-foreground" />
                    </a>
                    <a 
                      href="https://x.com/T_C_Investments" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Follow us on X (Twitter)"
                      className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-foreground" />
                    </a>
                    <a 
                      href="https://linkedin.com/company/transcontinentalinvestments" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Follow us on LinkedIn"
                      className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-foreground" />
                    </a>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-10 p-6 bg-secondary/20 rounded-lg">
                  <h3 className="font-medium text-foreground mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                        Explore Our Products & Services →
                      </Link>
                    </li>
                    <li>
                      <Link to="/merchants" className="text-muted-foreground hover:text-foreground transition-colors">
                        Become a Merchant Partner →
                      </Link>
                    </li>
                    <li>
                      <Link to="/waitlist" className="text-muted-foreground hover:text-foreground transition-colors">
                        Join Our Waitlist →
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                <h2 className="font-display text-2xl font-light tracking-wide text-foreground mb-6">
                  Send a Message
                </h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+254 700 000 000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject *</FormLabel>
                          <FormControl>
                            <Input placeholder="How can we help you?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us more about your inquiry..." 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
