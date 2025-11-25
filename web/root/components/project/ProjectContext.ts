import { type ProjectData } from '@strife/common';
import React from 'react';

export interface IProjectContext {
  projectData?: ProjectData
}

export const ProjectContext = React.createContext<IProjectContext | undefined>(undefined);

export function useProjectContext(): IProjectContext {
  const projectContext = React.useContext(ProjectContext);
  if (!projectContext)
    throw new Error(`Missing ${typeof ProjectContext}`);

  return projectContext;
}

export default ProjectContext;