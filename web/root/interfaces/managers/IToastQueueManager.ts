import { type IQueueManager } from '@interfaces/managers/IQueueManager';
import { type SnackbarProps } from '@mui/material';

export interface IToastQueueManager extends IQueueManager<IToastData> {}
export type IToastData = SnackbarProps;