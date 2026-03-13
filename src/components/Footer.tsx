import { useState } from "react";
import { ArrowRight, Instagram, ShoppingCart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import ContactDialog from "./ContactDialog";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email });

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Already subscribed",
            description: "This email is already on our list.",
          });
        } else {
          throw error;
        }
      } else {
        setSubscribed(true);
        setEmail("");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="border-t border-border bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="max-w-content mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-background/50 block mb-4">
                Join the Network
              </span>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Subscribe to Updates
              </h3>
              <p className="text-background/60 text-sm max-w-md">
                Receive rare transmissions about new works, exhibitions, and the evolution of our practice.
              </p>
            </div>
            
            <div>
              {subscribed ? (
                <div className="font-mono text-sm text-background/80">
                  ✓ You're now part of the network
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent border border-background/30 px-6 py-4 font-mono text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-background transition-colors"
                    required
                  />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.25em] border border-background px-8 py-4 hover:bg-background hover:text-foreground transition-all duration-500 disabled:opacity-50"
                  >
                    {isLoading ? "..." : "Subscribe"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-content mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="font-display text-2xl font-bold uppercase tracking-[0.1em] block mb-6">
              Leroy Brothers
            </a>
            <p className="text-sm text-background/60 leading-relaxed max-w-sm">
              Contemporary art collective interrogating identity, technology, and 
              the mechanisms of the art world since 1997.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-background/50 block mb-6">
              Navigate
            </span>
            <nav className="flex flex-col gap-4">
              <a 
                href="/" 
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                The Archive
              </a>
              <a 
                href="/artworks" 
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                The Machine
              </a>
              <a 
                href="/exhibitions" 
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                The Ledger
              </a>
              <a 
                href="/about" 
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                The Collective
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-background/50 block mb-6">
              Connect
            </span>
            <div className="flex flex-col gap-4">
              <ContactDialog>
                <button className="text-sm text-background/70 hover:text-background transition-colors font-mono text-left">
                  hello@leroybrothers.com
                </button>
              </ContactDialog>
              <a 
                href="https://www.leroybrothers.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                leroybrothers.com
              </a>
              <a 
                href="https://www.toileblanchecontemporary.com/artists/29-leroy-brothers/works/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
              >
                Acquire Works
                <ShoppingCart className="w-[18px] h-[18px]" strokeWidth={2.5} />
              </a>
              <a 
                href="https://www.instagram.com/leroybrothers/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
              >
                Follow us
                <Instagram className="w-5 h-5" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono text-xs text-background/40">
            © {new Date().getFullYear()} Leroy Brothers. All rights reserved.
          </p>
          <p className="font-mono text-xs text-background/40">
            Brutalist aesthetics, post-internet ethics
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;