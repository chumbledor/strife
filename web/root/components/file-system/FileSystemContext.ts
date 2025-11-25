import { type FileSystemData } from '@strife/common';
import React from 'react';

export interface IFileSystemContext {
  fileSystemData?: FileSystemData
}

export const FileSystemContext = React.createContext<IFileSystemContext | undefined>(undefined);

export function useFileSystemContext(): IFileSystemContext {
  const fileSystemContext = React.useContext(FileSystemContext);
  if (!fileSystemContext)
    throw new Error(`Missing ${typeof FileSystemContext}`);

  return fileSystemContext;
}

export default FileSystemContext;