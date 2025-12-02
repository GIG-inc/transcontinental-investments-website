import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Globe, Zap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEO } from "@/components/SEO";

const AllAboutPreciousMetals = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Everything About Precious Metals | Complete Investment Guide 2025"
        description="Complete guide to precious metals investment including gold, silver, platinum, and palladium. Learn about the East African mineral market and investment opportunities."
        keywords="precious metals guide, gold investment guide, silver platinum investment, precious metals East Africa, mineral investment guide, gold market Kenya"
        canonical="https://transcontinentalinvestments.com/blog/all-about-precious-metals"
        ogType="article"
      />
      <Navigation />

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link to="/blog" className="inline-block mb-8">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="font-medium text-primary">Investment Guide</span>
              <span>•</span>
              <time dateTime="2025-11-27">November 27, 2025</time>
              <span>•</span>
              <span>12 min read</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Everything You Need to Know About Precious Metals: A Complete Guide for Investors
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Precious metals have played a vital role in global finance, wealth preservation, and trade for thousands of years. Today, their importance continues to grow—especially in Africa, where demand for gold and other minerals remains strong across both local and international markets.
            </p>
          </header>

          {/* Lead Paragraph */}
          <div className="mb-12 p-6 bg-secondary/30 rounded-lg border-l-4 border-primary">
            <p className="text-lg leading-relaxed">
              Whether you're a new investor or an established trader, understanding precious metals is essential for making informed, profitable decisions. This guide breaks down everything you need to know about gold, silver, platinum, and other high-value minerals.
            </p>
          </div>

          {/* Article Body */}
          <div className="space-y-12">
            {/* Section 1: What Are Precious Metals */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">What Are Precious Metals?</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Precious metals are naturally occurring metallic elements that have high economic value due to their rarity, demand, and unique physical and chemical properties.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-secondary/20 rounded-lg">
                  <h4 className="font-semibold mb-3">Common Uses</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Investment and wealth storage</li>
                    <li>• Jewelry and luxury products</li>
                    <li>• Industrial applications</li>
                    <li>• Electronics and technology</li>
                    <li>• Renewable energy systems</li>
                  </ul>
                </div>
                <div className="p-4 bg-secondary/20 rounded-lg">
                  <h4 className="font-semibold mb-3">Most Traded Metals</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Gold (Au)</strong></li>
                    <li>• <strong>Silver (Ag)</strong></li>
                    <li>• <strong>Platinum (Pt)</strong></li>
                    <li>• <strong>Palladium (Pd)</strong></li>
                  </ul>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Rare earth minerals and strategic metals like rhodium and iridium are also gaining market attention.
              </p>
            </section>

            {/* Section 2: Why They're Valuable */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Why Precious Metals Are Valuable</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-secondary/20 rounded-lg">
                  <Shield className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-3">Rarity</h3>
                  <p className="text-sm text-muted-foreground">
                    Difficult to mine, limited in supply, and expensive to extract. Their scarcity maintains long-term value.
                  </p>
                </div>
                
                <div className="p-6 bg-secondary/20 rounded-lg">
                  <Globe className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-3">Global Demand</h3>
                  <p className="text-sm text-muted-foreground">
                    Investment, jewelry, electronics, and industrial use create constant demand across every continent.
                  </p>
                </div>
                
                <div className="p-6 bg-secondary/20 rounded-lg">
                  <TrendingUp className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-3">Wealth Preservation</h3>
                  <p className="text-sm text-muted-foreground">
                    Safe-haven assets that protect investor wealth during uncertain economic times.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Gold */}
            <section className="bg-gradient-to-br from-yellow-500/5 to-amber-500/5 p-8 rounded-xl border border-yellow-500/10">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Gold: The King of Precious Metals</h2>
              <p className="text-muted-foreground mb-6">Gold remains the most traded and trusted metal worldwide.</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Key Uses</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Jewelry (50% of global demand)</li>
                    <li>• Investments (coins, bars, ETFs)</li>
                    <li>• Central bank reserves</li>
                    <li>• Electronics and high-tech equipment</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-3">Why Investors Prefer Gold</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Resistant to inflation</li>
                    <li>• High liquidity</li>
                    <li>• Universally accepted</li>
                    <li>• Strong long-term performance</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-background/50 rounded-lg">
                <h4 className="font-semibold mb-3">Gold Trading in East Africa</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  East Africa has become a gold trading hotspot due to large reserves in Kenya, Tanzania, Uganda, Rwanda, and DRC.
                </p>
                <p className="text-sm text-muted-foreground">
                  Companies like <strong>Transcontinental Investments</strong> help streamline the process by connecting miners, refiners, and investors through ethical and transparent trade systems.
                </p>
              </div>
            </section>

            {/* Section 4: Silver */}
            <section className="bg-gradient-to-br from-slate-400/5 to-zinc-400/5 p-8 rounded-xl border border-slate-400/10">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Silver: The Industrial Power Metal</h2>
              <p className="text-muted-foreground mb-6">Silver is both a precious metal and an industrial metal.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Main Uses</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Solar panels</li>
                    <li>• Electronics</li>
                    <li>• Medical equipment</li>
                    <li>• Jewelry</li>
                    <li>• Investment bullion</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-3">Why Silver Is Popular</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Lower entry point than gold</li>
                    <li>• High industrial usage</li>
                    <li>• Volatile price = strong trading opportunities</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    Silver demand is expected to keep rising due to renewable energy and electrification.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Platinum & Palladium */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Platinum & Palladium: The Auto Industry Metals</h2>
              <p className="text-muted-foreground mb-6">
                These metals are critical for manufacturing catalytic converters used in petroleum and hybrid vehicles.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-secondary/20 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Platinum Uses</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Catalysts</li>
                    <li>• Jewelry</li>
                    <li>• Chemicals</li>
                    <li>• Investment bars and coins</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-secondary/20 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Palladium Uses</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Catalytic converters</li>
                    <li>• Electronics</li>
                    <li>• Dentistry</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                They're less popular among new investors but offer strong diversification.
              </p>
            </section>

            {/* Section 6: Price Determination */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">How Precious Metal Prices Are Determined</h2>
              
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-secondary/20 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Supply & Mining Output</h4>
                    <p className="text-sm text-muted-foreground">Global production levels affect market availability.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-secondary/20 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Investor Demand</h4>
                    <p className="text-sm text-muted-foreground">Economic uncertainty increases buying.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-secondary/20 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Global Markets</h4>
                    <p className="text-sm text-muted-foreground">Commodities exchanges like London Bullion Market (LBMA) and COMEX determine daily spot prices.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-secondary/20 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">4</div>
                  <div>
                    <h4 className="font-semibold mb-1">Industrial Demand</h4>
                    <p className="text-sm text-muted-foreground">Tech, medical, EV, and renewable sectors influence metals like silver and platinum.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-secondary/20 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">5</div>
                  <div>
                    <h4 className="font-semibold mb-1">Currency Strength</h4>
                    <p className="text-sm text-muted-foreground">When the USD weakens, metal prices usually rise.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Investment Methods */}
            <section className="bg-primary/5 p-8 rounded-xl">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Ways to Invest in Precious Metals</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-background rounded-lg border border-border">
                  <h4 className="font-semibold mb-2">1. Physical Bullion</h4>
                  <p className="text-sm text-muted-foreground mb-2">Bars, coins, and ingots</p>
                  <p className="text-sm text-primary">✔ High security • No counterparty risks</p>
                </div>
                
                <div className="p-4 bg-background rounded-lg border border-border">
                  <h4 className="font-semibold mb-2">2. Digital Gold Accounts</h4>
                  <p className="text-sm text-muted-foreground">Convenient for smaller investors.</p>
                </div>
                
                <div className="p-4 bg-background rounded-lg border border-border">
                  <h4 className="font-semibold mb-2">3. ETFs (Exchange-Traded Funds)</h4>
                  <p className="text-sm text-muted-foreground">Exposure without physical storage.</p>
                </div>
                
                <div className="p-4 bg-background rounded-lg border border-border">
                  <h4 className="font-semibold mb-2">4. Mining Stocks</h4>
                  <p className="text-sm text-muted-foreground">Invest in companies extracting metals.</p>
                </div>
                
                <div className="p-4 bg-background rounded-lg border border-border">
                  <h4 className="font-semibold mb-2">5. Mutual Funds</h4>
                  <p className="text-sm text-muted-foreground">Diversified commodity portfolios.</p>
                </div>
                
                <div className="p-4 bg-background rounded-lg border border-primary">
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">6. Future Precious Metals Investment Platforms (Coming 2026)</h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>Transcontinental Investments</strong> is launching a mineral investment platform in 2026, allowing individuals to invest directly in mineral-backed projects and earn competitive returns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: East Africa Hub */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Why East Africa Is Becoming a Global Precious Metals Hub</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-muted-foreground mb-4">East Africa's mineral sector is rapidly growing due to:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Rich gold deposits</li>
                    <li>• Expanding mining licenses</li>
                    <li>• Government support</li>
                    <li>• Increasing trade with Europe, Middle East, and Asia</li>
                  </ul>
                </div>
                <div className="p-6 bg-secondary/20 rounded-lg">
                  <h4 className="font-semibold mb-3">Emerging Markets</h4>
                  <p className="text-sm text-muted-foreground">
                    Countries like Kenya, Uganda, Tanzania, and Rwanda are emerging as important mineral markets.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Ethical Sourcing */}
            <section className="bg-secondary/30 p-8 rounded-xl">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Ethical Sourcing in the Precious Metals Industry</h2>
              <p className="text-muted-foreground mb-6">Modern investors increasingly prefer ethically sourced metals.</p>
              
              <div className="p-6 bg-background rounded-lg border border-border">
                <h4 className="font-semibold mb-4">Transcontinental Investments ensures:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p className="text-sm text-muted-foreground">Certified mining partners</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p className="text-sm text-muted-foreground">Transparent supply chains</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p className="text-sm text-muted-foreground">Traceability at every stage</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p className="text-sm text-muted-foreground">Environmental sustainability</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">This ensures compliance with global mineral standards.</p>
              </div>
            </section>

            {/* Section 10: Future Outlook */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">The Future of Precious Metals Investment</h2>
              <p className="text-muted-foreground mb-6">As global uncertainty grows, precious metals are expected to:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-secondary/20 rounded-lg">
                  <p className="text-sm">• Continue rising in value</p>
                </div>
                <div className="p-4 bg-secondary/20 rounded-lg">
                  <p className="text-sm">• Play a larger role in institutional portfolios</p>
                </div>
                <div className="p-4 bg-secondary/20 rounded-lg">
                  <p className="text-sm">• Support renewable energy technologies</p>
                </div>
                <div className="p-4 bg-secondary/20 rounded-lg">
                  <p className="text-sm">• Attract retail investors in Africa</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mt-6">
                Platforms that democratize access—like the one launching in 2026—will open up new wealth-building opportunities.
              </p>
            </section>

            {/* Final Thoughts */}
            <section className="border-t border-border pt-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Final Thoughts</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Precious metals are more than commodities—they are strategic assets that protect and grow wealth. Whether you're interested in gold, silver, platinum, or rare minerals, understanding the market gives you a major advantage.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As East Africa continues to rise as a mineral powerhouse, <strong>Transcontinental Investments</strong> provides a trusted, ethical gateway for both local and international investors.
              </p>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Investment Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Join our waitlist to be the first to access our mineral investment platform launching in early 2026.
            </p>
            <Link to="/waitlist">
              <Button size="lg" className="gap-2">
                Join the Waitlist
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border py-8 md:py-12">
        <div className="container mx-auto px-4">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} Transcontinental Investments. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AllAboutPreciousMetals;