import { type IAction } from '@strife/common';

export interface IQueue<TItem> {
  readonly head?: TItem;
  readonly headChangedEvent: IAction<[ TItem | undefined ]>; 
  readonly items: ReadonlyArray<TItem>;
  enqueue(item: TItem): number;
  dequeue(): TItem | undefined;
  delete(item: TItem): void;
  contains(item: TItem): boolean;
}