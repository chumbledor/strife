'use client'

import { AppBar, Toolbar, type AppBarProps } from '@mui/material';
import React from 'react';

export interface SecondaryAppBarProps extends AppBarProps {}

export default function SecondaryAppBar({ children, ...appBarProps }: SecondaryAppBarProps): React.JSX.Element {
  return children != undefined
    ? <AppBar position='static' {...appBarProps}>
      <Toolbar>
        {children}
      </Toolbar>
    </AppBar>
    : <React.Fragment />;
}
