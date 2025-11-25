import { type IContextMenuData, type IContextMenuManager } from '@interfaces/managers/IContextMenuManager';
import { Action, type IAction } from '@strife/common';
import { injectable } from 'inversify';

@injectable()
export class ContextMenuManager implements IContextMenuManager {

  private _version = 0;
  public get version(): number {
    return this._version;
  }

  private _contextMenuData?: IContextMenuData;
  public get contextMenuData(): IContextMenuData | undefined {
    return this._contextMenuData;
  }

  private _contextMenuDataChangedEvent = new Action<[ IContextMenuData | undefined ]>();
  public get contextMenuDataChangedEvent(): IAction<[ IContextMenuData | undefined ]> {
    return this._contextMenuDataChangedEvent;
  }

  public request(contextMenuData: IContextMenuData): void {
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