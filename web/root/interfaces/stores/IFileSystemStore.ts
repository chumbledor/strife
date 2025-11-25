import { type CreateFileSystemDirectoryData, type CreateFileSystemFileData, type FileSystemDirectoryData, type FileSystemFileData, type AnyFileSystemObjectData, type GetFileSystemObjectsData } from '@strife/common';
import { type useMutation, type useQuery } from '@tanstack/react-query';

export interface IFileSystemStore {
  useCreateFileSystemDirectory(fileSystemId: string, createFileSystemDirectoryData: CreateFileSystemDirectoryData): ReturnType<typeof useMutation<FileSystemDirectoryData>>;
  useCreateFileSystemFile(fileSystemId: string, createFileSystemFileData: CreateFileSystemFileData): ReturnType<typeof useMutation<FileSystemFileData>>;
  // useDeleteFileSystemObject(fileSystemId: string, fileSystemObjectId: string): ReturnType<typeof useMutation>;
  useGetFileSystemObject(fileSystemId: string, fileSystemObjectId: string): ReturnType<typeof useQuery<AnyFileSystemObjectData>>;
  useGetFileSystemObjects(fileSystemId: string, getFileSystemsData: GetFileSystemObjectsData): ReturnType<typeof useQuery<AnyFileSystemObjectData[]>>;
  // useUpdateFileSystemObject(fileSystemId: string, fileSysetemObjectId: string, updateFileSystemObjectData: UpdateFileSystemObjectData): ReturnType<typeof useMutation<FileSystemData>>;
}