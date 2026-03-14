import { motion } from "framer-motion";
import { getProjectBySlug } from "@/data/projects";
import { ArrowLeft } from "lucide-react";

interface ProjectExploreProps {
  slug?: string;
}

const ProjectExplore = ({ slug: slugProp }: ProjectExploreProps) => {
  const slug = slugProp ?? "";
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <section className="px-6 md:px-12 pt-32 pb-16">
        <div className="max-w-content mx-auto">
          <h1>Project not found</h1>
          <a href="/" className="text-muted-foreground hover:text-foreground">
            ← Back to Archive
          </a>
        </div>
      </section>
    );
  }

  const yearDisplay = project.yearLabel 
    ?? (project.yearEnd ? `${project.year}–${project.yearEnd}` : project.year);

  return (
    <>
      {/* Back Link */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-6 md:px-12 py-8"
      >
        <div className="max-w-3xl mx-auto">
          <a 
            href={`/project/${slug}`} 
            className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Project
          </a>
        </div>
      </motion.div>

      {/* Content */}
      <motion.article 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="px-6 md:px-12 pb-24"
      >
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-16">
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
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {project.tagline}
            </p>
          </header>

          {/* Main Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            {project.operationalDescription && project.criticalWriting ? (
              <>
                <div className="text-foreground/90 leading-relaxed text-lg whitespace-pre-line mb-16">
                  {project.operationalDescription}
                </div>
                <div className="border-t border-border pt-16">
                  <h2 className="font-display text-xl font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-6">
                    Critical Writing
                  </h2>
                  <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                    {project.criticalWriting.attribution}
                    {project.criticalWriting.authorAffiliation && (
                      <span className="block mt-2 text-muted-foreground">
                        {project.criticalWriting.authorAffiliation}
                      </span>
                    )}
                  </p>
                  {project.criticalWriting.note && (
                    <p className="text-muted-foreground text-xs italic mb-8">
                      {project.criticalWriting.note}
                    </p>
                  )}
                  <div 
                    className="text-foreground/90 leading-relaxed text-lg whitespace-pre-line [&>strong]:font-bold"
                    dangerouslySetInnerHTML={{
                      __html: project.criticalWriting.text
                        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\n/g, '<br />')
                    }}
                  />
                </div>
              </>
            ) : project.exploreContent ? (
              <div 
                className="text-foreground/90 leading-relaxed text-lg whitespace-pre-line [&>strong]:font-bold"
                dangerouslySetInnerHTML={{
                  __html: project.exploreContent
                    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\n/g, '<br />')
                }}
              />
            ) : (
              <>
                {project.extendedDescription ? (
                  <p className="text-foreground/80 leading-relaxed text-lg mb-8 whitespace-pre-line">
                    {project.extendedDescription}
                  </p>
                ) : (
                  <p className="text-foreground/90 leading-relaxed text-xl mb-8">
                    {project.description}
                  </p>
                )}
              </>
            )}

            {/* Quote Block */}
            {project.quote && (
              <blockquote className="my-16 pl-8 border-l-2 border-foreground not-prose">
                <p className="font-display text-2xl md:text-3xl italic text-foreground/90 leading-relaxed mb-6">
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
          </div>

          {/* Footer */}
          <footer className="mt-24 pt-12 border-t border-border">
            <a 
              href={`/project/${slug}`} 
              className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              View Gallery & Details
            </a>
          </footer>
        </div>
      </motion.article>
    </>
  );
};

export default ProjectExplore;
