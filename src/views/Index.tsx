import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import BrandMark from "@/components/BrandMark";
import { Project, getProjectsByYear } from "@/data/projects";
import { ArrowDown } from "lucide-react";

const Index = () => {
  const allProjectsByYear = getProjectsByYear();

  // Group projects by decade for timeline view
  const projectsByDecade = allProjectsByYear.reduce((acc, project) => {
    const decade = Math.floor(parseInt(project.year) / 10) * 10;
    if (!acc[decade]) {
      acc[decade] = [];
    }
    acc[decade].push(project);
    return acc;
  }, {} as Record<number, Project[]>);

  const decades = Object.keys(projectsByDecade)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <>
      {/* Hero Section - Brutalist */}
      <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-content mx-auto w-full relative">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-5xl"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <img
              src="/images/logo-leroy-brothers-48.png"
              srcSet="/images/logo-leroy-brothers-40.png 40w, /images/logo-leroy-brothers-48.png 48w"
              sizes="(min-width: 768px) 48px, 40px"
              alt="Leroy Brothers"
              width={48}
              height={48}
              className="block w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground text-left leading-none">
              Contemporary Art Collective — Est. 1997
            </p>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black leading-[0.85] uppercase mb-12 text-left"
              style={{ letterSpacing: '-0.06em' }}
            >
              Leroy<br />
              Brothers
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-16 leading-relaxed text-left"
            >
              Interrogating identity and digital culture through algorithms, social media, and crowdsourced data to critique and reflect online reality.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-left"
            >
              <a 
                href="#archive" 
                className="btn-museum inline-flex items-center group"
              >
                <span>Enter The Archive</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 right-6 md:right-12"
        >
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground writing-vertical">
            Scroll to explore
          </div>
        </motion.div>
      </section>

      {/* Archive Section */}
      <section id="archive" className="px-6 md:px-12 py-24 md:py-40">
        <div className="max-w-content mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 md:mb-32"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-4">
              01 — The Archive
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              All Projects
            </h2>
          </motion.div>

          {/* Timeline View */}
          <div className="relative">
            {decades.map((decade, decadeIndex) => (
              <motion.div 
                key={decade} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-32 md:mb-48 last:mb-0"
              >
                {/* Decade Header */}
                <div className="sticky top-20 md:top-24 z-10 bg-background py-6 mb-16 md:mb-24">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-muted-foreground uppercase tracking-[0.3em]">
                      {decadeIndex === 0 ? 'Recent' : 'Archive'}
                    </span>
                    <h3 className="font-display text-7xl md:text-9xl font-black text-foreground/10 tracking-tighter">
                      {decade}s
                    </h3>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 md:gap-y-32">
                  {projectsByDecade[decade].map((project, index) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project} 
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-32 md:py-48 border-t border-border">
        <div className="max-w-content mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-8">
              Collaboration
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              Let's create something together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12">
              Interested in exhibitions, commissions, or collaborative projects? 
              We're always exploring new territories.
            </p>
            <a 
              href="mailto:nicolas@leroybrothers.com" 
              className="btn-museum"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;