import di from '@/DependencyInjection';
import { ContextMenuManagerServiceId } from '@/di/managers/ContextMenuManagerInjector';
import { FileSystemStoreServiceId } from '@/di/stores/FileSystemStoreInjector';
import { ContextMenuData } from '@/managers/ContextMenuManager';
import { useFileSystemContext } from '@components/file-system//FileSystemContext';
import CreateFileSystemDirectoryDialog from '@components/file-system/dialogs/CreateFileSystemDirectoryObjectDialog';
import FileSystemObjectListItem from '@components/file-system/FileSystemObjectListItem';
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { Box, Divider, List, ListItem, ListItemButton, type ListItemProps, ListItemText, MenuItem, Stack, useTheme } from '@mui/material';
import { FileSystem } from '@strife/common';
import React from 'react';

export interface FileSystemDirectoryObjectListItemProps extends ListItemProps {
  fileSystemObjectId: string
}

export default function FileSystemDirectoryObjectListItem({ fileSystemObjectId, ...listItemProps }: FileSystemDirectoryObjectListItemProps): React.JSX.Element {
  const contextMenuManager = di.get(ContextMenuManagerServiceId);
  const theme = useTheme();
  const { fileSystemData } = useFileSystemContext();
  const [ isOpen, setIsOpen ] = React.useState(false);
  const [ isCreateDirectoryObjectDialogOpen, setIsCreateDirectoryObjectDialogOpen ] = React.useState(false);

  if (!fileSystemData)
    return <React.Fragment />;

  const fileSystemStore = di.get(FileSystemStoreServiceId);
  const { data: anyObjectData } = fileSystemStore.useGetFileSystemObject(fileSystemData.id, fileSystemObjectId);
  const createFileSystemDirectoryObject = fileSystemStore.useCreateFileSystemDirectoryObject();
  const createFileSystemFileObject = fileSystemStore.useCreateFileSystemFileObject();

  if (!anyObjectData)
    return <React.Fragment />;

  const directoryObjectData = anyObjectData as FileSystem.DirectoryObjectData;

  const fileSystemDirectoryListItems = directoryObjectData.childrenFileSystemObjectIds.map(
    (childFileSystemObjectId: string, index: number): React.JSX.Element => 
      <FileSystemObjectListItem key={index} fileSystemObjectId={childFileSystemObjectId} />
  );

  return <ListItem disablePadding {...listItemProps}>
    <Stack display='flex' flexDirection='column' flexGrow={1}>
      <ListItemButton onClick={onClick} onContextMenu={onContextMenu}>
        <ChevronRightIcon className={ isOpen ? 'rotate-90' : undefined } />
        <ListItemText>
          {directoryObjectData.name}
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
    <CreateFileSystemDirectoryDialog parentFileSystemObjectId={fileSystemObjectId} open={isCreateDirectoryObjectDialogOpen} onCancel={onCancelCreateProjectDialog} onClose={onCloseCreateProjectDialog} onCreate={onCreateCreateProjectDialog} fullWidth maxWidth='sm' />
  </ListItem>;

  function onClick(event: React.MouseEvent): void {
    event.stopPropagation(); 
    setIsOpen(!isOpen);
  }

  function onContextMenu(event: React.MouseEvent): void {
    event.preventDefault();
    const contextMenuData: ContextMenuData = {
      event,
      items: [ 
        <MenuItem key='create-directory' onClick={onClickCreateDirectory}>Create Directory</MenuItem>,
        <MenuItem key='create-file' onClick={onClickCreateFile}>Create File</MenuItem>,
        <Divider key='divider' />,
        <MenuItem key='rename' onClick={onClickRename}>Rename</MenuItem>,
        <MenuItem key='delete' onClick={onClickDelete}>Delete</MenuItem>,
      ]
    };
    contextMenuManager.request(contextMenuData);
  }

  function onClickCreateDirectory(): void {
    setIsCreateDirectoryObjectDialogOpen(true);
  }

  function onCloseCreateProjectDialog(): void {
    setIsCreateDirectoryObjectDialogOpen(false);
  }
  
  function onCancelCreateProjectDialog(): void {
    setIsCreateDirectoryObjectDialogOpen(false);
  }

  async function onCreateCreateProjectDialog(createDirectoryObjectData: FileSystem.CreateDirectoryObjectData): Promise<void> {
    if (!fileSystemData)
      return;

    await createFileSystemDirectoryObject.mutateAsync({ fileSystemId: fileSystemData.id, createDirectoryObjectData });
    setIsCreateDirectoryObjectDialogOpen(false);
    setIsOpen(true);
  }

  function onClickCreateFile(): void {}
  function onClickRename(): void {}
  function onClickDelete(): void {}
}