import { type ZodType } from 'zod';

export type BaseServiceOptions = {
  url?: string | URL | undefined,
  data?: Record<string, any>,
  init?: RequestInit
}

export type VoidServiceOptions = BaseServiceOptions;
export type ServiceOptions<TResponse> = BaseServiceOptions & { schema: ZodType<TResponse> };

export interface IBaseService {}