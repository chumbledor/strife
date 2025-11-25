'use client';

import { useProjectContext } from '@components/project/ProjectContext';
import FileSystemDirectoryListItem from '@components/file-system/FileSystemDirectoryListItem';
import ProjectWidgetContextProvider from '@components/editor/widgets/project/ProjectWidgetContextProvider';
import Widget, { type WidgetProps } from '@components/editor/widgets/Widget';
import { List, ListItemButton, type ListItemButtonProps } from '@mui/material';
import React from 'react';
import FileSystemContextProvider from '@root/components/file-system/FileSystemContextProvider';

export interface ProjectWidgetProps extends WidgetProps {}

export default function ProjectWidget({ ...widgetProps }: ProjectWidgetProps): React.JSX.Element {
  const { projectData: project } = useProjectContext();

  if (!project)
    return <React.Fragment />

  return <Widget {...widgetProps}>
    <FileSystemContextProvider fileSystemData={project.fileSystem}>
      <List>
        <FileSystemDirectoryListItem fileSystemObjectId={project.fileSystem.rootFileSystemObjectId} />
      </List>
    </FileSystemContextProvider>
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