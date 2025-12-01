import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb, Cpu, Truck, Microscope } from "lucide-react";

const InnovationHub = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-4 py-4 sm:py-6 border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/products">
            <Button variant="ghost" size="sm" className="gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Products</span>
              <span className="sm:hidden">Back</span>
            </Button>
          </Link>
          <Link to="/waitlist">
            <Button variant="default" size="sm" className="text-xs sm:text-sm px-3 sm:px-4">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-4 sm:mb-6">
            Innovation Hub
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 px-2">
            A center for innovation and research in mining technology. We're pioneering the future of mining through collaboration, technology, and sustainable practices.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-10 sm:py-12 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-foreground mb-6 sm:mb-8 text-center px-2">
            Innovation Focus Areas
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="p-4 rounded-lg bg-secondary mb-4">
                <Cpu className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground mb-2 text-xl">Mining Robotics</h3>
              <p className="text-muted-foreground">
                Developing autonomous systems and robotics for safer and more efficient mining operations.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="p-4 rounded-lg bg-secondary mb-4">
                <Microscope className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground mb-2 text-xl">Exploration Technology</h3>
              <p className="text-muted-foreground">
                Advanced geological surveying and mineral detection technologies.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="p-4 rounded-lg bg-secondary mb-4">
                <Truck className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground mb-2 text-xl">Logistics Innovation</h3>
              <p className="text-muted-foreground">
                Optimizing supply chains and transportation for the mining sector.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="p-4 rounded-lg bg-secondary mb-4">
                <Lightbulb className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-medium text-foreground mb-2 text-xl">Sustainable Mining</h3>
              <p className="text-muted-foreground">
                Environmental technologies to minimize ecological impact of mining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Robotics Initiative */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4 sm:mb-6 px-2">
            Mining Robotics Initiative
          </h2>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 sm:p-6 md:p-8">
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
              We are in talks to develop cutting-edge robotics solutions for the mining industry. This initiative aims to:
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Improve worker safety by automating dangerous tasks</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Increase operational efficiency through AI-powered systems</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Enable 24/7 operations with autonomous equipment</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Reduce environmental impact through precision mining</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-6 text-center">
            Collaborate With Us
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            The Innovation Hub welcomes researchers, engineers, entrepreneurs, and mining professionals to collaborate on groundbreaking projects that will transform the mining sector.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-border rounded-lg bg-background text-center">
              <h3 className="font-medium text-foreground mb-2">Researchers</h3>
              <p className="text-sm text-muted-foreground">Access to real-world data and field testing opportunities.</p>
            </div>
            <div className="p-6 border border-border rounded-lg bg-background text-center">
              <h3 className="font-medium text-foreground mb-2">Startups</h3>
              <p className="text-sm text-muted-foreground">Resources and mentorship to scale mining technology solutions.</p>
            </div>
            <div className="p-6 border border-border rounded-lg bg-background text-center">
              <h3 className="font-medium text-foreground mb-2">Industry Partners</h3>
              <p className="text-sm text-muted-foreground">Joint development of innovative solutions for industry challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Markets */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-6">
            Expanding Into New Markets
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            While we currently focus on precious metals, our Innovation Hub is researching opportunities in other mining sectors including:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-medium text-foreground mb-2">Industrial Minerals</h3>
              <p className="text-sm text-muted-foreground">Limestone, graphite, and rare earth elements</p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-medium text-foreground mb-2">Energy Minerals</h3>
              <p className="text-sm text-muted-foreground">Lithium, cobalt for battery production</p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-medium text-foreground mb-2">Base Metals</h3>
              <p className="text-sm text-muted-foreground">Copper, zinc, nickel for construction and manufacturing</p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-medium text-foreground mb-2">Gemstones</h3>
              <p className="text-sm text-muted-foreground">Tanzanite, emeralds, and other precious stones</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide mb-6">
            Join the Innovation
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Be part of transforming the mining industry through technology and innovation.
          </p>
          <Link to="/waitlist">
            <Button size="lg" variant="secondary">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Transcontinental Investments. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default InnovationHub;
