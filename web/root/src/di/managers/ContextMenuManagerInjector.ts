import di from '@/DependencyInjection';
import ContextMenuManager from '@/managers/ContextMenuManager';
import { type ServiceIdentifier } from 'inversify';

export const ContextMenuManagerServiceId: ServiceIdentifier<ContextMenuManager> = Symbol.for('ContextMenuManagerServiceId');
di.bind<ContextMenuManager>(ContextMenuManagerServiceId)
  .to(ContextMenuManager)
  .inSingletonScope();