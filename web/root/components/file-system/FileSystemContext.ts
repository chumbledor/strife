import { FileSystem } from '@strife/common';
import React from 'react';

export interface FileSystemContextValue {
  fileSystemData?: FileSystem.Data
}

export const FileSystemContext = React.createContext<FileSystemContextValue | undefined>(undefined);

export function useFileSystemContext(): FileSystemContextValue {
  const fileSystemContext = React.useContext(FileSystemContext);
  if (!fileSystemContext)
    throw new Error(`Missing ${typeof FileSystemContext}`);

  return fileSystemContext;
}

export default FileSystemContext;