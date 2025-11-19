'use client';

import ProjectWidgetContext, { type IProjectWidgetContextValue } from '@components/editor/widgets/project/ProjectWidgetContext';
import { Menu } from '@mui/material';
import { type ProjectData } from '@strife/common';
import React from 'react';

export interface ProjectWidgetContextProviderProps extends React.PropsWithChildren {
  project: ProjectData
}

export default function ProjectWidgetContextProvider({ project, children }: ProjectWidgetContextProviderProps): React.JSX.Element {
  const [ value, setValue ] = React.useState<IProjectWidgetContextValue>({ project });
  React.useEffect(initializationEffect);

  return <ProjectWidgetContext.Provider value={[ value, setValue ]}>
    {children}
    <Menu open={value.contextMenuAnchorEl != undefined} anchorEl={value.contextMenuAnchorEl}>
      {value.contextMenuContent}
    </Menu>
  </ProjectWidgetContext.Provider>;

  function initializationEffect(): (() => void) | undefined {
    if (!document || ! window) 
      return;

    document.addEventListener('click', dismissContextMenu);
    document.addEventListener('scroll', dismissContextMenu, true);

    return cleanupEffect;
  }

  function cleanupEffect(): void {
    document.removeEventListener('click', dismissContextMenu);
    document.removeEventListener('scroll', dismissContextMenu, true);
  }

  function dismissContextMenu(): void {
    setValue({ ...value, contextMenuAnchorEl: undefined });
  }
}