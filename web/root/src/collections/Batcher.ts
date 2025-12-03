interface PromiseExecutorData<TValue> {
  promise: Promise<TValue>;
  resolve: (value: TValue | PromiseLike<TValue>) => void;
  reject: (error?: any) => void;
}

export class Batcher<TKey, TValue> {

  private _onFetch: (keys: TKey[]) => Promise<Map<TKey, TValue>>;
  private _time: number;
  private _timer?: ReturnType<typeof setTimeout>;

  private _promiseExecutorDatasByKey = new Map<TKey, PromiseExecutorData<TValue>>();

  public constructor(onFetch: (keys: TKey[]) => Promise<Map<TKey, TValue>>, time: number = 10) {
    this._onFetch = onFetch;
    this._time = time;
  }

  public async request(key: TKey): Promise<TValue> {
    const self = this;

    let promiseExecutorData = this._promiseExecutorDatasByKey.get(key);
    if (promiseExecutorData)
      return promiseExecutorData.promise;

    let promise: Promise<TValue>;
    promise = new Promise(executor.bind(this));
    this.queue();
    return promise;
    
    function executor(resolve: (value: TValue | PromiseLike<TValue>) => void, reject: (error?: any) => void) {
      const promiseExecutorData = {
        promise,
        resolve,
        reject
      };

      self._promiseExecutorDatasByKey.set(key, promiseExecutorData);
    }
  }

  private queue(): void {
    if (this._timer)
      return;

    this._timer = setTimeout(this.execute.bind(this), this._time);
  }

  private execute(): void {
    this._timer = undefined;
    this.fetch();
  }

  private async fetch(): Promise<void> {
    const promiseExecutorDatasByKey = this._promiseExecutorDatasByKey;
    this._promiseExecutorDatasByKey = new Map<TKey, PromiseExecutorData<TValue>>();

    const keys = this._promiseExecutorDatasByKey.keys();
    const valuesByKey = await this._onFetch([...keys]);
    valuesByKey.forEach(resolve.bind(this));

    const rejects = keys.filter((key: TKey): boolean => !valuesByKey.has(key));
    rejects.forEach(reject.bind(this));

    function resolve(value: TValue, key: TKey): void {
      const promiseExecutorData = promiseExecutorDatasByKey.get(key);
      if (!promiseExecutorData)
        return;
      
      promiseExecutorData.resolve(value);
    }

    function reject(key: TKey): void {
      const promiseExecutorData = promiseExecutorDatasByKey.get(key);
      if (!promiseExecutorData)
        return;

      promiseExecutorData.reject();
    }
  }

}

export default Batcher;