import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const About = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineEvents = [
    { year: "1997", title: "Formation" },
    { year: "2003", title: "MySpace Era" },
    { year: "2006", title: "Artmann Gallery" },
    { year: "2008–2010", title: "Axel King" },
    { year: "2013–2019", title: "Witness Your World" },
    { year: "2016", title: "Witness My Face" },
    { year: "2023", title: "NFT Collection: A to Z" },
    { year: "2023", title: "Arora Vale" },
    { year: "2025", title: "Present" },
  ];

  const soloExhibitions = [
    { year: "2024", title: "Presenting Arora Vale", venue: "Toile Blanche Contemporary, Saint-Paul de Vence" },
    { year: "2021", title: "Segmented Realities", venue: "IFA Gallery, Brussels" },
    { year: "2020", title: "Be Part of Art", venue: "VINCI, Brussels" },
    { year: "2019", title: "Variations on an Existing Theme", venue: "Lightroom 35, Ghent" },
    { year: "2016", title: "Witness My Face", venue: "Pukkelpop Music Festival, Kiewit" },
    { year: "2016", title: "The Aesthetics of Coding", venue: "Podgorny Robinson Gallery, Saint-Paul de Vence" },
    { year: "2016", title: "We all have at least one meaningful Picture or Thought to share", venue: "Podgorny Robinson Gallery, Paris" },
    { year: "2016", title: "Coding as Social & Creative Inception", venue: "IFA Gallery, Brussels" },
    { year: "2015", title: "Witness Your World: Testimonies of the Network Users", venue: "Spazio Bogogno, Milan" },
    { year: "2014", title: "Dissections in the Cloud", venue: "Mia&D Singapore with Shtager Gallery" },
    { year: "2014", title: "Witness Your World: Extracts from our picture & message culture", venue: "At The Gallery, Antwerp" },
    { year: "2013", title: "Witness Your World for Mumiy Troll – part 3", venue: "Lazarev Foundation, Saint Petersburg" },
    { year: "2013", title: "Witness Your World for Mumiy Troll – part 2", venue: "MMOMA Moscow Museum of Modern Art" },
    { year: "2013", title: "Windows to the World", venue: "Guy Pieters Gallery, Saint-Paul de Vence" },
    { year: "2013", title: "Witness Your World for Mumiy Troll – part 1", venue: "ArtEtazh Museum of Modern Art, Vladivostok" },
    { year: "2012", title: "Portraitures of Accidental Human Relationships", venue: "acb Galeria, Budapest" },
    { year: "2012", title: "Leroy Brothers Summer Show", venue: "Galerie St Paul Art Moderne, Saint-Paul de Vence" },
    { year: "2011", title: "Symbiotic Cloud Intelligence: BDRTist", venue: "Art Beijing" },
    { year: "2011", title: "How to be a Successful Contemporary Artist from A to Z", venue: "Art Labor Gallery, Shanghai" },
    { year: "2008", title: "The user as creativity source", venue: "W3 Art Center, Vlissingen" },
    { year: "2006", title: "Artmann paintings by Gorki frontman, Luc De Vos", venue: "Artmann Gallery, Ghent" },
    { year: "2005", title: "Artmann Painting Collection", venue: "Artmann Gallery, Ghent" },
    { year: "2004", title: "MySpace User Portraits", venue: "VanRam Gallery, Ghent" },
    { year: "2002", title: "Carte Blanche", venue: "CIAC, Carros" },
  ];

  const groupExhibitions = [
    { year: "2017", title: "Ghost", venue: "STUK Leuven" },
    { year: "2017", title: "Celibataire Divas", venue: "Herkenrode Refuge, Hasselt" },
    { year: "2017", title: "On The Go (not comparable)", venue: "Zaal 29, MAart KunstRoute" },
    { year: "2017", title: "S-T-ARTS: Innovation at the nexus of Science, Technology & Arts", venue: "DG Connect (European Commission), Brussels" },
    { year: "2017", title: "If I disappear", venue: "IFA Gallery, Brussels" },
    { year: "2017", title: "Ghost", venue: "Recyclart Art Center, Brussels" },
    { year: "2017", title: "Jacobus", venue: "Church of Saint Jacobs, Ghent" },
    { year: "2016", title: "Identity as a TM", venue: "City Triennale Hasselt" },
    { year: "2016", title: "Teleportation", venue: "Art Labor Gallery, Shanghai" },
    { year: "2015", title: "The Wrong: New Digital Art Biennale", venue: "Homeostasis Lab Pavillon" },
    { year: "2015", title: "3 Generations of Belgian artists: Paul Delvaux / Wim Delvoye / Leroy Brothers", venue: "At The Gallery, Antwerp" },
    { year: "2012", title: "A Neverending Mess", venue: "Art Labor Gallery, Shanghai" },
    { year: "2011", title: "This could be your show!", venue: "ShContemporary (Hot Spot), Shanghai" },
    { year: "2011", title: "The best of 5 Years Art Labor", venue: "Art Labor Gallery, Shanghai" },
    { year: "2010", title: "Lernaean Strouthion: extraction from Axel King", venue: "World Expo, Jing An Sculpture Park, Shanghai" },
    { year: "2010", title: "Outsourced painting production from Dafen", venue: "Don Gallery, Shanghai" },
    { year: "2008", title: "Update II: New Media Art Award: Axel King", venue: "Liedts-Meesen Foundation, Ghent" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 py-24 md:py-40">
        <div className="max-w-content mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start"
          >
            <div className="lg:col-span-8">
              <p className="project-label mb-4">About</p>
              <h1 className="mb-6">The Practice</h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Belgian art collective founded in 1997. Individual authorship dissolved at founding.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="lg:col-span-4"
            >
              <div className="aspect-[3/4] overflow-hidden glitch-hover">
                <img 
                  src="/images/leroy-brothers-portrait.jpg" 
                  alt="Leroy Brothers" 
                  className="w-full h-full object-cover"
                />
                <div className="noise-overlay" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Timeline */}
      <section className="py-16 md:py-24 border-y border-border overflow-hidden">
        <div className="max-w-content mx-auto px-6 md:px-12 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-4">
            Timeline
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">1997 — Present</h2>
        </div>
        
        <div 
          ref={timelineRef}
          className="flex gap-1 overflow-x-auto pb-8 px-6 md:px-12 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {timelineEvents.map((event, index) => (
            <motion.div
              key={`${event.year}-${event.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex-shrink-0 w-64 md:w-80 snap-start border border-border p-6 md:p-8 hover:bg-secondary/50 transition-colors duration-500"
            >
              <span className="font-mono text-3xl md:text-4xl font-bold text-foreground/20 block mb-4">
                {event.year}
              </span>
              <h3 className="font-display text-xl font-semibold">{event.title}</h3>
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-content mx-auto px-6 md:px-12 mt-4">
          <span className="font-mono text-xs text-muted-foreground flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            Scroll to explore
          </span>
        </div>
      </section>

      {/* Biography */}
      <section className="px-6 md:px-12 py-24 md:py-40">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Biography
              </span>
              <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
                <p>
                  Leroy Brothers is a Belgian art collective founded in 1997 by three brothers: Nicolas (b. 1979), Gilles (b. 1978), and Gregory (b. 1975). Individual authorship was dissolved at founding. All work is signed collectively.
                </p>
                <p>
                  The practice began with four-handed painting and shifted in 2003 toward systems-based work involving networks, platforms, algorithms, and institutional structures. Since then, the collective has built functional social media platforms, manufactured fictional artists, outsourced production to Dafen Village, operated a luxury hotel as a durational artwork, and placed five AI systems in permanent autonomous conversation.
                </p>
                <p>
                  The work does not illustrate these subjects. It operates within them.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="border border-foreground p-8 md:p-12">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-6">
                  Philosophy
                </span>
                <blockquote className="font-display text-xl md:text-2xl italic leading-relaxed mb-6">
                  "We are interested in the space between authenticity and construction, 
                  where identity becomes performance and commerce becomes critique."
                </blockquote>
                <footer className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  — Leroy Brothers
                </footer>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selected Exhibitions */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-content mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-4">
              Selected Exhibitions
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Solo Shows</h2>
          </motion.div>
          
          <div className="space-y-0">
            {soloExhibitions.map((exhibition, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02, duration: 0.5 }}
                className="grid grid-cols-12 gap-4 py-6 border-b border-border hover:bg-secondary/30 transition-colors duration-300 px-4 -mx-4"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-sm text-muted-foreground">
                  {exhibition.year}
                </span>
                <div className="col-span-10 md:col-span-5">
                  <span className="text-sm text-muted-foreground">{exhibition.title}</span>
                </div>
                <div className="col-span-12 md:col-span-6 md:text-right">
                  <h3 className="font-display text-base md:text-lg font-medium">{exhibition.venue}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Exhibitions */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-border">
        <div className="max-w-content mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold">Group Shows</h2>
          </motion.div>
          
          <div className="space-y-0">
            {groupExhibitions.map((exhibition, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02, duration: 0.5 }}
                className="grid grid-cols-12 gap-4 py-6 border-b border-border hover:bg-secondary/30 transition-colors duration-300 px-4 -mx-4"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-sm text-muted-foreground">
                  {exhibition.year}
                </span>
                <div className="col-span-10 md:col-span-5">
                  <span className="text-sm text-muted-foreground">{exhibition.title}</span>
                </div>
                <div className="col-span-12 md:col-span-6 md:text-right">
                  <h3 className="font-display text-base md:text-lg font-medium">{exhibition.venue}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 md:px-12 py-32 md:py-48 bg-foreground text-background">
        <div className="max-w-content mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-background/50 block mb-6">
                Press & Inquiries
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-background/60 mb-8">
                For press materials, exhibition inquiries, and collaboration proposals.
              </p>
              <a 
                href="mailto:nicolas@leroybrothers.com"
                className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] border border-background px-8 py-4 hover:bg-background hover:text-foreground transition-all duration-500"
              >
                Contact Studio
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-background/50 block mb-6">
                Representation
              </span>
              <h3 className="font-display text-2xl font-bold mb-4">
                Toile Blanche Contemporary
              </h3>
              <p className="text-background/60 mb-6">
                Saint-Paul de Vence, France
              </p>
              <a 
                href="https://www.toileblanchecontemporary.com/artists/29-leroy-brothers/works/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm text-background/80 hover:text-background transition-colors"
              >
                View Available Works
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;