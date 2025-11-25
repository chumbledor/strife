import Batcher from '@/collections/Batcher';
import di from '@/DependencyInjection';
import { QueryClientManagerServiceId } from '@/di/managers/QueryClientManagerInjector';
import { ProjectServiceServiceId } from '@/di/services/ProjectServiceInjector';
import { type IProjectStore } from '@interfaces/stores/IProjectStore';
import { GetProjectsSchema, type CreateProjectData, type GetProjectsData, type ProjectData, type UpdateProjectData } from '@strife/common';
import { useMutation, useQuery } from '@tanstack/react-query';
import { injectable } from 'inversify';

@injectable()
export class ProjectStore implements IProjectStore {
  
  private _queryClientManager = di.get(QueryClientManagerServiceId);
  private _projectService = di.get(ProjectServiceServiceId);
  private _batcher = new Batcher<string, ProjectData>(this.onFetch.bind(this));

  public useCreateProject(createProjectData: CreateProjectData): ReturnType<typeof useMutation<ProjectData>> {
    return useMutation({
      mutationFn: (): Promise<ProjectData> => this._projectService.createProject(createProjectData),
      onSuccess: this.setProjectQueryData.bind(this)
    });
  }

  public useDeleteProject(projectId: string): ReturnType<typeof useMutation> {
    return useMutation({
      mutationFn: (): Promise<void> => this._projectService.deleteProject(projectId),
      onSuccess: (): void => this.invalidateProjectQueryData(projectId)
    });
  }

  public useGetProject(projectId: string): ReturnType<typeof useQuery<ProjectData>> {
    return useQuery({ 
      queryKey: this.getProjectQueryKey(projectId), 
      queryFn: (): Promise<ProjectData> => this._batcher.request(projectId)
    });
  }

  public useGetProjects(getProjectsData: GetProjectsData): ReturnType<typeof useQuery<ProjectData[]>> {
    return useQuery({
      queryKey: this.getProjectsQueryKey(getProjectsData),
      queryFn: async (): Promise<ProjectData[]> => {
        const projectDatas = await this._projectService.getProjects(getProjectsData)
        projectDatas.forEach(this.setProjectQueryData.bind(this));
        return projectDatas;
      }
    });
  }

  public useUpdateProject(projectId: string, updateProjectData: UpdateProjectData): ReturnType<typeof useMutation<ProjectData>> {
    return useMutation({
      mutationFn: (): Promise<ProjectData> => this._projectService.updateProject(projectId, updateProjectData),
      onSuccess: this.setProjectQueryData.bind(this)
    });
  }

  private getProjectQueryKey(projectId: string): unknown[] {
    return [ 'project', projectId ];
  }

  private setProjectQueryData(projectData: ProjectData): void {
    this._queryClientManager.queryClient.setQueryData(
      this.getProjectQueryKey(projectData.id),
      projectData
    );
  }

  private invalidateProjectQueryData(projectId: string): void {
    this._queryClientManager.queryClient.invalidateQueries({
      queryKey: this.getProjectQueryKey(projectId)
    });
  }

  private getProjectsQueryKey(getProjectsData: GetProjectsData): unknown[] {
    return [ 'projects', getProjectsData ];
  }

  private async onFetch(ids: string[]): Promise<Map<string, ProjectData>> {
    const getProjectsData = await GetProjectsSchema.parseAsync({ ids });
    const projectDatas = await this._projectService.getProjects(getProjectsData);
    const projectEntries = projectDatas.map((projectData: ProjectData): [string, ProjectData] => [ projectData.id, projectData ]);
    return new Map(projectEntries);
  }

}

export default ProjectStore;