import FileSystemContext, { type IFileSystemContext } from '@components/file-system/FileSystemContext';
import { type FileSystemData } from '@strife/common';
import React from 'react';

export interface FileSystemContextProviderProps extends React.PropsWithChildren {
  fileSystemData: FileSystemData
}

export function FileSystemContextProvider({ fileSystemData, children }: FileSystemContextProviderProps): React.JSX.Element {
  const value: IFileSystemContext = {
    fileSystemData
  };

  return <FileSystemContext.Provider value={value}>
    {children}
  </FileSystemContext.Provider>;
}

export default FileSystemContextProvider;