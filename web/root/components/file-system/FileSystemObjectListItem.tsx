import di from '@/DependencyInjection';
import { FileSystemServiceServiceId } from '@/di/services/FileSystemServiceInjector';
import { useFileSystemContext } from '@components/file-system//FileSystemContext';
import FileSystemDirectoryListItem from '@components/file-system/FileSystemDirectoryListItem';
import FileSystemFileListItem from '@components/file-system/FileSystemFileListItem';
import { type ListItemProps } from '@mui/material';
import { type AnyFileSystemObjectData, FileSystemObjectType } from '@strife/common';
import React from 'react';

export interface FileSystemObjectListItemProps extends ListItemProps {
  fileSystemObjectId: string
}

export default function FileSystemObjectListItem({ fileSystemObjectId, ...listItemProps }: FileSystemObjectListItemProps): React.JSX.Element {
  const fileSystemService = di.get(FileSystemServiceServiceId);
  const { fileSystemData } = useFileSystemContext();
  const [ anyFileSystemObjectData, setAnyFileSystemObjectData ] = React.useState<AnyFileSystemObjectData>();
  React.useEffect(initializationEffect, []);

  if (!fileSystemData || !anyFileSystemObjectData)
    return <React.Fragment />;

  let children: React.ReactNode;
  switch (anyFileSystemObjectData.type) {
    case FileSystemObjectType.Directory:
      return <FileSystemDirectoryListItem fileSystemObjectId={fileSystemObjectId} {...listItemProps} />
    case FileSystemObjectType.File:
      return <FileSystemFileListItem fileSystemObjectId={fileSystemObjectId} {...listItemProps} />
    default: 
      return <React.Fragment />;
  }
  
  function initializationEffect(): void {
    getFileSystemObject();
  }

  async function getFileSystemObject(): Promise<void> {
    if (!fileSystemData)
      return;

    const anyFileSystemObjectData = await fileSystemService.getFileSystemObject(fileSystemData.id, fileSystemObjectId);
    setAnyFileSystemObjectData(anyFileSystemObjectData);
  }
}