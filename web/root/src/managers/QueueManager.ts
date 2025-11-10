import { type IQueueManager } from '@interfaces/managers/IQueueManager';
import { IAction } from '@strife/common';
import Queue from '@/collections/Queue';

export default abstract class QueueManager<TItem> implements IQueueManager<TItem> {

  private _version = 0;
  public get version(): number {
    return this._version;
  }
  
  public get head(): TItem | undefined {
    return this._queue.head;
  }
  
  public get headChangedEvent(): IAction<[ TItem | undefined ]> {
    return this._queue.headChangedEvent;
  }

  private _queue = new Queue<TItem>();
  private _active?: TItem;
  
  public constructor() {
    this.headChangedEvent.add(this.onHeadChanged.bind(this));
  }

  public enqueue(item: TItem): number {
    this.configure(item);
    return this._queue.enqueue(item);
  }

  public dequeue(): TItem | undefined {
    return this._queue.dequeue();
  }

  public delete(item: TItem): void {
    return this._queue.delete(item);
  }

  public contains(item: TItem): boolean {
    return this._queue.contains(item);
  }

  protected abstract configure(item: TItem): void;
  protected abstract activate(item: TItem): void;
  protected abstract deactivate(item: TItem): void;

  private onHeadChanged(item?: TItem): void {
    if (this._active)
      this.deactivate(this._active);

    this._version++;
    this._active = item;

    if (this._active)
      this.activate(this._active);
  }

}