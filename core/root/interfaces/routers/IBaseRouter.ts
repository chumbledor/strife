import { type IApp } from '@interfaces/IApp.js';

export interface IBaseRouter {
  register(app: IApp): Promise<void>;
}