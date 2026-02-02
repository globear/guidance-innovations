import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectList from "@/components/ProjectList";
import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/data/projects";
import { useIsMobile } from "@/hooks/use-mobile";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslatedProjects } from "@/hooks/useTranslatedProjects";

const AppHome = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0].id);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useLanguage();
  
  const translatedProjects = useTranslatedProjects();
  const selectedProject = translatedProjects.find((p) => p.id === selectedProjectId) || translatedProjects[0];

  const handleProjectSelect = (id: string) => {
    setSelectedProjectId(id);
    if (isMobile) {
      setIsDrawerOpen(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="section-container h-auto lg:h-[calc(100vh-8rem)]">
          <div className="grid h-auto lg:h-full gap-6 lg:grid-cols-12 lg:overflow-hidden rounded-xl border bg-card/50 backdrop-blur-sm shadow-sm">
            {/* Left Sidebar - List */}
            <div className="lg:col-span-4 lg:border-r border-border lg:overflow-y-auto bg-card/30">
              <div className="p-4 border-b border-border bg-card/50 sticky top-0 z-10 backdrop-blur-md">
                <h2 className="font-display text-lg font-semibold">{t("appHome.projectsTitle")}</h2>
                <p className="text-sm text-muted-foreground">
                  {t("appHome.projectsSubtitle")}
                </p>
              </div>
              <ProjectList 
                projects={translatedProjects} 
                selectedId={selectedProjectId} 
                onSelect={handleProjectSelect} 
              />
            </div>

            {/* Right Content - Details (Desktop) */}
            <div className="hidden lg:block lg:col-span-8 bg-background/50 h-full overflow-hidden relative">
              <ProjectDetail project={selectedProject} />
            </div>
          </div>
          
          {/* Mobile Drawer for Details */}
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerContent className="h-[85vh] outline-none">
              <div className="h-full overflow-y-auto">
                <div className="max-w-md mx-auto">
                  <ProjectDetail project={selectedProject} />
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AppHome;
