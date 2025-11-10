import { type IQueueManager } from '@interfaces/managers/IQueueManager';
import { type SnackbarProps } from '@mui/material';
import { type ServiceIdentifier } from 'inversify';

export interface IToastQueueManager extends IQueueManager<IToastData> {}
export type IToastData = SnackbarProps;

export const ToastQueueManagerServiceId: ServiceIdentifier<IToastQueueManager> = Symbol.for('ToastQueueManagerServiceId');