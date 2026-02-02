import { useLanguage } from "@/contexts/LanguageContext";
import { projects, Project } from "@/data/projects";

export const useTranslatedProjects = (): Project[] => {
  const { t } = useLanguage();

  return projects.map((project) => {
    return {
      ...project,
      // We keep category and status as original keys for logic (styling etc)
      // and will translate them in the UI components.
      
      shortDescription: t(`projects.${project.id}.shortDescription`),
      fullDescription: t(`projects.${project.id}.fullDescription`),
      features: project.features.map((_, index) => 
        // @ts-ignore
        t(`projects.${project.id}.features.${index}`)
      ),
    } as Project;
  });
};
