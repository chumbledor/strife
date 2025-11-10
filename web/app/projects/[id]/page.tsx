'use client'

import di from '@/DependencyInjection';
import CodeView from '@root/components/editor/views/CodeView';
import AuthenticatedPage from '@components/page/AuthenticatedPage';
import { ProjectServiceServiceId } from '@interfaces/services/IProjectService';
import { AppBar, Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { type ProjectData } from '@strife/common';
import React from 'react';
import EnumTabs from '@components/generic/EnumTabs';

enum EditorTabs {
  'Code',
  'Scene',
  'Play'
}

export interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export default function ProjectPage({ params }: ProjectPageProps): React.JSX.Element {
  const { id } = React.use(params);
  const projectService = di.get(ProjectServiceServiceId);
  const [ project, setProject ] = React.useState<ProjectData | undefined>();
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
        <Typography variant='subtitle1'>{project?.name}</Typography>
        <Typography variant='subtitle2'>{project?.description}</Typography>
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
    <Box height='100%' display='flex' flexDirection='row'>
      {content}
    </Box>
  </AuthenticatedPage>;
  
  function onTabChange(event: React.SyntheticEvent, value: number): void {
    setTab(value);
  }

  function initializationEffect(): void {
    getProject();
  }

  async function getProject(): Promise<ProjectData> {
    const projectData = await projectService.getProject(id);
    setProject(projectData);
    return projectData;
  }
}
