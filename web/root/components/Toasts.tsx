'use client'

import di from '@/DependencyInjection';
import { ToastQueueManagerServiceId } from '@/di/managers/ToastQueueManagerInjector';
import '@/managers/ToastQueueManager';
import { Snackbar } from '@mui/material';
import React from 'react';

export interface ToastsProps {}

export function Toasts({}: ToastsProps): React.JSX.Element {

  const toastQueueManager = di.get(ToastQueueManagerServiceId);
  const [ snackbar, setSnackbar ] = React.useState<React.ReactNode | undefined>();
  React.useEffect(initializationEffect, []);

  return <React.Fragment>{snackbar}</React.Fragment>;

  function initializationEffect(): () => void {
    onHeadChanged();
    toastQueueManager.headChangedEvent.add(onHeadChanged);
    return cleanupEffect;
  }

  function cleanupEffect(): void {
    toastQueueManager.headChangedEvent.remove(onHeadChanged);
  }

  function onHeadChanged(): void {
    const snackbar = toastQueueManager.head
      ? <Snackbar key={toastQueueManager.version} {...toastQueueManager.head} />
      : undefined;
    setSnackbar(snackbar);
  }

}

export default Toasts;