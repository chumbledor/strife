import di from '@/DependencyInjection';
import ToastQueueManager from '@/managers/ToastQueueManager';
import { type ServiceIdentifier } from 'inversify';

export const ToastQueueManagerServiceId: ServiceIdentifier<ToastQueueManager> = Symbol.for('ToastQueueManagerServiceId');
di.bind<ToastQueueManager>(ToastQueueManagerServiceId)
  .to(ToastQueueManager)
  .inSingletonScope();