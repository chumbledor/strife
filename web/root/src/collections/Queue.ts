import { Event } from '@strife/common';

export class Queue<TItem> {

  public get head(): TItem | undefined {
    return this._items.at(0);
  }

  private _headChangedEvent = new Event.Action<[ TItem | undefined ]>();
  public get headChangedEvent(): Event.IAction<[ TItem | undefined ]> {
    return this._headChangedEvent;
  }

  private _items = new Array<TItem>();
  public get items(): ReadonlyArray<TItem> {
    return this._items;
  }

  public enqueue(item: TItem): number {
    const index = this._items.push(item) - 1;
    if (index != 0)
      return index;

    const head = item;
    this._headChangedEvent.invoke(undefined, head);
    return index;
  }

  public dequeue(): TItem | undefined {
    const item = this._items.shift();
    const head = this._items.at(0);
    this._headChangedEvent.invoke(undefined, head);
    return item;
  }

  public delete(item: TItem): void {
    const index = this._items.indexOf(item);
    if (index < 0)
      return;

    if (index == 0) {
      this.dequeue();
      return;
    }

    this._items.splice(index, 1);
  }

  public contains(item: TItem): boolean {
    return this._items.indexOf(item) >= 0;
  }

}

export default Queue;