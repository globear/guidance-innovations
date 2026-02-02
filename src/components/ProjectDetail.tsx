import ReactMarkdown from 'react-markdown';
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Calendar, Tag, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectDetailProps {
  project: Project;
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zM12.05 20.21c-1.5 0-2.97-.39-4.26-1.15l-.3-.18-3.11.82.83-3.04-.2-.32a8.198 8.198 0 0 1-1.9-5.42c0-4.52 3.67-8.19 8.19-8.19 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.67 8.19-8.19 8.19zm4.5-6.14c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.11-.22-.18-.47-.31z"/>
  </svg>
);

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col h-full overflow-y-auto py-6 px-1 lg:px-6">
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {project.image && (
          <div className="w-full aspect-video rounded-xl overflow-hidden border border-border bg-muted mb-6">
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                {/* @ts-ignore */}
                <span className="font-mono uppercase tracking-wider">{t(`projects.categories.${project.category}`)}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {project.date || "2025"}
                </span>
              </div>
              <h1 className="text-3xl font-display font-bold text-foreground sm:text-4xl">
                {project.name}
              </h1>
            </div>
            <div className="hidden sm:block">
              <Badge variant="outline" className="text-base px-4 py-1.5 h-auto">
                {/* @ts-ignore */}
                {t(`projects.statuses.${project.status}`)}
              </Badge>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="h-px bg-border w-full" />

        {/* Content Section */}
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div>
              {/* @ts-ignore */}
              <h3 className="text-xl font-semibold mb-3">{t("projects.ui.aboutProject")}</h3>
              <div className="prose prose-invert prose-sm sm:prose-base max-w-none text-muted-foreground leading-7 
                prose-headings:font-display prose-headings:font-semibold prose-headings:text-foreground 
                prose-p:leading-relaxed prose-strong:text-foreground prose-strong:font-semibold
                prose-ul:my-4 prose-li:my-1 prose-ul:list-disc prose-ul:pl-4
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                <ReactMarkdown>{project.fullDescription}</ReactMarkdown>
              </div>
            </div>

            <div>
              {/* @ts-ignore */}
              <h3 className="text-xl font-semibold mb-3">{t("projects.ui.keyFeatures")}</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-xl border bg-card p-6 space-y-6 sticky top-6">
              <div className="flex flex-col gap-3">
                {project.url && (
                  <Button className="w-full btn-primary" asChild>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {/* @ts-ignore */}
                      {t("projects.ui.viewLiveProduct")} <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
                
                <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white border-none" asChild>
                  <a href="https://wa.me/66984862094" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="w-4 h-4 mr-2" />
                    {/* @ts-ignore */}
                    {t("projects.ui.chatWhatsApp")}
                  </a>
                </Button>
              </div>

              <div>
                {/* @ts-ignore */}
                <h3 className="font-semibold mb-2">{t("projects.ui.projectStatus")}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className={`h-2.5 w-2.5 rounded-full ${
                    project.status === 'Live' ? 'bg-green-500' :
                    project.status === 'Beta' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`} />
                  {/* @ts-ignore */}
                  {t(`projects.statuses.${project.status}`)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
