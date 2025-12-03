import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Waitlist from "./pages/Waitlist";
import Blog from "./pages/Blog";
import AllAboutPreciousMetals from "./pages/blog/AllAboutPreciousMetals";
import Products from "./pages/Products";
import GoldBuying from "./pages/products/GoldBuying";
import GoldSelling from "./pages/products/GoldSelling";
import InvestmentPlatform from "./pages/products/InvestmentPlatform";
import MiningPartnerships from "./pages/products/MiningPartnerships";
import MerchantPlatform from "./pages/products/MerchantPlatform";
import Refinery from "./pages/products/Refinery";
import InnovationHub from "./pages/products/InnovationHub";
import Merchants from "./pages/Merchants";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/all-about-precious-metals" element={<AllAboutPreciousMetals />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/gold-buying" element={<GoldBuying />} />
          <Route path="/products/gold-selling" element={<GoldSelling />} />
          <Route path="/products/investment-platform" element={<InvestmentPlatform />} />
          <Route path="/products/mining-partnerships" element={<MiningPartnerships />} />
          <Route path="/products/merchant-platform" element={<MerchantPlatform />} />
          <Route path="/products/refinery" element={<Refinery />} />
          <Route path="/products/innovation-hub" element={<InnovationHub />} />
          <Route path="/merchants" element={<Merchants />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
