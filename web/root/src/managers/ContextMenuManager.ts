import { type MenuProps } from '@mui/material';
import { Event } from '@strife/common';
import { injectable } from 'inversify';

export interface ContextMenuData {
  event: React.MouseEvent,
  menuProps?: MenuProps,
  items: React.ReactNode[]
}

@injectable()
export class ContextMenuManager {

  private _version = 0;
  public get version(): number {
    return this._version;
  }

  private _contextMenuData?: ContextMenuData;
  public get contextMenuData(): ContextMenuData | undefined {
    return this._contextMenuData;
  }

  private _contextMenuDataChangedEvent = new Event.Action<[ ContextMenuData | undefined ]>();
  public get contextMenuDataChangedEvent(): Event.IAction<[ ContextMenuData | undefined ]> {
    return this._contextMenuDataChangedEvent;
  }

  public request(contextMenuData: ContextMenuData): void {
    this._version++;
    this._contextMenuData = contextMenuData;
    this._contextMenuDataChangedEvent.invoke(undefined, this._contextMenuData);
  }

  public dismiss(): void {
    this._version++;
    this._contextMenuData = undefined;
    this._contextMenuDataChangedEvent.invoke(undefined, this._contextMenuData);
  }

}

export default ContextMenuManager;