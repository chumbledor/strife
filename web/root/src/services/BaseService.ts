import di from '@/DependencyInjection';
import { UserServiceId } from '@/di/UserInjector';
import { type IUser } from '@interfaces/IUser';
import { type BaseServiceOptions, type IBaseService, type ServiceOptions, type VoidServiceOptions } from '@interfaces/services/IBaseService';

export class BaseService implements IBaseService {

  private static defaultOptions: BaseServiceOptions = {
    url: ''
  };

  private static defaultInit: RequestInit = {
    headers: { 'Content-Type': 'application/json' }
  };

  private static defaultBody = JSON.stringify({});

  private _user = di.get(UserServiceId);
  protected get user(): IUser {
    return this._user;
  }

  protected get baseUrl(): string | URL | undefined {
    return undefined;
  }

  protected async post(options?: VoidServiceOptions): Promise<void>
  protected async post<TResponse>(options?: ServiceOptions<TResponse>): Promise<TResponse>
  protected async post<TResponse>(options?: VoidServiceOptions | ServiceOptions<TResponse>): Promise<void | TResponse> {
    options = { ...BaseService.defaultOptions, ...options };
    options.data = this.filter(options.data);
    options.init = { ...BaseService.defaultInit, ...options.init };
    options.init.method = 'POST';
    options.init.body = options.data 
      ? JSON.stringify(options.data) 
      : BaseService.defaultBody;
    return this.fetch(options);
  }

  protected async delete(options?: VoidServiceOptions): Promise<void>
  protected async delete<TResponse>(options?: ServiceOptions<TResponse>): Promise<TResponse>
  protected async delete<TResponse>(options?: VoidServiceOptions | ServiceOptions<TResponse>): Promise<void | TResponse> {
    options = { ...BaseService.defaultOptions, ...options };
    options.data = this.filter(options.data);
    options.init = { ...BaseService.defaultInit, ...options.init };
    options.init.method = 'DELETE';
    options.init.body = options.data 
      ? JSON.stringify(options.data) 
      : BaseService.defaultBody;
    return this.fetch(options);
  }

  protected async get(options?: VoidServiceOptions): Promise<void>
  protected async get<TResponse>(options?: ServiceOptions<TResponse>): Promise<TResponse>
  protected async get<TResponse>(options?: VoidServiceOptions | ServiceOptions<TResponse>): Promise<void | TResponse> {
    options = { ...BaseService.defaultOptions, ...options };
    options.data = this.filter(options.data);
    options.init = { ...BaseService.defaultInit, ...options.init };
    options.init.method = 'GET';
    const searchParams = new URLSearchParams(options.data);
    options.url = searchParams.size == 0 
      ? options.url
      : `${options.url}?${searchParams.toString()}`;
    return this.fetch(options);
  }

  protected async put(options?: VoidServiceOptions): Promise<void>
  protected async put<TResponse>(options?: ServiceOptions<TResponse>): Promise<TResponse>
  protected async put<TResponse>(options?: VoidServiceOptions | ServiceOptions<TResponse>): Promise<void | TResponse> {
    options = { ...BaseService.defaultOptions, ...options };
    options.data = this.filter(options.data);
    options.init = { ...BaseService.defaultInit, ...options.init };
    options.init.method = 'PUT';
    options.init.body = options.data 
      ? JSON.stringify(options.data) 
      : BaseService.defaultBody;
    return this.fetch(options);
  }

  private async fetch<TResponse>(options?: VoidServiceOptions | ServiceOptions<TResponse>): Promise<void | TResponse> {
    const self = this;
    options = { ...BaseService.defaultOptions, ...options };
    options.data = this.filter(options.data);
    options.init = { ...BaseService.defaultInit, ...options.init };
    if (this._user.accountData && this._user.accountData?.authentication?.accessToken) {
      options.init.headers = { ...options.init.headers, ...{ 'Authorization': `Bearer ${this._user.accountData.authentication.accessToken}` } };
    }

    const url = `${this.baseUrl}${options.url ? options.url : ''}`;
    const response = await fetch(url, options.init);

    if (!response.ok) {
      const json = await response.json();
      return Promise.reject(json.message);
    }
    
    const typed = options as ServiceOptions<TResponse>;
    if (!typed.schema)
      return;

    const json = await response.json();
    return await typed.schema.parseAsync(json);
  }

  private filter(data: Record<string, any> | undefined): Record<string, any> | undefined {
    if (!data)
      return undefined;

    const entries = Object.entries(data).filter(([key, value]): boolean => value !== undefined);
    return Object.fromEntries(entries);
  }

}

export default BaseService;