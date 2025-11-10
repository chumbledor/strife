import { type IApp } from '../IApp.js';
export interface IBaseRouter {
    register(app: IApp): Promise<void>;
}
