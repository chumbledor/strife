import { QueryClient } from '@tanstack/react-query';

export interface IQueryClientManager {
  readonly queryClient: QueryClient;
}