import di from '@/DependencyInjection';
import ToastQueueManager from '@/managers/ToastQueueManager';
import { type IToastQueueManager } from "@interfaces/managers/IToastQueueManager";
import { type ServiceIdentifier } from 'inversify';

export const ToastQueueManagerServiceId: ServiceIdentifier<IToastQueueManager> = Symbol.for('ToastQueueManagerServiceId');
di.bind<IToastQueueManager>(ToastQueueManagerServiceId)
  .to(ToastQueueManager)
  .inSingletonScope();