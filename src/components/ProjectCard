import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: "default" | "featured" | "compact";
}

const ProjectCard = ({ project, index, variant = "default" }: ProjectCardProps) => {
  const yearDisplay = project.yearEnd 
    ? `${project.year}–${project.yearEnd}` 
    : project.year;

  if (variant === "featured") {
    return (
      <a 
        href={`/project/${project.slug}`}
        className="group block"
      >
        <motion.article 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
        >
          {/* Image with Glitch */}
          <div className="relative overflow-hidden glitch-hover scanlines">
            <div className="aspect-[4/3] bg-muted">
              <img
                src={project.thumbnail}
                alt={project.title}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${project.thumbnailPosition === "bottom" ? "object-bottom" : project.thumbnailPosition === "top" ? "object-top" : "object-center"}`}
                loading={index < 2 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : undefined}
              />
            </div>
            <div className="noise-overlay" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {yearDisplay}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 group-hover:text-muted-foreground transition-colors duration-500">
              {project.title}
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed line-clamp-3">
              {project.tagline}
            </p>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              View Project →
            </span>
          </div>
        </motion.article>
      </a>
    );
  }

  if (variant === "compact") {
    return (
      <a 
        href={`/project/${project.slug}`}
        className="group block"
      >
        <article className="flex gap-6 py-4 border-b border-border hover:border-foreground transition-colors duration-500">
          <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden glitch-hover">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="noise-overlay" />
          </div>
          <div className="flex flex-col justify-center min-w-0">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
              {yearDisplay}
            </span>
            <h3 className="font-display text-lg font-medium truncate group-hover:text-muted-foreground transition-colors duration-500">
              {project.title}
            </h3>
          </div>
        </article>
      </a>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: Math.min(index * 0.1, 0.3), duration: 0.6 }}
    >
      <a 
        href={`/project/${project.slug}`}
        className="group block"
      >
        {/* Image Container with Glitch Effect */}
        <div className="relative overflow-hidden mb-6 glitch-hover scanlines">
          <div className="aspect-[4/3] bg-muted">
            <img
              src={project.thumbnail}
              alt={project.title}
              loading={index < 4 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : undefined}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${project.thumbnailPosition === "bottom" ? "object-bottom" : project.thumbnailPosition === "top" ? "object-top" : "object-center"}`}
            />
          </div>
          {/* Digital Noise Overlay */}
          <div className="noise-overlay" />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500 flex items-center justify-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-background opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-foreground/80 px-4 py-2">
              View Project
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          {/* Year */}
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {yearDisplay}
          </span>
          
          {/* Title */}
          <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight group-hover:text-muted-foreground transition-colors duration-500">
            {project.title}
          </h3>
          
          {/* Tagline */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {project.tagline}
          </p>
        </div>
      </a>
    </motion.article>
  );
};

export default ProjectCard;