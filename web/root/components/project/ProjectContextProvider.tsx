import di from '@/DependencyInjection';
import { ProjectStoreServiceId } from '@/di/stores/ProjectStoreInjector';
import ProjectContext, { type IProjectContext } from '@components/project/ProjectContext';
import React from 'react';

export interface ProjectContextProviderProps extends React.PropsWithChildren {
  projectId: string
}

export function ProjectContextProvider({ projectId, children }: ProjectContextProviderProps): React.JSX.Element {
  const projectStore = di.get(ProjectStoreServiceId);
  const { data: projectData } = projectStore.useGetProject(projectId);

  const value: IProjectContext = {
    projectData
  };

  return <ProjectContext.Provider value={value}>
    {children}
  </ProjectContext.Provider>;
}

export default ProjectContextProvider;