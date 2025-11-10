'use client'

import { ListItem, ListItemText, type ListItemProps } from '@mui/material';
import { type ProjectData } from '@strife/common';
import React from 'react';

export interface ProjectListItemProps extends ListItemProps {
  projectData: ProjectData
}

export default function ProjectListItem({ projectData, ...listItemProps }: ProjectListItemProps): React.JSX.Element {
  return <ListItem {...listItemProps}>
    <ListItemText primary={projectData.name} secondary={projectData.description} />
  </ListItem>;
}
