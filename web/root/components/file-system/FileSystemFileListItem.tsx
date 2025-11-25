import di from '@/DependencyInjection';
import { ContextMenuManagerServiceId } from '@/di/managers/ContextMenuManagerInjector';
import { FileSystemServiceServiceId } from '@/di/services/FileSystemServiceInjector';
import { useFileSystemContext } from '@components/file-system//FileSystemContext';
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, type ListItemProps, ListItemText, MenuItem, Stack, useTheme } from '@mui/material';
import { IContextMenuData } from '@root/interfaces/managers/IContextMenuManager';
import { type CreateFileSystemFileData, type FileSystemFileData } from '@strife/common';
import React from 'react';

export interface FileSystemFileListItemProps extends ListItemProps {
  fileSystemObjectId: string
}

export default function FileSystemFileListItem({ fileSystemObjectId, ...listItemProps }: FileSystemFileListItemProps): React.JSX.Element {
  const fileSystemService = di.get(FileSystemServiceServiceId);
  const contextMenuManager = di.get(ContextMenuManagerServiceId);
  const theme = useTheme();
  const { fileSystemData } = useFileSystemContext();
  const [ fileSystemFileData, setFileSystemFileData ] = React.useState<FileSystemFileData>();
  const [ isOpen, setIsOpen ] = React.useState(false);
  const [ isCreateDialogOpen, setIsCreateDialogOpen ] = React.useState(false);
  React.useEffect(initializationEffect, []);

  if (!fileSystemData || !fileSystemFileData)
    return <React.Fragment />;
  
  return <ListItem disablePadding {...listItemProps}>
    <Stack display='flex' flexDirection='column' flexGrow={1}>
      <ListItemButton onClick={onClick} onContextMenu={onContextMenu}>
        <ChevronRightIcon className={ isOpen ? 'rotate-90' : undefined } />
        <ListItemText>
          {fileSystemFileData.name}
        </ListItemText>
      </ListItemButton>
    </Stack>
  </ListItem>;
  
  function initializationEffect(): void {
    getFileSystemFile();
  }

  async function getFileSystemFile(): Promise<void> {
    if (!fileSystemData)
      return;

    const fileSystemFileData = await fileSystemService.getFileSystemObject(fileSystemData.id, fileSystemObjectId) as FileSystemFileData;
    setFileSystemFileData(fileSystemFileData);
  }

  function onClick(event: React.MouseEvent): void {
    event.stopPropagation(); 
    setIsOpen(!isOpen);
  }

  function onContextMenu(event: React.MouseEvent): void {
    event.preventDefault();
    const contextMenuData: IContextMenuData = {
      event,
      content: <MenuItem onClick={onClickCreateFile}>Create File</MenuItem>
    };
    contextMenuManager.request(contextMenuData);
    //setProjectWidgetContext({ ...fileSystemContext, contextMenuAnchorEl: event.currentTarget, contextMenuContent: <MenuItem onClick={onClickCreateFile}>Create File</MenuItem> });
  }

  function onClickCreateFile(): void {
    setIsCreateDialogOpen(true);
  }

  function onCloseCreateProjectDialog(): void {
    setIsCreateDialogOpen(false);
  }
  
  function onCancelCreateProjectDialog(): void {
    setIsCreateDialogOpen(false);
  }

  async function onCreateCreateProjectDialog(createFileSystemFileData: CreateFileSystemFileData): Promise<void> {
    if (!fileSystemData)
      return;

    await fileSystemService.createFileSystemFile(fileSystemData.id, createFileSystemFileData);
    setIsCreateDialogOpen(false);
    setIsOpen(true);
    getFileSystemFile();
  }
}