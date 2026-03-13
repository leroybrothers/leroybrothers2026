import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
const LandingPage = () => {
  const destinations = [{
    title: "Leroy Brothers",
    description: "Explore the latest art projects, international exhibitions, and digital innovations from the three brothers.",
    buttonText: "Explore the Art",
    href: "/art",
    isExternal: false
  }, {
    title: "Toile Blanche",
    description: "The Artistic Escape to Saint-Paul-de-Vence. Experience the boutique hotel and restaurant where the Leroy Brothers' aesthetic comes to life through soulful hospitality.",
    buttonText: "Book Your Stay",
    href: "https://www.toileblanche.com",
    isExternal: true
  }, {
    title: "TB Contemporary",
    description: "The Art Experience The bridge between the two. Discover the on-site art space, curated exhibitions and sculpture park. The artistic soul that defines the Toile Blanche estate.",
    buttonText: "Discover the Art Space",
    href: "https://www.toileblanchecontemporary.com",
    isExternal: true
  }];
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="max-w-6xl mx-auto w-full">
          {/* Logo */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="mb-12 md:mb-16">
            <img src="/images/logo-leroy-brothers.png" alt="Leroy Brothers" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
          </motion.div>

          {/* Destinations Grid */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.8
        }} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-32">
            {destinations.map((destination, index) => <motion.div key={destination.title} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3 + index * 0.1,
            duration: 0.6
          }} className="group">
                <div className="border-t border-border pt-8">
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 tracking-tight uppercase">
                    {destination.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8 min-h-[120px] font-serif">
                    {destination.description}
                  </p>
                  {destination.isExternal ? <a href={destination.href} target="_blank" rel="noopener noreferrer" className="btn-museum inline-flex items-center group/btn">
                      <span className="font-serif">{destination.buttonText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </a> : <a href={destination.href} className="btn-museum inline-flex items-center group/btn">
                      <span className="font-serif">{destination.buttonText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>}
                </div>
              </motion.div>)}
          </motion.div>

          {/* Intro Text */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5,
          duration: 0.8
        }}>
            <h1 className="font-display text-3xl lg:text-6xl leading-tight tracking-tight mb-8 max-w-5xl md:text-lg font-thin">
              Toile Blanche is the intersection of creativity and soulful hospitality, created by Leroy Brothers.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed font-serif">
              More than a destination, it is a living artistic concept where guests and art lovers engage in an immersive dialogue with contemporary art. Set within a legendary Mediterranean retreat, every encounter is designed to inspire, blending the avant-garde spirit of the artists with the timeless ease of Saint-Paul-de-Vence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} Leroy Brothers
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Saint-Paul-de-Vence, France
          </p>
        </div>
      </footer>
    </div>
  );
};
export default LandingPage;