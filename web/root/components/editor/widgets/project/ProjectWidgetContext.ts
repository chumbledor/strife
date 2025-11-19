import { type ProjectData } from '@strife/common';
import React from 'react';

export interface IProjectWidgetContextValue {
  project: ProjectData,
  contextMenuAnchorEl?: HTMLElement,
  contextMenuContent?: React.JSX.Element
}

type IProjectWidgetContext = [
  value: IProjectWidgetContextValue,
  setValue: React.Dispatch<React.SetStateAction<IProjectWidgetContextValue>>
]

export const ProjectWidgetContext = React.createContext<IProjectWidgetContext | undefined>(undefined);

export function useProjectWidgetContext(): IProjectWidgetContext {
  const projectWidgetContext = React.useContext(ProjectWidgetContext);
  if (!projectWidgetContext)
    throw new Error(`Missing ${typeof ProjectWidgetContext}`);

  return projectWidgetContext;
}

export default ProjectWidgetContext;