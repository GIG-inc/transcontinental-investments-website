import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const AllAboutPreciousMetals = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-xl md:text-2xl font-display font-semibold tracking-wider">
              TRANSCONTINENTAL
            </Link>
            <div className="flex items-center gap-4 md:gap-6">
              <NavLink to="/about">About</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <Link to="/waitlist">
                <Button size="sm" variant="default">
                  Join Waitlist
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

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
          <header className="mb-8 md:mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="font-medium text-primary">Investment Guide</span>
              <span>•</span>
              <time dateTime="2025-11-27">November 27, 2025</time>
              <span>•</span>
              <span>12 min read</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Everything You Need to Know About Precious Metals: A Complete Guide for Investors
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Precious metals have played a vital role in global finance, wealth preservation, and trade for thousands of years. Today, their importance continues to grow—especially in Africa, where demand for gold and other minerals remains strong across both local and international markets.
            </p>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <p className="lead">
              Whether you're a new investor or an established trader, understanding precious metals is essential for making informed, profitable decisions. This guide breaks down everything you need to know about gold, silver, platinum, and other high-value minerals.
            </p>

            <h2>What Are Precious Metals?</h2>
            <p>
              Precious metals are naturally occurring metallic elements that have high economic value due to their rarity, demand, and unique physical and chemical properties. They are commonly used in:
            </p>
            <ul>
              <li>Investment and wealth storage</li>
              <li>Jewelry and luxury products</li>
              <li>Industrial applications</li>
              <li>Electronics and technology</li>
              <li>Catalysts, batteries, and renewable energy systems</li>
            </ul>
            <p>
              The four most commonly traded precious metals are:
            </p>
            <ul>
              <li><strong>Gold (Au)</strong></li>
              <li><strong>Silver (Ag)</strong></li>
              <li><strong>Platinum (Pt)</strong></li>
              <li><strong>Palladium (Pd)</strong></li>
            </ul>
            <p>
              Rare earth minerals and strategic metals like rhodium and iridium are also gaining market attention.
            </p>

            <h2>Why Precious Metals Are Valuable</h2>
            <p>Precious metals hold value for three major reasons:</p>

            <h3>1. Rarity</h3>
            <p>
              These metals are difficult to mine, limited in supply, and expensive to extract. Their scarcity maintains long-term value.
            </p>

            <h3>2. Global Demand</h3>
            <p>
              Investment, jewelry, electronics, and industrial use combine to create constant demand across every continent.
            </p>

            <h3>3. Wealth Preservation</h3>
            <p>
              In uncertain economic times, precious metals are considered safe-haven assets that protect investor wealth.
            </p>

            <h2>Gold: The King of Precious Metals</h2>
            <p>Gold remains the most traded and trusted metal worldwide.</p>

            <h3>Key Uses of Gold</h3>
            <ul>
              <li>Jewelry (50% of global demand)</li>
              <li>Investments (coins, bars, ETFs)</li>
              <li>Central bank reserves</li>
              <li>Electronics and high-tech equipment</li>
            </ul>

            <h3>Why Investors Prefer Gold:</h3>
            <ul>
              <li>Resistant to inflation</li>
              <li>High liquidity</li>
              <li>Universally accepted</li>
              <li>Strong long-term performance</li>
            </ul>

            <h3>Gold Trading in East Africa</h3>
            <p>
              East Africa has become a gold trading hotspot due to large reserves in:
            </p>
            <ul>
              <li>Kenya</li>
              <li>Tanzania</li>
              <li>Uganda</li>
              <li>Rwanda</li>
              <li>DRC</li>
            </ul>
            <p>
              Companies like <strong>Transcontinental Investments</strong> help streamline the process by connecting miners, refiners, and investors through ethical and transparent trade systems.
            </p>

            <h2>Silver: The Industrial Power Metal</h2>
            <p>Silver is both a precious metal and an industrial metal.</p>

            <h3>Main Uses of Silver</h3>
            <ul>
              <li>Solar panels</li>
              <li>Electronics</li>
              <li>Medical equipment</li>
              <li>Jewelry</li>
              <li>Investment bullion</li>
            </ul>

            <h3>Why Silver Is Popular</h3>
            <ul>
              <li>Lower entry point than gold</li>
              <li>High industrial usage</li>
              <li>Volatile price = strong trading opportunities</li>
            </ul>
            <p>
              Silver demand is expected to keep rising due to renewable energy and electrification.
            </p>

            <h2>Platinum & Palladium: The Auto Industry Metals</h2>
            <p>
              These metals are critical for manufacturing catalytic converters used in petroleum and hybrid vehicles.
            </p>

            <h3>Platinum Uses</h3>
            <ul>
              <li>Catalysts</li>
              <li>Jewelry</li>
              <li>Chemicals</li>
              <li>Investment bars and coins</li>
            </ul>

            <h3>Palladium Uses</h3>
            <ul>
              <li>Catalytic converters</li>
              <li>Electronics</li>
              <li>Dentistry</li>
            </ul>
            <p>
              They're less popular among new investors but offer strong diversification.
            </p>

            <h2>How Precious Metal Prices Are Determined</h2>
            <p>Prices fluctuate based on:</p>

            <h3>1. Supply & Mining Output</h3>
            <p>Global production levels affect market availability.</p>

            <h3>2. Investor Demand</h3>
            <p>Economic uncertainty increases buying.</p>

            <h3>3. Global Markets</h3>
            <p>
              Commodities exchanges like London Bullion Market (LBMA) and COMEX determine daily spot prices.
            </p>

            <h3>4. Industrial Demand</h3>
            <p>
              Tech, medical, EV, and renewable sectors influence metals like silver and platinum.
            </p>

            <h3>5. Currency Strength</h3>
            <p>When the USD weakens, metal prices usually rise.</p>

            <h2>Ways to Invest in Precious Metals</h2>
            <p>There are six main ways:</p>

            <h3>1. Physical Bullion</h3>
            <p>
              Bars, coins, and ingots<br />
              ✔ High security<br />
              ✔ No counterparty risks
            </p>

            <h3>2. Digital Gold Accounts</h3>
            <p>Convenient for smaller investors.</p>

            <h3>3. ETFs (Exchange-Traded Funds)</h3>
            <p>Exposure without physical storage.</p>

            <h3>4. Mining Stocks</h3>
            <p>Invest in companies extracting metals.</p>

            <h3>5. Mutual Funds</h3>
            <p>Diversified commodity portfolios.</p>

            <h3>6. Future Precious Metals Investment Platforms (Coming 2026)</h3>
            <p>
              <strong>Transcontinental Investments</strong> is launching a mineral investment platform in 2026, allowing individuals to invest directly in mineral-backed projects and earn competitive returns.
            </p>

            <h2>Why East Africa Is Becoming a Global Precious Metals Hub</h2>
            <p>East Africa's mineral sector is rapidly growing due to:</p>
            <ul>
              <li>Rich gold deposits</li>
              <li>Expanding mining licenses</li>
              <li>Government support</li>
              <li>Increasing trade with Europe, Middle East, and Asia</li>
            </ul>
            <p>
              Countries like Kenya, Uganda, Tanzania, and Rwanda are emerging as important mineral markets.
            </p>

            <h2>Ethical Sourcing in the Precious Metals Industry</h2>
            <p>Modern investors increasingly prefer ethically sourced metals.</p>
            <p><strong>Transcontinental Investments</strong> ensures:</p>
            <ul>
              <li>Certified mining partners</li>
              <li>Transparent supply chains</li>
              <li>Traceability at every stage</li>
              <li>Environmental sustainability</li>
            </ul>
            <p>This ensures compliance with global mineral standards.</p>

            <h2>The Future of Precious Metals Investment</h2>
            <p>As global uncertainty grows, precious metals are expected to:</p>
            <ul>
              <li>Continue rising in value</li>
              <li>Play a larger role in institutional portfolios</li>
              <li>Support renewable energy technologies</li>
              <li>Attract retail investors in Africa</li>
            </ul>
            <p>
              Platforms that democratize access—like the one launching in 2026—will open up new wealth-building opportunities.
            </p>

            <h2>Final Thoughts</h2>
            <p>
              Precious metals are more than commodities—they are strategic assets that protect and grow wealth. Whether you're interested in gold, silver, platinum, or rare minerals, understanding the market gives you a major advantage.
            </p>
            <p>
              As East Africa continues to rise as a mineral powerhouse, <strong>Transcontinental Investments</strong> provides a trusted, ethical gateway for both local and international investors.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-12 md:mt-16 p-6 md:p-8 bg-secondary/50 rounded-lg border border-border">
            <h3 className="font-display text-2xl font-semibold mb-3">
              Ready to Start Your Investment Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our waitlist to be the first to access our mineral investment platform launching in early 2026.
            </p>
            <Link to="/waitlist">
              <Button size="lg">
                Join the Waitlist
              </Button>
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border py-8 md:py-12 mt-12">
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