'use client'

import di from '@/DependencyInjection';
import { ContextMenuManagerServiceId } from '@/di/managers/ContextMenuManagerInjector';
import '@/managers/ContextMenuManager';
import { type IContextMenuData } from '@interfaces/managers/IContextMenuManager';
import { Menu, type MenuProps } from '@mui/material';
import React from 'react';

export interface ContextMenuProps extends Partial<MenuProps> {}

export function ContextMenu({ ...menuProps }: ContextMenuProps): React.JSX.Element {

  const contextMenuManager = di.get(ContextMenuManagerServiceId);
  const [ contextMenuData, setContextMenuData ] = React.useState<IContextMenuData | undefined>();
  React.useEffect(initializationEffect, []);

  let { open, anchorReference, anchorPosition, ...otherMenuProps } = { ...menuProps, ...contextMenuData?.menuProps };

  open = open ?? contextMenuData != undefined;
  anchorReference = anchorReference ?? 'anchorPosition';
  anchorPosition = anchorPosition ?? { top: contextMenuData?.event.clientY ?? 0, left: contextMenuData?.event.clientX ?? 0 };

  return <Menu key={contextMenuManager.version} open={open} onClose={onClose} anchorReference={anchorReference} anchorPosition={anchorPosition} {...otherMenuProps}>
    {contextMenuData?.content}
  </Menu>

  function initializationEffect(): () => void {
    setContextMenuData(contextMenuManager.contextMenuData);
    contextMenuManager.contextMenuDataChangedEvent.add(setContextMenuData);
    return cleanupEffect;
  }

  function cleanupEffect(): void {
    contextMenuManager.contextMenuDataChangedEvent.remove(setContextMenuData);
  }

  function onClose(): void {
    contextMenuManager.dismiss();
  }
  
}

export default ContextMenu;