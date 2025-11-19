'use client';

import di from '@/DependencyInjection';
import { FileSystemServiceServiceId } from '@/di/services/FileSystemServiceInjector';
import CreateFileSystemDirectoryDialog from '@components/file-system/dialogs/CreateFileSystemDirectoryDialog';
import { ChevronRight as ChevronRightIcon, CreateNewFolder as CreateNewFolderIcon, NoteAdd as NoteAddIcon } from '@mui/icons-material';
import { Box, IconButton, List, ListItem, ListItemButton, type ListItemProps, ListItemText, MenuItem, Stack, useTheme } from '@mui/material';
import { type CreateFileSystemDirectoryData, type FileSystemDirectoryData } from '@strife/common';
import React from 'react';
import { useProjectWidgetContext } from '@components/editor/widgets/project/ProjectWidgetContext';

export interface ProjectDirectoryListItemProps extends ListItemProps {
  fileSystemObjectId: string,
  depth: number
}

export default function ProjectDirectoryListItem({ fileSystemObjectId, depth, ...listItemProps }: ProjectDirectoryListItemProps): React.JSX.Element {
  const fileSystemService = di.get(FileSystemServiceServiceId);
  const theme = useTheme();
  const [ projectWidgetContext, setProjectWidgetContext ] = useProjectWidgetContext();
  const [ fileSystemDirectoryData, setFileSystemDirectoryData ] = React.useState<FileSystemDirectoryData>();
  const [ isOpen, setIsOpen ] = React.useState(false);
  const [ isCreateDialogOpen, setIsCreateDialogOpen ] = React.useState(false);
  React.useEffect(initializationEffect, [ projectWidgetContext ]);

  if (!fileSystemDirectoryData)
    return <React.Fragment />;

  const projectDirectoryListItems = fileSystemDirectoryData.childrenIds.map(
    (childId: string, index: number): React.JSX.Element => 
      <ProjectDirectoryListItem key={index} fileSystemObjectId={childId} depth={depth + 1} />
  );

  return <ListItem disablePadding {...listItemProps}>
    <Stack display='flex' flexDirection='column' flexGrow={1}>
      <ListItemButton onClick={(event) => { event.stopPropagation(); setIsOpen(!isOpen);}} onContextMenu={onContextMenu}>
        <ChevronRightIcon className={ isOpen ? 'rotate-90' : undefined } />
        <ListItemText>
          {fileSystemDirectoryData.name}
        </ListItemText>
      </ListItemButton>
      <Box paddingLeft={1} borderLeft={`2px solid ${theme.palette.divider}`}>
        {
          isOpen
            ? <List>
                {projectDirectoryListItems}
              </List>
            : undefined
        }
      </Box>
    </Stack>
    <CreateFileSystemDirectoryDialog projectId={projectWidgetContext.project.id} parentId={fileSystemObjectId} open={isCreateDialogOpen} onCancel={onCancelCreateProjectDialog} onClose={onCloseCreateProjectDialog} onCreate={onCreateCreateProjectDialog} fullWidth maxWidth='sm' />
  </ListItem>;
  
  function initializationEffect(): void {
    getFileSystemDirectory();
  }

  async function getFileSystemDirectory(): Promise<void> {
    const fileSystemDirectoryData = await fileSystemService.getFileSystemObject(fileSystemObjectId, projectWidgetContext.project.id) as FileSystemDirectoryData;
    setFileSystemDirectoryData(fileSystemDirectoryData);
  }

  function onContextMenu(event: React.SyntheticEvent<HTMLDivElement>): void {
    event.preventDefault();
    setProjectWidgetContext({ ...projectWidgetContext, contextMenuAnchorEl: event.currentTarget, contextMenuContent: <MenuItem onClick={onClickCreateDirectory}>Create Directory</MenuItem> });
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

    const projectData = await fileSystemService.createFileSystemDirectory(createFileSystemDirectoryData);
    setIsCreateDialogOpen(false);
    setIsOpen(true);
    getFileSystemDirectory();
  }
}