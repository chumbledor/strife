import { type CreateProjectData, type GetProjectsData, type ProjectData, type UpdateProjectData } from '@strife/common';
import { type useMutation, type useQuery } from '@tanstack/react-query';

export interface IProjectStore {
  useCreateProject(createProjectData: CreateProjectData): ReturnType<typeof useMutation<ProjectData>>;
  useDeleteProject(projectId: string): ReturnType<typeof useMutation>;
  useGetProject(projectId: string): ReturnType<typeof useQuery<ProjectData>>;
  useGetProjects(getProjectsData: GetProjectsData): ReturnType<typeof useQuery<ProjectData[]>>;
  useUpdateProject(projectId: string, updateProjectData: UpdateProjectData): ReturnType<typeof useMutation<ProjectData>>;
}