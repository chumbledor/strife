import { type MenuProps } from '@mui/material';
import { type IAction } from '@strife/common';
import React from 'react';

export interface IContextMenuData {
  event: React.MouseEvent,
  menuProps?: MenuProps,
  content: React.ReactNode
}

export interface IContextMenuManager {
  readonly version: number;
  readonly contextMenuData?: IContextMenuData;
  readonly contextMenuDataChangedEvent: IAction<[ IContextMenuData | undefined ]>;
  request(contextMenuData: IContextMenuData): void;
  dismiss(): void;
}