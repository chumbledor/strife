import { type IAction } from "@strife/common";

export interface IQueueManager<TItem> {
  readonly version: number;
  readonly head?: TItem;
  readonly headChangedEvent: IAction<[ TItem | undefined ]>;
  enqueue(item: TItem): number;
  dequeue(): TItem | undefined;
  delete(item: TItem): void;
  contains(item: TItem): boolean;
}