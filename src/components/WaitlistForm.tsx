import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const waitlistSchema = z.object({
  fullName: z.string().trim().min(2, { message: "Full name must be at least 2 characters" }).max(100),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().max(500).optional(),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

export const WaitlistForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzJ0E8gk3exCMmf1vYoTeMC5HGDBxLXix2DWZH28py8d1OSlfm2ptrDWs-v_FwLpGN-/exec";

  const onSubmit = async (data: WaitlistFormData) => {
    setError(null);
    
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Google Apps Script requires no-cors mode
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          phone: data.phone || "",
          message: data.message || "",
        }),
      });

      // With no-cors mode, we can't read the response, so we assume success
      setIsSubmitted(true);
      form.reset();
      
      toast({
        title: "Successfully joined the waitlist!",
        description: "Please check your email for confirmation.",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error("Waitlist submission error:", err);
      setError("Failed to submit. Please try again or contact us directly.");
      
      toast({
        title: "Submission failed",
        description: "Please try again or contact waitlist@transcontinentalinvestments.com",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-secondary/20 rounded-lg border border-border animate-fade-in text-center">
        <CheckCircle2 className="mx-auto mb-4 text-primary" size={48} />
        <h3 className="font-display text-2xl font-medium text-foreground mb-2">
          Thank You!
        </h3>
        <p className="text-muted-foreground">
          Please check your inbox to confirm your subscription.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8 bg-secondary/10 rounded-lg border border-border/50">
      <div className="text-center mb-6">
        <p className="text-sm md:text-base text-muted-foreground mb-2">
          Platform launching early 2026 — secure your spot to invest in mineral markets.
        </p>
        <h3 className="font-display text-2xl md:text-3xl font-light text-foreground">
          Join the Waitlist
        </h3>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-destructive/10 border border-destructive/50 rounded-md flex items-start gap-2">
          <AlertCircle className="text-destructive flex-shrink-0 mt-0.5" size={20} />
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your full name" 
                    {...field} 
                    aria-required="true"
                  />
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
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    {...field}
                    aria-required="true"
                  />
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
                <FormLabel>Phone Number (Optional)</FormLabel>
                <FormControl>
                  <Input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    {...field}
                  />
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
                <FormLabel>Message (Optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your investment interests..." 
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={form.formState.isSubmitting}
            aria-label="Join the waitlist for Transcontinental Investments"
          >
            {form.formState.isSubmitting ? "Submitting..." : "Join the Waitlist"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
