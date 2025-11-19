'use client';

import { useEditorContext } from '@components/editor/EditorContext';
import ProjectDirectoryListItem from '@components/editor/widgets/project/ProjectDirectoryListItem';
import ProjectWidgetContextProvider from '@components/editor/widgets/project/ProjectWidgetContextProvider';
import Widget, { type WidgetProps } from '@components/editor/widgets/Widget';
import { List, ListItemButton, type ListItemButtonProps } from '@mui/material';
import React from 'react';

export interface ProjectWidgetProps extends WidgetProps {}

export default function ProjectWidget({ ...widgetProps }: ProjectWidgetProps): React.JSX.Element {
  const { project } = useEditorContext();

  if (!project)
    return <React.Fragment />

  return <Widget {...widgetProps}>
    <ProjectWidgetContextProvider project={project}>
      <List>
        <ProjectDirectoryListItem fileSystemObjectId={project.rootFileSystemObjectId} depth={0} />
      </List>
    </ProjectWidgetContextProvider>
  </Widget>;
}

interface FolderListItemButtonProps extends ListItemButtonProps {
  projectId: string,
  fileSystemObjectId: string
}

interface FileListItemButtonProps extends ListItemButtonProps {
  
}

function FileListItemButton({ ...listItemButtonProps }: FileListItemButtonProps): React.JSX.Element {
  return <ListItemButton {...listItemButtonProps} onClick={event => event.stopPropagation()}>
    File
  </ListItemButton>;
}