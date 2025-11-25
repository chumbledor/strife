import di from '@/DependencyInjection';
import { ContextMenuManagerServiceId } from '@/di/managers/ContextMenuManagerInjector';
import { FileSystemServiceServiceId } from '@/di/services/FileSystemServiceInjector';
import { useFileSystemContext } from '@components/file-system//FileSystemContext';
import CreateFileSystemDirectoryDialog from '@components/file-system/dialogs/CreateFileSystemDirectoryDialog';
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, type ListItemProps, ListItemText, MenuItem, Stack, useTheme } from '@mui/material';
import { IContextMenuData } from '@root/interfaces/managers/IContextMenuManager';
import { type CreateFileSystemDirectoryData, type FileSystemDirectoryData } from '@strife/common';
import React from 'react';
import FileSystemObjectListItem from '@components/file-system/FileSystemObjectListItem';

export interface FileSystemDirectoryListItemProps extends ListItemProps {
  fileSystemObjectId: string
}

export default function FileSystemDirectoryListItem({ fileSystemObjectId, ...listItemProps }: FileSystemDirectoryListItemProps): React.JSX.Element {
  const fileSystemService = di.get(FileSystemServiceServiceId);
  const contextMenuManager = di.get(ContextMenuManagerServiceId);
  const theme = useTheme();
  const { fileSystemData } = useFileSystemContext();
  const [ fileSystemDirectoryData, setFileSystemDirectoryData ] = React.useState<FileSystemDirectoryData>();
  const [ isOpen, setIsOpen ] = React.useState(false);
  const [ isCreateDialogOpen, setIsCreateDialogOpen ] = React.useState(false);
  React.useEffect(initializationEffect, []);

  if (!fileSystemData || !fileSystemDirectoryData)
    return <React.Fragment />;

  const fileSystemDirectoryListItems = fileSystemDirectoryData.childrenIds.map(
    (childId: string, index: number): React.JSX.Element => 
      <FileSystemObjectListItem key={index} fileSystemObjectId={childId} />
  );

  return <ListItem disablePadding {...listItemProps}>
    <Stack display='flex' flexDirection='column' flexGrow={1}>
      <ListItemButton onClick={onClick} onContextMenu={onContextMenu}>
        <ChevronRightIcon className={ isOpen ? 'rotate-90' : undefined } />
        <ListItemText>
          {fileSystemDirectoryData.name}
        </ListItemText>
      </ListItemButton>
      <Box paddingLeft={1} borderLeft={`2px solid ${theme.palette.divider}`}>
        {
          isOpen
            ? <List>
                {fileSystemDirectoryListItems}
              </List>
            : undefined
        }
      </Box>
    </Stack>
    <CreateFileSystemDirectoryDialog parentId={fileSystemObjectId} open={isCreateDialogOpen} onCancel={onCancelCreateProjectDialog} onClose={onCloseCreateProjectDialog} onCreate={onCreateCreateProjectDialog} fullWidth maxWidth='sm' />
  </ListItem>;
  
  function initializationEffect(): void {
    getFileSystemDirectory();
  }

  async function getFileSystemDirectory(): Promise<void> {
    if (!fileSystemData)
      return;

    const fileSystemDirectoryData = await fileSystemService.getFileSystemObject(fileSystemData.id, fileSystemObjectId) as FileSystemDirectoryData;
    setFileSystemDirectoryData(fileSystemDirectoryData);
  }

  function onClick(event: React.MouseEvent): void {
    event.stopPropagation(); 
    setIsOpen(!isOpen);
  }

  function onContextMenu(event: React.MouseEvent): void {
    event.preventDefault();
    const contextMenuData: IContextMenuData = {
      event,
      content: <React.Fragment>
        <MenuItem onClick={onClickCreateDirectory}>Create Directory</MenuItem>
      </React.Fragment>
    };
    contextMenuManager.request(contextMenuData);
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
    if (!fileSystemData)
      return;

    await fileSystemService.createFileSystemDirectory(fileSystemData.id, createFileSystemDirectoryData);
    setIsCreateDialogOpen(false);
    setIsOpen(true);
    getFileSystemDirectory();
  }
}