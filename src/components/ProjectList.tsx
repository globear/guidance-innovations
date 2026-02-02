import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectListProps {
  projects: Project[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const ProjectList = ({ projects, selectedId, onSelect }: ProjectListProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col gap-3 py-4 pr-2">
      {projects.map((project) => (
        <button
          key={project.id}
          onClick={() => onSelect(project.id)}
          className={cn(
            "text-left group relative flex flex-col gap-2 rounded-lg border p-4 transition-all hover:bg-muted/50",
            selectedId === project.id
              ? "bg-muted border-primary/50 shadow-sm"
              : "bg-card border-border"
          )}
        >
          {/* Mobile Image */}
          {project.image && (
            <div className="w-full aspect-video rounded-md overflow-hidden border border-border bg-muted mb-2 lg:hidden">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="flex w-full items-start justify-between">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20",
                  selectedId === project.id ? "bg-primary/20" : ""
                )}
              >
                <project.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{project.name}</h3>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  {/* @ts-ignore */}
                  {t(`projects.categories.${project.category}`)}
                </span>
              </div>
            </div>
            <Badge 
              variant={
                project.status === "Live" ? "default" : 
                project.status === "Beta" ? "secondary" : "outline"
              }
              className="ml-auto shrink-0"
            >
              {/* @ts-ignore */}
              {t(`projects.statuses.${project.status}`)}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {project.shortDescription}
          </p>
        </button>
      ))}
    </div>
  );
};

export default ProjectList;
