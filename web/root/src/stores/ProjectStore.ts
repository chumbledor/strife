import Batcher from '@/collections/Batcher';
import di from '@/DependencyInjection';
import { QueryClientManagerServiceId } from '@/di/managers/QueryClientManagerInjector';
import { ProjectServiceServiceId } from '@/di/services/ProjectServiceInjector';
import { Project } from '@strife/common';
import { useMutation, useQuery } from '@tanstack/react-query';
import { injectable } from 'inversify';

@injectable()
export class ProjectStore {
  
  private _queryClientManager = di.get(QueryClientManagerServiceId);
  private _projectService = di.get(ProjectServiceServiceId);
  private _batcher = new Batcher<string, Project.Data>(this.onFetch.bind(this));

  public useCreateProject(): ReturnType<typeof useMutation<Project.Data, Error, Project.CreateData>> {
    return useMutation({
      mutationFn: (createData: Project.CreateData): Promise<Project.Data> => this._projectService.createProject(createData),
      onSuccess: this.setProjectQueryData.bind(this)
    });
  }

  public useDeleteProject(projectId: string): ReturnType<typeof useMutation> {
    return useMutation({
      mutationFn: (): Promise<void> => this._projectService.deleteProject(projectId),
      onSuccess: (): void => this.invalidateProjectQueryData(projectId)
    });
  }

  public useGetProject(projectId: string): ReturnType<typeof useQuery<Project.Data>> {
    return useQuery({ 
      queryKey: this.getProjectQueryKey(projectId), 
      queryFn: (): Promise<Project.Data> => this._batcher.request(projectId)
    });
  }

  public useGetProjects(getData: Project.GetData): ReturnType<typeof useQuery<Project.Data[]>> {
    return useQuery({
      queryKey: this.getProjectsQueryKey(getData),
      queryFn: async (): Promise<Project.Data[]> => {
        const projectDatas = await this._projectService.getProjects(getData)
        projectDatas.forEach(this.setProjectQueryData.bind(this));
        return projectDatas;
      }
    });
  }

  public useUpdateProject(): ReturnType<typeof useMutation<Project.Data, Error, { projectId: string, updateData: Project.UpdateData }>> {
    return useMutation({
      mutationFn: ({ projectId, updateData }: { projectId: string, updateData: Project.UpdateData }): Promise<Project.Data> => this._projectService.updateProject(projectId, updateData),
      onSuccess: this.setProjectQueryData.bind(this)
    });
  }

  private getProjectQueryKey(projectId: string): unknown[] {
    return [ 'project', projectId ];
  }

  private setProjectQueryData(projectData: Project.Data): void {
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

  private getProjectsQueryKey(getData: Project.GetData): unknown[] {
    return [ 'projects', getData ];
  }

  private async onFetch(ids: string[]): Promise<Map<string, Project.Data>> {
    const getData = await Project.GetSchema.parseAsync({ ids });
    const projectDatas = await this._projectService.getProjects(getData);
    const projectDataEntries = projectDatas.map((projectData: Project.Data): [string, Project.Data] => [ projectData.id, projectData ]);
    return new Map(projectDataEntries);
  }

}

export default ProjectStore;