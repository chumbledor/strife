import QueueManager from '@/managers/QueueManager';
import { type SnackbarCloseReason, type SnackbarProps } from '@mui/material';
import { injectable } from 'inversify';
import { type SyntheticEvent } from 'react';

export type ToastData = SnackbarProps;

@injectable()
export class ToastQueueManager extends QueueManager<ToastData> {

  protected configure(item: ToastData): void {
    const onClose = item.onClose;
    item.onClose = 
      (event: Event | SyntheticEvent<any, Event>, reason: SnackbarCloseReason): void => {
        if (onClose)
          onClose(event, reason);

        if (this.head == item)
          this.dequeue();
      };
  }

  protected activate(item: ToastData): void {
    item.open = true;
  }

  protected deactivate(item: ToastData): void {
    item.open = false;
  }

}

export default ToastQueueManager;