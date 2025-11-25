'use client'

import di from '@/DependencyInjection';
import ContextMenu from '@components/ContextMenu';
import PrimaryAppBar, { type PrimaryAppBarProps } from '@components/navigation/PrimaryAppBar';
import SecondaryAppBar, { type SecondaryAppBarProps } from '@components/navigation/SecondaryAppBar';
import Toasts from '@components/Toasts';
import { Box } from '@mui/material';
import { QueryClientManagerServiceId } from '@root/src/di/managers/QueryClientManagerInjector';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

export interface PageProps extends React.PropsWithChildren {
  primaryAppBarProps?: PrimaryAppBarProps;
  secondaryAppBarProps?: SecondaryAppBarProps;
}

export default function Page({ children, primaryAppBarProps, secondaryAppBarProps }: PageProps): React.JSX.Element {
  const queryClientManager = di.get(QueryClientManagerServiceId);
  return <Box display='flex' flexDirection='column' height='100vh'>
    <Box flexGrow={0}>
      <PrimaryAppBar {...primaryAppBarProps} />
    </Box>
    <QueryClientProvider client={queryClientManager.queryClient}>
      {children}
    </QueryClientProvider>
    <Box flexGrow={0}>
      <SecondaryAppBar {...secondaryAppBarProps} />
    </Box>
    <ContextMenu />
    <Toasts />
  </Box>;
}
