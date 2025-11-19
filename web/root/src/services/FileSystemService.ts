import Batcher from '@/collections/Batcher';
import BaseService from '@/services/BaseService';
import { type IFileSystemService } from '@interfaces/services/IFileSystemService';
import { AnyFileSystemObjectSchema, FileSystemDirectorySchema, FileSystemFileSchema, GetFileSystemObjectsSchema, type AnyFileSystemObjectData, type CreateFileSystemDirectoryData, type CreateFileSystemFileData, type FileSystemDirectoryData, type FileSystemFileData, type GetFileSystemObjectsData } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
export default class FileSystemService extends BaseService implements IFileSystemService {

  private _batchersByProjectId = new Map<string, Batcher<string, AnyFileSystemObjectData>>();

  protected override get baseUrl(): string | URL | undefined {
    return `http://localhost:3000/fs`;
  }
  
  public createFileSystemDirectory(createFileSystemDirectoryData: CreateFileSystemDirectoryData): Promise<FileSystemDirectoryData> {
    if (!this.user.account)
      return Promise.reject();

    return this.post<FileSystemDirectoryData>({ schema: FileSystemDirectorySchema, data: createFileSystemDirectoryData });
  }
  
  public createFileSystemFile(createFileSystemFileData: CreateFileSystemFileData): Promise<FileSystemFileData> {
    if (!this.user.account)
      return Promise.reject();

    return this.post<FileSystemFileData>({ schema: FileSystemFileSchema, data: createFileSystemFileData });
  }
  
  public async getFileSystemObject(fileSystemObjectId: string, projectId?: string): Promise<AnyFileSystemObjectData> {
    const self = this;

    if (!this.user.account)
      return Promise.reject();
    
    if (!projectId)
      return this.get<AnyFileSystemObjectData>({ schema: AnyFileSystemObjectSchema, url: `/${fileSystemObjectId}` });
    
    let batcher = this._batchersByProjectId.get(projectId);
    if (!batcher) {
      batcher = new Batcher<string, AnyFileSystemObjectData>(onFetch);
      this._batchersByProjectId.set(projectId, batcher);
    }

    return batcher.request(fileSystemObjectId);

    async function onFetch(ids: string[]): Promise<Map<string, AnyFileSystemObjectData>> {
      const getAccountsData = await GetFileSystemObjectsSchema.parseAsync({ projectId, ids });
      const anyFileSystemObjectsData = await self.getFileSystemObjects(getAccountsData);
      const anyFileSystemObjectEntries = anyFileSystemObjectsData.map((accountData: AnyFileSystemObjectData): [string, AnyFileSystemObjectData] => [ accountData.id, accountData ]);
      return new Map(anyFileSystemObjectEntries);
    }
  }

  public async getFileSystemObjects(getFileSystemObjectsData: GetFileSystemObjectsData): Promise<AnyFileSystemObjectData[]> {
    if (!this.user.account)
      return Promise.reject();

    return await this.get<AnyFileSystemObjectData[]>({ schema: AnyFileSystemObjectSchema.array(), data: getFileSystemObjectsData });
  }

}