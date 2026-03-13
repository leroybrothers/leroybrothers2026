import { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

interface TimelineProps {
  projects: Project[];
}

const Timeline = ({ projects }: TimelineProps) => {
  // Group projects by decade
  const projectsByDecade = projects.reduce((acc, project) => {
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
    <div className="relative">
      {decades.map((decade) => (
        <section key={decade} className="mb-24 last:mb-0">
          {/* Decade Header */}
          <div className="sticky top-20 md:top-24 z-10 bg-background/95 backdrop-blur-sm py-4 mb-12 border-b border-border">
            <h2 className="text-6xl md:text-8xl font-bold text-muted/30 tracking-tight-museum">
              {decade}s
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {projectsByDecade[decade].map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Timeline;
