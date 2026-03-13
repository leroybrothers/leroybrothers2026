import { useState } from "react";
import { motion } from "framer-motion";
import ImageLightbox from "@/components/ImageLightbox";
import { getProjectBySlug } from "@/data/projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface ProjectDetailProps {
  slug?: string;
}

const ProjectDetail = ({ slug: slugProp }: ProjectDetailProps) => {
  const slug = slugProp ?? "";
  const project = slug ? getProjectBySlug(slug) : undefined;
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!project) {
    return (
      <section className="px-6 md:px-12 pt-32 pb-16">
        <div className="max-w-content mx-auto">
          <h1>Project not found</h1>
          <a href="/art" className="text-muted-foreground hover:text-foreground">
            ← Back to Archive
          </a>
        </div>
      </section>
    );
  }

  const yearDisplay = project.yearEnd 
    ? `${project.year}–${project.yearEnd}` 
    : project.year;


  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <>
      {/* Back Link */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-6 md:px-12 py-8"
      >
        <div className="max-w-content mx-auto">
          <a 
            href="/art" 
            className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Archive
          </a>
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="px-6 md:px-12 mb-16 md:mb-24"
      >
        <div className="max-w-content mx-auto">
          <div 
            className="group relative overflow-hidden cursor-pointer glitch-hover scanlines"
            onClick={() => openLightbox(0)}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-auto max-h-[75vh] object-contain transition-all duration-700"
            />
            <div className="noise-overlay" />
            <div className="absolute inset-0 bg-transparent transition-colors duration-500 flex items-center justify-center pointer-events-none">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-background opacity-0 group-hover:opacity-100 transition-opacity bg-foreground/80 px-4 py-2">
                View Full Size
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Project Info */}
      <section className="px-6 md:px-12 mb-16 md:mb-24">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:col-span-8"
            >
              {/* Metadata */}
              <div className="flex items-center gap-6 mb-8">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {yearDisplay}
                </span>
                <span className="w-8 h-px bg-border" />
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {project.category}
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[0.95]">
                {project.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                {project.tagline}
              </p>
              
              <div className="space-y-6 border-t border-border pt-12">
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              {/* Quote Block */}
              {project.quote && (
                <blockquote className="mt-16 pl-8 border-l-2 border-foreground">
                  <p className="font-display text-xl md:text-2xl italic text-foreground/90 leading-relaxed mb-4">
                    "{project.quote.text}"
                  </p>
                  {(project.quote.author || project.quote.source) && (
                    <footer className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {project.quote.author && <span>{project.quote.author}</span>}
                      {project.quote.author && project.quote.source && <span> — </span>}
                      {project.quote.source && <cite>{project.quote.source}</cite>}
                    </footer>
                  )}
                </blockquote>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="lg:col-span-4"
            >
              <div className="lg:sticky lg:top-32 space-y-8">
                {/* Explore Link */}
                <a 
                  href={`/project/${slug}/explore`}
                  className="btn-museum w-full justify-center"
                >
                  <span>In-Depth Art Statement</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {/* External Link */}
                {project.externalLink && (
                  <a 
                    href={project.externalLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-museum w-full justify-center"
                  >
                    <span>{slug === "uncanny-council" ? "Enter The Council Live" : "View Live Project"}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}

                {/* Book Link - Successful Artist */}
                {slug === "successful-artist" && (
                  <a 
                    href="https://medium.com/how-to-be-a-successful-contemporary-artist-from-a" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-museum w-full justify-center"
                  >
                    <span>Read the Book Here</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {project.images.length > 1 && (
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="px-6 md:px-12 py-16 md:py-24 border-t border-border"
        >
          <div className="max-w-content mx-auto">
            <div className="flex items-baseline justify-between mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-semibold">Gallery</h2>
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em]">
                {project.images.length} Images
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="relative overflow-hidden cursor-pointer glitch-hover"
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-square">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="noise-overlay" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Lightbox */}
      <ImageLightbox
        images={project.images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
        title={project.title}
      />
    </>
  );
};

export default ProjectDetail;