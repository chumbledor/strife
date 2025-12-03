'use client'

import di from '@/DependencyInjection';
import { ProjectServiceServiceId } from '@/di/services/ProjectServiceInjector';
import EnumTabs from '@components/generic/EnumTabs';
import AuthenticatedPage from '@components/page/AuthenticatedPage';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import ProjectContextProvider from '@components/project/ProjectContextProvider';
import CodeView from '@root/components/editor/views/CodeView';
import { Project } from '@strife/common';
import React from 'react';

enum EditorTabs {
  'Code',
  'Scene',
  'Play'
}

export interface ProjectPageProps {
  params: Promise<{ projectId: string }>
}

export function ProjectPage({ params }: ProjectPageProps): React.JSX.Element {
  
  const { projectId } = React.use(params);
  const projectService = di.get(ProjectServiceServiceId);
  const [ projectData, setProjectData ] = React.useState<Project.Data | undefined>();
  const [ tab, setTab ] = React.useState(0);
  React.useEffect(initializationEffect, []);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  let content: React.ReactNode;
  switch (tab) {
    case EditorTabs.Code:
      content = <CodeView />;
      break;
  }

  const primaryAppBarChildren = isDesktop
    ? <Box display='flex' flexDirection='row' alignItems='center'>
      <Stack paddingX='32px'>
        <Typography variant='subtitle1'>{projectData?.name}</Typography>
        <Typography variant='subtitle2'>{projectData?.description}</Typography>
      </Stack>
      <Box flexGrow={1}>
        <EnumTabs type={EditorTabs} value={tab} onChange={onTabChange} textColor='inherit' indicatorColor='secondary' centered />
      </Box>
    </Box>
    : undefined;

  const secondaryAppBarChildren = !isDesktop
    ? <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
        <EnumTabs type={EditorTabs} value={tab} onChange={onTabChange} textColor='inherit' indicatorColor='secondary' centered />
      </Box>
    : undefined;

  return <AuthenticatedPage primaryAppBarProps={{ children: primaryAppBarChildren }} secondaryAppBarProps={{ children: secondaryAppBarChildren, sx: { alignItems: 'center' } }}>
    <ProjectContextProvider projectId={projectId}>
      <Box height='100%' display='flex' flexDirection='row'>
        {content}
      </Box>
    </ProjectContextProvider>
  </AuthenticatedPage>;
  
  function onTabChange(event: React.SyntheticEvent, value: number): void {
    setTab(value);
  }

  function initializationEffect(): void {
    getProject();
  }

  async function getProject(): Promise<Project.Data> {
    const projectData = await projectService.getProject(projectId);
    setProjectData(projectData);
    return projectData;
  }
  
}

export default ProjectPage;