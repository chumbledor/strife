import di from '@/DependencyInjection';
import ContextMenuManager from '@/managers/ContextMenuManager';
import { type IContextMenuManager } from "@interfaces/managers/IContextMenuManager";
import { type ServiceIdentifier } from 'inversify';

export const ContextMenuManagerServiceId: ServiceIdentifier<IContextMenuManager> = Symbol.for('ContextMenuManagerServiceId');
di.bind<IContextMenuManager>(ContextMenuManagerServiceId)
  .to(ContextMenuManager)
  .inSingletonScope();