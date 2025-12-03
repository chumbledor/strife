import di from '@/DependencyInjection';
import { FileSystemStoreServiceId } from '@/di/stores/FileSystemStoreInjector';
import { useFileSystemContext } from '@components/file-system//FileSystemContext';
import FileSystemDirectoryObjectListItem from '@components/file-system/FileSystemDirectoryObjectListItem';
import FileSystemFileObjectListItem from '@components/file-system/FileSystemFileObjectListItem';
import { type ListItemProps } from '@mui/material';
import { FileSystem } from '@strife/common';
import React from 'react';

export interface FileSystemObjectListItemProps extends ListItemProps {
  fileSystemObjectId: string
}

export default function FileSystemObjectListItem({ fileSystemObjectId, ...listItemProps }: FileSystemObjectListItemProps): React.JSX.Element {
  const { fileSystemData } = useFileSystemContext();

  if (!fileSystemData)
    return <React.Fragment />;

  const fileSystemStore = di.get(FileSystemStoreServiceId);
  const { data: anyObjectData } = fileSystemStore.useGetFileSystemObject(fileSystemData.id, fileSystemObjectId);
  if (!anyObjectData)
    return <React.Fragment />;

  switch (anyObjectData.type) {
    case FileSystem.ObjectType.Directory:
      return <FileSystemDirectoryObjectListItem fileSystemObjectId={fileSystemObjectId} {...listItemProps} />
    case FileSystem.ObjectType.File:
      return <FileSystemFileObjectListItem fileSystemObjectId={fileSystemObjectId} {...listItemProps} />
    default: 
      return <React.Fragment />;
  }
}