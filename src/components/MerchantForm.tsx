import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  merchantType: z.enum(["buyer", "seller"], {
    required_error: "Please select if you want to be a buyer or seller",
  }),
});

export function MerchantForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      merchantType: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxcRPgdOHyBrvVUuqoO0VnFH_Us314ehZ_QV6doifvPE-pKCfUeXHo13uj5rQrYN3FQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: values.fullName,
            email: values.email,
            phone: values.phone,
            message: `Merchant Application - Type: ${values.merchantType === "buyer" ? "Buyer" : "Seller"}`,
          }),
        }
      );

      toast({
        title: "Application Submitted!",
        description: "We'll contact you when the merchant platform launches in early 2026.",
      });
      
      form.reset();
    } catch (err) {
      setError("Failed to submit application. Please try again.");
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-card border border-border rounded-lg p-6 md:p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
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
                <FormLabel>Email Address</FormLabel>
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
                  <Input type="tel" placeholder="+1 234 567 8900" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="merchantType"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>I want to be a:</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0 border border-border rounded-lg p-4 cursor-pointer hover:bg-secondary/50 transition-colors">
                      <FormControl>
                        <RadioGroupItem value="buyer" />
                      </FormControl>
                      <div className="flex-1">
                        <FormLabel className="font-medium cursor-pointer">
                          Buyer
                        </FormLabel>
                        <p className="text-sm text-muted-foreground mt-1">
                          I want to purchase gold from Transcontinental Investments
                        </p>
                      </div>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0 border border-border rounded-lg p-4 cursor-pointer hover:bg-secondary/50 transition-colors">
                      <FormControl>
                        <RadioGroupItem value="seller" />
                      </FormControl>
                      <div className="flex-1">
                        <FormLabel className="font-medium cursor-pointer">
                          Seller
                        </FormLabel>
                        <p className="text-sm text-muted-foreground mt-1">
                          I want to sell gold to Transcontinental Investments
                        </p>
                      </div>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {error && (
            <div className="text-sm text-destructive bg-destructive/10 p-3 rounded">
              {error}
            </div>
          )}

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
