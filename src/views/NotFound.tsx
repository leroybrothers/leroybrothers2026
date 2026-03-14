import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 md:px-12">
      <div className="text-center max-w-xl">
        <h1 className="text-8xl md:text-9xl font-bold text-muted-foreground/20 mb-8">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="btn-museum inline-flex items-center"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </a>
      </div>
    </section>
  );
};

export default NotFound;
