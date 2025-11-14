import di from '@/DependencyInjection';
import { ProjectServiceServiceId } from '@/di/services/ProjectServiceInjector';
import EditorContext, { type IEditorContext } from '@components/editor/EditorContext';
import { type ProjectData } from '@strife/common';
import React from 'react';

export interface EditorContextProviderProps extends React.PropsWithChildren {
  projectId: string
}

export default function EditorContextProvider({ projectId, children }: EditorContextProviderProps): React.JSX.Element {
  const projectService = di.get(ProjectServiceServiceId);
  const [ project, setProject ] = React.useState<ProjectData | undefined>();
  React.useEffect(initializationEffect, []);

  const value: IEditorContext = {
    project
  };

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  
  function initializationEffect(): void {
    getProject();
  }

  async function getProject(): Promise<ProjectData> {
    const projectData = await projectService.getProject(projectId);
    setProject(projectData);
    return projectData;
  }
}