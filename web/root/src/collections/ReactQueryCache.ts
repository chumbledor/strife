import Cache from '@/collections/Cache';
import { QueryClient } from '@tanstack/react-query';

export class ReactQueryCache<TValue> extends Cache<unknown[], TValue> {

  private static QueryClient = new QueryClient();

  public async has(key: unknown[]): Promise<boolean> {
    const state = ReactQueryCache.QueryClient.getQueryState(key);
    return state != undefined && !state.isInvalidated;
  }

  public async get(key: unknown[]): Promise<TValue | undefined> {
    const hasValue = await this.has(key);
    if (!hasValue)
      return undefined;

    return ReactQueryCache.QueryClient.getQueryData(key);
  }

  public async set(key: unknown[], value: TValue): Promise<void> {
    ReactQueryCache.QueryClient.setQueryData(key, value);
  }

  public async invalidate(key: unknown[]): Promise<void> {
    ReactQueryCache.QueryClient.invalidateQueries({ queryKey: key });
  }

}

export default ReactQueryCache;