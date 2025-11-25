'use client'

import { Box, Divider, List, ListItem, ListItemText, Typography, type ListItemProps, type ListProps } from '@mui/material';
import ProjectListItem from '@root/components/project/ProjectListItem';
import { type ProjectData } from '@strife/common';
import React from 'react';

const DefaultEmpty = 
  <ListItem sx={{ justifyContent: 'center', textAlign: 'center' }}>
    <ListItemText>There are no items to display here.</ListItemText>
  </ListItem>;

interface ProjectListProps extends ListProps {
  title: string,
  projects: ProjectData[],
  actions?: React.ReactNode,
  empty?: React.ReactNode,
  listItemPropsCallback?: (projectData: ProjectData, index: number) => ListItemProps;
}

export default function ProjectList({ title, projects, actions, empty, listItemPropsCallback, ...listProps }: ProjectListProps): React.JSX.Element {
  const projectListItems = projects.map(
    (projectData: ProjectData, index: number): React.JSX.Element => {
      const listItemProps = listItemPropsCallback
        ? listItemPropsCallback(projectData, index)
        : {};
      return <ProjectListItem key={index} projectData={projectData} {...listItemProps} />;
    }
  );

  const sx = {
    '& > li:nth-of-type(even)': {
      backgroundColor: 'action.hover', // or a custom color
    },
    '& > li:nth-of-type(odd)': {
      backgroundColor: 'background.paper',
    },
  };

  return <Box>
    <Box display='flex' alignItems='center' justifyContent='space-between' padding={2}>
      <Typography variant='h6'>{title}</Typography>
      {actions}
    </Box>
    <Divider />
    <List sx={sx} {...listProps}>
      {
        projectListItems.length > 0
          ? projectListItems
          : <ListItem>{empty ?? DefaultEmpty}</ListItem>
      }
    </List>
  </Box>;
}