import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SEO 
        title="404 - Page Not Found | Transcontinental Investments"
        description="The page you are looking for could not be found. Return to the homepage to explore our precious metals trading and investment services."
        canonical="https://transcontinentalinvestments.com/404"
      />
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="mb-4 text-6xl md:text-8xl font-bold text-foreground">404</h1>
        <p className="mb-2 text-2xl md:text-3xl font-medium text-foreground">Page Not Found</p>
        <p className="mb-8 text-base md:text-lg text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button size="lg" variant="default">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
