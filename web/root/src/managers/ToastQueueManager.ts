import di from '@/DependencyInjection';
import QueueManager from '@/managers/QueueManager';
import { ToastQueueManagerServiceId, type IToastData, type IToastQueueManager } from '@interfaces/managers/IToastQueueManager';
import { type SnackbarCloseReason } from '@mui/material';
import { injectable } from 'inversify';
import { type SyntheticEvent } from 'react';

@injectable()
class ToastQueueManager extends QueueManager<IToastData> implements IToastQueueManager {

  protected configure(item: IToastData): void {
    const onClose = item.onClose;
    item.onClose = 
      (event: Event | SyntheticEvent<any, Event>, reason: SnackbarCloseReason): void => {
        if (onClose)
          onClose(event, reason);

        if (this.head == item)
          this.dequeue();
      };
  }

  protected activate(item: IToastData): void {
    item.open = true;
  }

  protected deactivate(item: IToastData): void {
    item.open = false;
  }

}

di.bind(ToastQueueManagerServiceId).to(ToastQueueManager).inSingletonScope();