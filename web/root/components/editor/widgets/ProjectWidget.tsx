'use client';

import di from '@/DependencyInjection';
import { FileSystemServiceServiceId } from '@/di/services/FileSystemServiceInjector';
import { useEditorContext } from '@components/editor/EditorContext';
import Widget, { type WidgetProps } from '@components/editor/widgets/Widget';
import CreateFileSystemDirectoryDialog from '@components/fileSystem/dialogs/CreateFileSystemDirectoryDialog';
import { CreateNewFolder as CreateNewFolderIcon } from '@mui/icons-material';
import { Box, IconButton, List, ListItemButton, Stack, Typography, type ListItemButtonProps } from '@mui/material';
import { type CreateFileSystemDirectoryData, type FileSystemDirectoryData, type FileSystemObjectData } from '@strife/common';
import React from 'react';

export interface ProjectWidgetProps extends WidgetProps {}

export default function ProjectWidget({ ...widgetProps }: ProjectWidgetProps): React.JSX.Element {
  const { project } = useEditorContext();

  if (!project)
    return <React.Fragment />
  
  return <Widget {...widgetProps}>
    <List>
      <DirectoryListItemButton projectId={project.id} fileSystemObjectId={project.rootFileSystemObjectId} />
    </List>
  </Widget>;
}

interface FolderListItemButtonProps extends ListItemButtonProps {
  fileSystemObjectId: string,
  projectId: string
}

function DirectoryListItemButton({ fileSystemObjectId, projectId, ...listItemButtonProps }: FolderListItemButtonProps): React.JSX.Element {
  const fileSystemService = di.get(FileSystemServiceServiceId);
  const [ fileSystemDirectoryData, setFileSystemDirectoryData ] = React.useState<FileSystemDirectoryData>();
  const [ open, setOpen ] = React.useState(false);
  const [ isCreateDialogOpen, setIsCreateDialogOpen ] = React.useState(false);
  React.useEffect(initializationEffect, [ projectId ]);

  if (!fileSystemDirectoryData)
    return <React.Fragment />;

  const children = fileSystemDirectoryData.childrenIds.map(childId => <DirectoryListItemButton projectId={projectId} fileSystemObjectId={childId} />);

  return <Box>
    <ListItemButton {...listItemButtonProps} onClick={(event) => { event.stopPropagation(); setOpen(!open);}}>
        <Box display='flex' flexDirection='row'>
          <Typography flexGrow={1}>
            {fileSystemDirectoryData.name}
          </Typography>
          <IconButton onClick={(event) => { event.stopPropagation(); onClickCreateDirectory(); }}>
            <CreateNewFolderIcon />
          </IconButton>
        </Box>
    </ListItemButton>
    <Box>
      {
        open
          ? <List >
              {children}
            </List>
          : undefined
      }
    </Box>
    <CreateFileSystemDirectoryDialog open={isCreateDialogOpen} onCancel={onCancelCreateProjectDialog} onClose={onCloseCreateProjectDialog} onCreate={onCreateCreateProjectDialog} fullWidth maxWidth='sm' />
  </Box>;
  
  function initializationEffect(): void {
    getFileSystemDirectory();
  }

  async function getFileSystemDirectory(): Promise<void> {
    const fileSystemDirectoryData = await fileSystemService.getFileSystemObject(projectId, fileSystemObjectId) as FileSystemDirectoryData;
    setFileSystemDirectoryData(fileSystemDirectoryData);
  }

  function onClickCreateDirectory(): void {
    setIsCreateDialogOpen(true);
  }

  function onCloseCreateProjectDialog(): void {
    setIsCreateDialogOpen(false);
  }
  
  function onCancelCreateProjectDialog(): void {
    setIsCreateDialogOpen(false);
  }

  async function onCreateCreateProjectDialog(createFileSystemDirectoryData: CreateFileSystemDirectoryData): Promise<void> {
    if (!fileSystemDirectoryData)
      return;

    const projectData = await fileSystemService.createFileSystemDirectory(fileSystemDirectoryData.projectId, fileSystemDirectoryData.id, createFileSystemDirectoryData);
    setIsCreateDialogOpen(false);
    // projects.push(projectData);
    // setProjects(projects);
    // goToProjectPage(projectData);
  }
}

interface FileListItemButtonProps extends ListItemButtonProps {
  
}

function FileListItemButton({ ...listItemButtonProps }: FileListItemButtonProps): React.JSX.Element {
  return <ListItemButton {...listItemButtonProps} onClick={event => event.stopPropagation()}>
    File
  </ListItemButton>;
}