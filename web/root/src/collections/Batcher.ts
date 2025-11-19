interface PromiseExecutorData<TValue> {
  resolve: (value: TValue | PromiseLike<TValue>) => void;
  reject: (error?: any) => void;
}

export default class Batcher<TKey, TValue> {

  private _onFetch: (keys: TKey[]) => Promise<Map<TKey, TValue>>;
  private _time: number;
  private _timer?: ReturnType<typeof setTimeout>;

  private _promiseExecutorDatasByKey = new Map<TKey, PromiseExecutorData<TValue>[]>;

  public constructor(onFetch: (keys: TKey[]) => Promise<Map<TKey, TValue>>, time: number = 10) {
    this._onFetch = onFetch;
    this._time = time;
  }

  public request(key: TKey): Promise<TValue> {
    const self = this;

    const promise = new Promise(executor);
    this.queue();
    return promise;
    
    function executor(resolve: (value: TValue | PromiseLike<TValue>) => void, reject: (error?: any) => void) {
      let promiseExecutorDatas = self._promiseExecutorDatasByKey.get(key);
      if (!promiseExecutorDatas) {
        promiseExecutorDatas = [];
        self._promiseExecutorDatasByKey.set(key, promiseExecutorDatas);
      }

      const promiseExecutorData = {
        resolve,
        reject
      };

      promiseExecutorDatas.push(promiseExecutorData);
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
    const self = this;

    const keys = this._promiseExecutorDatasByKey.keys();
    const valuesByKey = await this._onFetch([...keys]);
    valuesByKey.forEach(this.resolve.bind(this));

    const rejects = keys.filter((key: TKey): boolean => !valuesByKey.has(key));
    rejects.forEach(this.reject.bind(this));
  }

  private resolve(value: TValue, key: TKey): void {
    const promiseExecutorDatas = this._promiseExecutorDatasByKey.get(key);
    if (!promiseExecutorDatas)
      return;

    promiseExecutorDatas.forEach(
      (promiseExecutorData: PromiseExecutorData<TValue>): void => 
        promiseExecutorData.resolve(value)
    );
  }

  private reject(key: TKey): void {
    const promiseExecutorDatas = this._promiseExecutorDatasByKey.get(key);
    if (!promiseExecutorDatas)
      return;

    promiseExecutorDatas.forEach(
      (promiseExecutorData: PromiseExecutorData<TValue>): void => 
        promiseExecutorData.reject()
    );
  }

}