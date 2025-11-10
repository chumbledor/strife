'use client'

import di from '@/DependencyInjection';
import '@/managers/ToastQueueManager';
import { ToastQueueManagerServiceId } from '@interfaces/managers/IToastQueueManager';
import { Snackbar } from '@mui/material';
import React from 'react';

export interface ToastsProps {}

export default function Toasts({}: ToastsProps): React.JSX.Element {

  const toastQueueManager = di.get(ToastQueueManagerServiceId);
  const [ snackbar, setSnackbar ] = React.useState<React.ReactNode | undefined>();
  React.useEffect(initializationEffect, []);

  return <React.Fragment>{snackbar}</React.Fragment>;

  function onHeadChanged(): void {
    const snackbar = toastQueueManager.head
      ? <Snackbar key={toastQueueManager.version} {...toastQueueManager.head} />
      : undefined;
    setSnackbar(snackbar);
  }

  function initializationEffect(): void {
    onHeadChanged();
    toastQueueManager.headChangedEvent.add(onHeadChanged);
  }

}
