import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactDialog from "./ContactDialog";

interface HeaderProps {
  currentPath?: string;
}

const Header = ({ currentPath = "/" }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pathname, setPathname] = useState(currentPath);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/art", label: "The Archive", description: "All Projects" },
    { href: "/artworks", label: "The Machine", description: "Artworks & Algorithms" },
    { href: "/exhibitions", label: "The Ledger", description: "Exhibitions & NFTs" },
    { href: "/about", label: "The Practice", description: "" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-background/95 backdrop-blur-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <a 
              href="/" 
              className="font-display text-lg md:text-xl font-bold uppercase tracking-[0.1em] hover:opacity-60 transition-opacity duration-500"
            >
              Leroy Brothers
            </a>

            {/* Menu Toggle - Always Visible */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 w-12 h-12 flex items-center justify-center group"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col items-end gap-1.5">
                <motion.span 
                  className="block h-px bg-foreground transition-all duration-300"
                  animate={{ 
                    width: isMenuOpen ? 24 : 24,
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 4 : 0
                  }}
                />
                <motion.span 
                  className="block h-px bg-foreground transition-all duration-300"
                  animate={{ 
                    width: isMenuOpen ? 24 : 16,
                    opacity: isMenuOpen ? 0 : 1
                  }}
                />
                <motion.span 
                  className="block h-px bg-foreground transition-all duration-300"
                  animate={{ 
                    width: isMenuOpen ? 24 : 20,
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -4 : 0
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-background pt-24 md:pt-28"
          >
            <div className="h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
              <div className="max-w-content mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                  {/* Main Navigation */}
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                      >
                        <a
                          href={link.href}
                          className={`group block py-4 border-b border-border/30 hover:border-foreground transition-colors duration-500`}
                        >
                          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-2">
                            0{index + 1}
                          </span>
                          <span className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight block transition-transform duration-500 group-hover:translate-x-4 ${
                            isActive(link.href) ? 'text-foreground' : 'text-foreground/70 group-hover:text-foreground'
                          }`}>
                            {link.label}
                          </span>
                          {link.description && (
                            <span className="font-mono text-xs text-muted-foreground mt-2 block font-semibold">
                              {link.description}
                            </span>
                          )}
                        </a>
                      </motion.div>
                    ))}
                  </div>

                  {/* Sidebar Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col justify-end lg:justify-center space-y-12"
                  >
                    {/* Acquire CTA */}
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-4">
                        Acquire Work
                      </span>
                      <a
                        href="https://www.toileblanchecontemporary.com/artists/29-leroy-brothers/works/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-museum"
                      >
                        View Available Works
                      </a>
                    </div>

                    {/* Contact */}
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-4">
                        Contact
                      </span>
                      <ContactDialog>
                        <button className="font-mono text-sm hover:text-muted-foreground transition-colors text-left">
                          hello@leroybrothers.com
                        </button>
                      </ContactDialog>
                    </div>

                    {/* Year */}
                    <div className="font-mono text-xs text-muted-foreground">
                      Est. 1997 — Present
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;