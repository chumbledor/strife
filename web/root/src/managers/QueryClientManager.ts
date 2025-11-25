import { type IQueryClientManager } from '@interfaces/managers/IQueryClientManager';
import { DefaultOptions, QueryClient } from '@tanstack/react-query';
import { injectable } from 'inversify';

@injectable()
export class QueryClientManager implements IQueryClientManager {
  
  private _queryClient = new QueryClient();
  public get queryClient(): QueryClient {
    return this._queryClient;
  }

  public constructor() {
    const options: DefaultOptions<any> = {
      queries: {
        staleTime: 1000 * 60 * 5
      }
    };

    this._queryClient.setDefaultOptions(options);
  }

}

export default QueryClientManager;