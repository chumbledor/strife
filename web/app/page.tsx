'use client'

import di from '@/DependencyInjection';
import { ProjectServiceServiceId } from '@/di/services/ProjectServiceInjector';
import { UserServiceId } from '@/di/UserInjector';
import AuthenticatedPage from '@components/page/AuthenticatedPage';
import CreateProjectDialog from '@components/project/dialogs/CreateProjectDialog';
import ProjectList from '@components/project/ProjectList';
import { Add as AddIcon, Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import { Box, Button, IconButton, Paper, type ListItemProps } from '@mui/material';
import { type CreateProjectData, type ProjectData } from '@strife/common';
import { useRouter } from 'next/navigation';
import React from 'react';

export function HomePage(): React.JSX.Element {
  
  const user = di.get(UserServiceId);
  const projectService = di.get(ProjectServiceServiceId);
  const router = useRouter();
  const [ projects, setProjects ] = React.useState<ProjectData[]>([]);
  const [ isCreateDialogOpen, setIsCreateDialogOpen ] = React.useState(false);
  React.useEffect(initializationEffect, []);

  const actions = 
    <IconButton onClick={onClickCreateProject}>
      <AddIcon />
    </IconButton>;

  const empty = <Button variant='contained' sx={{ width: '100%' }} onClick={onClickCreateProject}>Create a Project</Button>;

  const listItemPropsCallback = (projectData: ProjectData, index: number): ListItemProps => {
    const secondaryAction = <React.Fragment>
      <IconButton onClick={onClickEditProject}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={onClickDeleteProject(projectData)}>
        <DeleteIcon />
      </IconButton>
    </React.Fragment>;
    return { secondaryAction };

    function onClickEditProject() {
      goToProjectPage(projectData);
    }
  }

  return <AuthenticatedPage>
    <Box sx={{ display: 'flex', width: '100vw', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
      <Paper sx={{ width: { xs: '100%', md: '1024px' }, height: '100%' }}>
        <ProjectList projects={projects} title='Projects' actions={actions} empty={empty} listItemPropsCallback={listItemPropsCallback} />
      </Paper>
    </Box>
    <CreateProjectDialog open={isCreateDialogOpen} onCancel={onCancelCreateProjectDialog} onClose={onCloseCreateProjectDialog} onCreate={onCreateCreateProjectDialog} fullWidth maxWidth='sm' />
  </AuthenticatedPage>;

  function initializationEffect(): void {
    getProjects();
  }

  async function getProjects(): Promise<void> {
    const projects = await projectService.getProjects({ accountId: user.accountData?.id });
    setProjects(projects);
  }

  function onClickCreateProject(): void {
    setIsCreateDialogOpen(true);
  }

  function onClickDeleteProject(projectData: ProjectData): () => Promise<void> {
    return async function (): Promise<void> {
      await projectService.deleteProject(projectData.id);
      const index = projects.indexOf(projectData);
      projects.splice(index, 1);
      setProjects(projects);
    }
  }

  function onCloseCreateProjectDialog(): void {
    setIsCreateDialogOpen(false);
  }

  function onCancelCreateProjectDialog(): void {
    setIsCreateDialogOpen(false);
  }

  async function onCreateCreateProjectDialog(createProjectData: CreateProjectData): Promise<void> {
    const projectData = await projectService.createProject(createProjectData);
    setIsCreateDialogOpen(false);
    projects.push(projectData);
    setProjects(projects);
    goToProjectPage(projectData);
  }
  
  function goToProjectPage(projectData: ProjectData): void {
    router.push(`/projects/${projectData.id}`);
  }

}

export default HomePage;