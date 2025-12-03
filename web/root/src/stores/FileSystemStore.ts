import Batcher from '@/collections/Batcher';
import di from '@/DependencyInjection';
import { QueryClientManagerServiceId } from '@/di/managers/QueryClientManagerInjector';
import { FileSystemServiceServiceId } from '@/di/services/FileSystemServiceInjector';
import { FileSystem } from '@strife/common';
import { useMutation, useQuery } from '@tanstack/react-query';
import { injectable } from 'inversify';

@injectable()
export class FileSystemStore {
  
  private _queryClientManager = di.get(QueryClientManagerServiceId);
  private _fileSystemService = di.get(FileSystemServiceServiceId);
  private _batchers = new Map<string, Batcher<string, FileSystem.AnyObjectData>>();

  useCreateFileSystemDirectoryObject(): ReturnType<typeof useMutation<FileSystem.DirectoryObjectData, Error, { fileSystemId: string, createDirectoryObjectData: FileSystem.CreateDirectoryObjectData }>> {
    return useMutation({
      mutationFn: ({ fileSystemId, createDirectoryObjectData }: { fileSystemId: string, createDirectoryObjectData: FileSystem.CreateDirectoryObjectData }): Promise<FileSystem.DirectoryObjectData> => this._fileSystemService.createFileSystemDirectoryObject(fileSystemId, createDirectoryObjectData),
      onSuccess: (fileSystemDirectoryData: FileSystem.DirectoryObjectData): void => {
        this.setFileSystemObjectQueryData(fileSystemDirectoryData);
        if (fileSystemDirectoryData.parentFileSystemObjectId)
          this.invalidateFileSystemObjectQueryData(fileSystemDirectoryData.fileSystemId, fileSystemDirectoryData.parentFileSystemObjectId);
      }
    });
  }

  useCreateFileSystemFileObject(): ReturnType<typeof useMutation<FileSystem.FileObjectData, Error, { fileSystemId: string, createFileObjectData: FileSystem.CreateFileObjectData }>> {
    return useMutation({
      mutationFn: ({ fileSystemId, createFileObjectData }: { fileSystemId: string, createFileObjectData: FileSystem.CreateFileObjectData }): Promise<FileSystem.FileObjectData> => this._fileSystemService.createFileSystemFileObject(fileSystemId, createFileObjectData),
      onSuccess: (fileSystemFileData: FileSystem.FileObjectData): void => {
        this.setFileSystemObjectQueryData(fileSystemFileData);
        if (fileSystemFileData.parentFileSystemObjectId)
          this.invalidateFileSystemObjectQueryData(fileSystemFileData.fileSystemId, fileSystemFileData.parentFileSystemObjectId);
      }
    });
  }

  useGetFileSystemObject(fileSystemId: string, fileSystemObjectId: string): ReturnType<typeof useQuery<FileSystem.AnyObjectData>> {
    return useQuery({ 
      queryKey: this.getFileSystemObjectQueryKey(fileSystemId, fileSystemObjectId), 
      queryFn: (): Promise<FileSystem.AnyObjectData> => this.getBatcher(fileSystemId).request(fileSystemObjectId)
    });
  }

  useGetFileSystemObjects(fileSystemId: string, getObjectsData: FileSystem.GetObjectsData): ReturnType<typeof useQuery<FileSystem.AnyObjectData[]>> {
    return useQuery({
      queryKey: this.getFileSystemObjectsQueryKey(fileSystemId, getObjectsData),
      queryFn: async (): Promise<FileSystem.AnyObjectData[]> => {
        const fileSystemDatas = await this._fileSystemService.getFileSystemObjects(fileSystemId, getObjectsData)
        fileSystemDatas.forEach(this.setFileSystemObjectQueryData.bind(this));
        return fileSystemDatas;
      }
    });
  }

  private getFileSystemObjectQueryKey(fileSystemId: string, fileSystemObjectId: string): unknown[] {
    return [ 'file-system-object', fileSystemId, fileSystemObjectId ];
  }

  private setFileSystemObjectQueryData(anyFileSystemObjectData: FileSystem.AnyObjectData): void {
    this._queryClientManager.queryClient.setQueryData(
      this.getFileSystemObjectQueryKey(anyFileSystemObjectData.fileSystemId, anyFileSystemObjectData.id),
      anyFileSystemObjectData
    );
  }

  private invalidateFileSystemObjectQueryData(fileSystemId: string, fileSystemObjectId: string): void {
    this._queryClientManager.queryClient.invalidateQueries({
      queryKey: this.getFileSystemObjectQueryKey(fileSystemId, fileSystemObjectId)
    });
  }

  private getFileSystemObjectsQueryKey(fileSystemId: string, getObjectsData: FileSystem.GetObjectsData): unknown[] {
    return [ 'file-system-objects', fileSystemId, getObjectsData ];
  }
  
  private getBatcher(fileSystemId: string): Batcher<string, FileSystem.AnyObjectData> {
    const self = this;

    let batcher = this._batchers.get(fileSystemId);
    if (!batcher) {
      batcher = new Batcher(onFetch);
      this._batchers.set(fileSystemId, batcher);
    }

    return batcher;

    async function onFetch(ids: string[]): Promise<Map<string, FileSystem.AnyObjectData>> {
      const getObjectsData = await FileSystem.GetObjectsSchema.parseAsync({ ids });
      const anyObjectDatas = await self._fileSystemService.getFileSystemObjects(fileSystemId, getObjectsData);
      const anyObjectDataEntries = anyObjectDatas.map((anyFileSystemObjectData: FileSystem.AnyObjectData): [string, FileSystem.AnyObjectData] => [ anyFileSystemObjectData.id, anyFileSystemObjectData ]);
      return new Map(anyObjectDataEntries);
    }
  }

}

export default FileSystemStore;