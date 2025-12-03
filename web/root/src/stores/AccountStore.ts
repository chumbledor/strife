import Batcher from '@/collections/Batcher';
import di from '@/DependencyInjection';
import { QueryClientManagerServiceId } from '@/di/managers/QueryClientManagerInjector';
import { AccountServiceServiceId } from '@/di/services/AccountServiceInjector';
import { Account } from '@strife/common';
import { useMutation, useQuery } from '@tanstack/react-query';
import { injectable } from 'inversify';

@injectable()
export class AccountStore {
  
  private _queryClientManager = di.get(QueryClientManagerServiceId);
  private _accountService = di.get(AccountServiceServiceId);
  private _batcher = new Batcher<string, Account.Data>(this.onFetch.bind(this));

  public useCreateAccount(): ReturnType<typeof useMutation<Account.Data, Error, Account.CreateData>> {
    return useMutation({
      mutationFn: (createData: Account.CreateData): Promise<Account.Data> => this._accountService.createAccount(createData),
      onSuccess: this.setAccountQueryData.bind(this)
    });
  }

  public useDeleteAccount(): ReturnType<typeof useMutation> {
    return useMutation({
      mutationFn: (): Promise<void> => this._accountService.deleteAccount()
    }); 
  }

  public useGetAccount(accountId: string): ReturnType<typeof useQuery<Account.Data>> {
    return useQuery({ 
      queryKey: this.getAccountQueryKey(accountId), 
      queryFn: (): Promise<Account.Data> => this._batcher.request(accountId) 
    });
  }

  public useGetAccounts(getData: Account.GetData): ReturnType<typeof useQuery<Account.Data[]>> {
    return useQuery({
      queryKey: this.getAccountsQueryKey(getData),
      queryFn: async (): Promise<Account.Data[]> => {
        const accountDatas = await this._accountService.getAccounts(getData);
        accountDatas.forEach(this.setAccountQueryData.bind(this));
        return accountDatas;
      }
    });
  }

  public useUpdateAccount(): ReturnType<typeof useMutation<Account.Data, Error, Account.UpdateData>> {
    return useMutation({
      mutationFn: (updateData: Account.UpdateData): Promise<Account.Data> => this._accountService.updateAccount(updateData),
      onSuccess: this.setAccountQueryData.bind(this)
    });
  }

  private getAccountQueryKey(accountId: string): unknown[] {
    return [ 'account', accountId ];
  }

  private setAccountQueryData(accountData: Account.Data): void {
    this._queryClientManager.queryClient.setQueryData(
      this.getAccountQueryKey(accountData.id),
      accountData
    );
  }

  private getAccountsQueryKey(getData: Account.GetData): unknown[] {
    return [ 'accounts', getData ];
  }

  private async onFetch(ids: string[]): Promise<Map<string, Account.Data>> {
    const getData = await Account.GetSchema.parseAsync({ ids });
    const accountDatas = await this._accountService.getAccounts(getData);
    const accountDataEntries = accountDatas.map((accountData: Account.Data): [string, Account.Data] => [ accountData.id, accountData ]);
    return new Map(accountDataEntries);
  }

}

export default AccountStore;