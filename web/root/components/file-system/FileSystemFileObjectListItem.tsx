import di from '@/DependencyInjection';
import { ContextMenuManagerServiceId } from '@/di/managers/ContextMenuManagerInjector';
import { ContextMenuData } from '@/managers/ContextMenuManager';
import { useFileSystemContext } from '@components/file-system//FileSystemContext';
import { ListItem, ListItemButton, type ListItemProps, ListItemText, MenuItem, Stack } from '@mui/material';
import { FileSystemStoreServiceId } from '@/di/stores/FileSystemStoreInjector';
import { FileSystem } from '@strife/common';
import React from 'react';

export interface FileSystemFileObjectListItemProps extends ListItemProps {
  fileSystemObjectId: string
}

export default function FileSystemFileObjectListItem({ fileSystemObjectId, ...listItemProps }: FileSystemFileObjectListItemProps): React.JSX.Element {
  const contextMenuManager = di.get(ContextMenuManagerServiceId);
  const { fileSystemData } = useFileSystemContext();

  if (!fileSystemData)
    return <React.Fragment />;

  const fileSystemStore = di.get(FileSystemStoreServiceId);
  const { data: anyObjectData } = fileSystemStore.useGetFileSystemObject(fileSystemData.id, fileSystemObjectId);
  
    if (!anyObjectData)
      return <React.Fragment />;
  
    const fileObjectData = anyObjectData as FileSystem.FileObjectData;
  
  return <ListItem disablePadding {...listItemProps}>
    <Stack display='flex' flexDirection='column' flexGrow={1}>
      <ListItemButton onClick={onClick} onContextMenu={onContextMenu}>
        <ListItemText>
          {fileObjectData.name}
        </ListItemText>
      </ListItemButton>
    </Stack>
  </ListItem>;

  function onClick(event: React.MouseEvent): void {
    event.stopPropagation(); 
  }

  function onContextMenu(event: React.MouseEvent): void {
    event.preventDefault();
    const contextMenuData: ContextMenuData = {
      event,
      items: [ 
        <MenuItem key='rename' onClick={onClickRename}>Rename</MenuItem>,
        <MenuItem key='delete' onClick={onClickDelete}>Delete</MenuItem>,
      ]
    };
    contextMenuManager.request(contextMenuData);
  }

  function onClickRename(): void {}
  function onClickDelete(): void {}
}