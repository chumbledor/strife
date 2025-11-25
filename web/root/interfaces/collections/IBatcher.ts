export interface IBatcher<TKey, TValue> {
  request(key: TKey): Promise<TValue>;
}