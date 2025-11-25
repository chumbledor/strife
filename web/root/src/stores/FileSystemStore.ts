import Batcher from '@/collections/Batcher';
import di from '@/DependencyInjection';
import { QueryClientManagerServiceId } from '@/di/managers/QueryClientManagerInjector';
import { FileSystemServiceServiceId } from '@/di/services/FileSystemServiceInjector';
import { type IBatcher } from '@interfaces/collections/IBatcher';
import { type IFileSystemStore } from '@interfaces/stores/IFileSystemStore';
import { type AnyFileSystemObjectData, type CreateFileSystemDirectoryData, type CreateFileSystemFileData, type FileSystemDirectoryData, type FileSystemFileData, type GetFileSystemObjectsData, GetFileSystemObjectsSchema } from '@strife/common';
import { useMutation, useQuery } from '@tanstack/react-query';
import { injectable } from 'inversify';

@injectable()
export class FileSystemStore implements IFileSystemStore {
  
  private _queryClientManager = di.get(QueryClientManagerServiceId);
  private _fileSystemService = di.get(FileSystemServiceServiceId);
  private _batchers = new Map<string, Batcher<string, AnyFileSystemObjectData>>();

  useCreateFileSystemDirectory(fileSystemId: string, createFileSystemDirectoryData: CreateFileSystemDirectoryData): ReturnType<typeof useMutation<FileSystemDirectoryData>> {
    return useMutation({
      mutationFn: (): Promise<FileSystemDirectoryData> => this._fileSystemService.createFileSystemDirectory(fileSystemId, createFileSystemDirectoryData),
      onSuccess: (fileSystemDirectoryData: FileSystemDirectoryData): void => {
        this.setFileSystemObjectQueryData(fileSystemDirectoryData);
        if (fileSystemDirectoryData.parentId)
          this.invalidateFileSystemObjectQueryData(fileSystemId, fileSystemDirectoryData.parentId);
      }
    });
  }

  useCreateFileSystemFile(fileSystemId: string, createFileSystemFileData: CreateFileSystemFileData): ReturnType<typeof useMutation<FileSystemFileData>> {
    return useMutation({
      mutationFn: (): Promise<FileSystemFileData> => this._fileSystemService.createFileSystemFile(fileSystemId, createFileSystemFileData),
      onSuccess: (fileSystemFileData: FileSystemFileData): void => {
        this.setFileSystemObjectQueryData(fileSystemFileData);
        if (fileSystemFileData.parentId)
          this.invalidateFileSystemObjectQueryData(fileSystemId, fileSystemFileData.parentId);
      }
    });
  }

  useGetFileSystemObject(fileSystemId: string, fileSystemObjectId: string): ReturnType<typeof useQuery<AnyFileSystemObjectData>> {
    return useQuery({ 
      queryKey: this.getFileSystemObjectQueryKey(fileSystemId, fileSystemObjectId), 
      queryFn: (): Promise<AnyFileSystemObjectData> => this.getBatcher(fileSystemId).request(fileSystemObjectId)
    });
  }

  useGetFileSystemObjects(fileSystemId: string, getFileSystemObjectsData: GetFileSystemObjectsData): ReturnType<typeof useQuery<AnyFileSystemObjectData[]>> {
    return useQuery({
      queryKey: this.getFileSystemObjectsQueryKey(fileSystemId, getFileSystemObjectsData),
      queryFn: async (): Promise<AnyFileSystemObjectData[]> => {
        const fileSystemDatas = await this._fileSystemService.getFileSystemObjects(fileSystemId, getFileSystemObjectsData)
        fileSystemDatas.forEach(this.setFileSystemObjectQueryData.bind(this));
        return fileSystemDatas;
      }
    });
  }

  private getFileSystemObjectQueryKey(fileSystemId: string, fileSystemObjectId: string): unknown[] {
    return [ 'file-system-object', fileSystemId, fileSystemObjectId ];
  }

  private setFileSystemObjectQueryData(anyFileSystemObjectData: AnyFileSystemObjectData): void {
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

  private getFileSystemObjectsQueryKey(fileSystemId: string, getFileSystemObjectsData: GetFileSystemObjectsData): unknown[] {
    return [ 'file-system-objects', fileSystemId, getFileSystemObjectsData ];
  }
  
  private getBatcher(fileSystemId: string): IBatcher<string, AnyFileSystemObjectData> {
    const self = this;

    let batcher = this._batchers.get(fileSystemId);
    if (!batcher) {
      batcher = new Batcher(onFetch);
      this._batchers.set(fileSystemId, batcher);
    }

    return batcher;

    async function onFetch(ids: string[]): Promise<Map<string, AnyFileSystemObjectData>> {
      const getFileSystemObjectsData = await GetFileSystemObjectsSchema.parseAsync({ ids });
      const anyFileSystemObjectDatas = await self._fileSystemService.getFileSystemObjects(fileSystemId, getFileSystemObjectsData);
      const anyFileSystemObjectEntries = anyFileSystemObjectDatas.map((anyFileSystemObjectData: AnyFileSystemObjectData): [string, AnyFileSystemObjectData] => [ anyFileSystemObjectData.id, anyFileSystemObjectData ]);
      return new Map(anyFileSystemObjectEntries);
    }
  }

}

export default FileSystemStore;