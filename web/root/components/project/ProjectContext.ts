import { Project } from '@strife/common';
import React from 'react';

export interface IProjectContext {
  projectData?: Project.Data
}

export const ProjectContext = React.createContext<IProjectContext | undefined>(undefined);

export function useProjectContext(): IProjectContext {
  const projectContext = React.useContext(ProjectContext);
  if (!projectContext)
    throw new Error(`Missing ${typeof ProjectContext}`);

  return projectContext;
}

export default ProjectContext;