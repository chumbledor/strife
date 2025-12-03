import FileSystemContext, { type FileSystemContextValue } from '@components/file-system/FileSystemContext';
import { FileSystem } from '@strife/common';
import React from 'react';

export interface FileSystemContextProviderProps extends React.PropsWithChildren {
  fileSystemData: FileSystem.Data
}

export function FileSystemContextProvider({ fileSystemData, children }: FileSystemContextProviderProps): React.JSX.Element {
  const value: FileSystemContextValue = {
    fileSystemData
  };

  return <FileSystemContext.Provider value={value}>
    {children}
  </FileSystemContext.Provider>;
}

export default FileSystemContextProvider;