export interface ICache<TKey, TValue> {
  has(key: TKey): Promise<boolean>;
  get(key: TKey): Promise<TValue | undefined>;
  set(key: TKey, value: TValue): Promise<void>;
  invalidate(key: TKey): Promise<void>;
}