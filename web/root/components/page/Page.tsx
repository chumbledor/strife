'use client'

import '@/managers/ToastQueueManager';
import '@/services/AccountService';
import '@/services/AuthenticationService';
import '@/services/ProjectService';
import '@/User';
import PrimaryAppBar, { type PrimaryAppBarProps } from '@components/navigation/PrimaryAppBar';
import SecondaryAppBar, { type SecondaryAppBarProps } from '@components/navigation/SecondaryAppBar';
import Toasts from '@components/Toasts';
import { Box } from '@mui/material';
import React from 'react';

export interface PageProps extends React.PropsWithChildren {
  primaryAppBarProps?: PrimaryAppBarProps;
  secondaryAppBarProps?: SecondaryAppBarProps;
}

export default function Page({ children, primaryAppBarProps, secondaryAppBarProps }: PageProps): React.JSX.Element {
  return <Box display='flex' flexDirection='column' height='100vh'>
    <Box flexGrow={0}>
      <PrimaryAppBar {...primaryAppBarProps} />
    </Box>
    {children}
    <Box flexGrow={0}>
      <SecondaryAppBar {...secondaryAppBarProps} />
    </Box>
    <Toasts />
  </Box>;
}
