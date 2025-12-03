import { Navigation } from "@/components/Navigation";
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
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

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
        title="Contact Us | Transcontinental Investments - Get in Touch"
        description="Contact Transcontinental Investments for inquiries about gold trading, precious metals investment, mining partnerships, or business opportunities in East Africa."
        keywords="contact Transcontinental Investments, gold trading inquiry, precious metals contact, East Africa gold dealers contact, mining partnership inquiry"
        canonical="https://transcontinentalinvestments.com/contact"
      />

      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 bg-secondary/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services or interested in partnership opportunities? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 md:py-24 px-4">
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
                      className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-foreground" />
                    </a>
                    <a 
                      href="https://www.facebook.com/transcontinentalinvestments" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-foreground" />
                    </a>
                    <a 
                      href="https://x.com/T_C_Investments" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-foreground" />
                    </a>
                    <a 
                      href="https://linkedin.com/company/transcontinentalinvestments" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-foreground" />
                    </a>
                  </div>
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

export default Contact;
