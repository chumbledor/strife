import { type ICache } from '@interfaces/collections/ICache';

export abstract class Cache<TKey, TValue> implements ICache<TKey, TValue> {
  public abstract has(key: TKey): Promise<boolean>;
  public abstract get(key: TKey): Promise<TValue | undefined>;
  public abstract set(key: TKey, value: TValue): Promise<void>;
  public abstract invalidate(key: TKey): Promise<void>;
}

export default Cache;