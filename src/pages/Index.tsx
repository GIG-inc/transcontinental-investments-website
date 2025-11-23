import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center animate-fade-in-up">
        <div className="mb-12 flex justify-center">
          <img 
            src={logo} 
            alt="Transcontinental Investments" 
            className="h-auto w-full max-w-md md:max-w-lg"
          />
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-light tracking-wider text-foreground">
          COMING SOON
        </h1>
      </div>
    </main>
  );
};

export default Index;
