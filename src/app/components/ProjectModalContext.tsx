import { createContext, useContext, useState, type ReactNode } from "react";

export interface ProjectData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  tags: string[];
  year: string;
  details?: string[];
  scrollLoop?: boolean;
  scrollLoopHorizontal?: boolean;
  // Rich content fields
  overview?: string;
  roleProgression?: string[];
  skillTags?: string[];
  teamInfo?: { label: string; value: string }[];
  primaryImpact?: string;
  impactBullets?: string[];
}

interface ProjectModalContextType {
  activeProject: ProjectData | null;
  openProject: (project: ProjectData) => void;
  closeProject: () => void;
  resumeOpen: boolean;
  openResume: () => void;
  closeResume: () => void;
}

const ProjectModalContext = createContext<ProjectModalContextType>({
  activeProject: null,
  openProject: () => {},
  closeProject: () => {},
  resumeOpen: false,
  openResume: () => {},
  closeResume: () => {},
});

export function ProjectModalProvider({ children }: { children: ReactNode }) {
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const openProject = (project: ProjectData) => {
    setActiveProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setActiveProject(null);
    document.body.style.overflow = "";
  };

  const openResume = () => {
    setResumeOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeResume = () => {
    setResumeOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <ProjectModalContext.Provider value={{ activeProject, openProject, closeProject, resumeOpen, openResume, closeResume }}>
      {children}
    </ProjectModalContext.Provider>
  );
}

export function useProjectModal() {
  return useContext(ProjectModalContext);
}