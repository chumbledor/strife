import Batcher from '@/collections/Batcher';
import BaseService from '@/services/BaseService';
import { type IFileSystemService } from '@interfaces/services/IFileSystemService';
import { AnyFileSystemObjectSchema, FileSystemDirectorySchema, FileSystemFileSchema, GetFileSystemObjectsSchema, type AnyFileSystemObjectData, type CreateFileSystemDirectoryData, type CreateFileSystemFileData, type FileSystemDirectoryData, type FileSystemFileData, type GetFileSystemObjectsData } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
export class FileSystemService extends BaseService implements IFileSystemService {

  private _batchersByProjectId = new Map<string, Batcher<string, AnyFileSystemObjectData>>();

  protected override get baseUrl(): string | URL | undefined {
    return `http://localhost:3000/filesystems`;
  }
  
  public createFileSystemDirectory(fileSystemId: string, createFileSystemDirectoryData: CreateFileSystemDirectoryData): Promise<FileSystemDirectoryData> {
    if (!this.user.accountData)
      return Promise.reject();

    return this.post<FileSystemDirectoryData>({ schema: FileSystemDirectorySchema, url: `/${fileSystemId}/objects`, data: createFileSystemDirectoryData });
  }
  
  public createFileSystemFile(fileSystemId: string, createFileSystemFileData: CreateFileSystemFileData): Promise<FileSystemFileData> {
    if (!this.user.accountData)
      return Promise.reject();

    return this.post<FileSystemFileData>({ schema: FileSystemFileSchema, url: `/${fileSystemId}/objects`, data: createFileSystemFileData });
  }
  
  public async getFileSystemObject(fileSystemId: string, fileSystemObjectId: string): Promise<AnyFileSystemObjectData> {
    const self = this;

    if (!this.user.accountData)
      return Promise.reject();

    let batcher = this._batchersByProjectId.get(fileSystemId);
    if (!batcher) {
      batcher = new Batcher<string, AnyFileSystemObjectData>(onFetch);
      this._batchersByProjectId.set(fileSystemId, batcher);
    }

    return batcher.request(fileSystemObjectId);

    async function onFetch(ids: string[]): Promise<Map<string, AnyFileSystemObjectData>> {
      const getAccountsData = await GetFileSystemObjectsSchema.parseAsync({ ids });
      const anyFileSystemObjectsData = await self.getFileSystemObjects(fileSystemId, getAccountsData);
      const anyFileSystemObjectEntries = anyFileSystemObjectsData.map((accountData: AnyFileSystemObjectData): [string, AnyFileSystemObjectData] => [ accountData.id, accountData ]);
      return new Map(anyFileSystemObjectEntries);
    }
  }

  public async getFileSystemObjects(fileSystemId: string, getFileSystemObjectsData: GetFileSystemObjectsData): Promise<AnyFileSystemObjectData[]> {
    if (!this.user.accountData)
      return Promise.reject();

    return await this.get<AnyFileSystemObjectData[]>({ schema: AnyFileSystemObjectSchema.array(), url: `/${fileSystemId}/objects`, data: getFileSystemObjectsData });
  }

}

export default FileSystemService;