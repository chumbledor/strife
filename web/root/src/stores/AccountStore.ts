import Batcher from '@/collections/Batcher';
import di from '@/DependencyInjection';
import { QueryClientManagerServiceId } from '@/di/managers/QueryClientManagerInjector';
import { AccountServiceServiceId } from '@/di/services/AccountServiceInjector';
import { type IAccountStore } from '@root/interfaces/stores/IAccountStore';
import { GetAccountsSchema, type AccountData, type CreateAccountData, type GetAccountsData, type UpdateAccountData } from '@strife/common';
import { useMutation, useQuery } from '@tanstack/react-query';
import { injectable } from 'inversify';

@injectable()
export class AccountStore implements IAccountStore {
  
  private _queryClientManager = di.get(QueryClientManagerServiceId);
  private _accountService = di.get(AccountServiceServiceId);
  private _batcher = new Batcher<string, AccountData>(this.onFetch.bind(this));

  public useCreateAccount(createAccountData: CreateAccountData): ReturnType<typeof useMutation<AccountData>> {
    return useMutation({
      mutationFn: (): Promise<AccountData> => this._accountService.createAccount(createAccountData),
      onSuccess: this.setAccountQueryData.bind(this)
    });
  }

  public useDeleteAccount(): ReturnType<typeof useMutation> {
    return useMutation({
      mutationFn: (): Promise<void> => this._accountService.deleteAccount()
    }); 
  }

  public useGetAccount(accountId: string): ReturnType<typeof useQuery<AccountData>> {
    return useQuery({ 
      queryKey: this.getAccountQueryKey(accountId), 
      queryFn: (): Promise<AccountData> => this._batcher.request(accountId) 
    });
  }

  public useGetAccounts(getAccountsData: GetAccountsData): ReturnType<typeof useQuery<AccountData[]>> {
    return useQuery({
      queryKey: this.getAccountsQueryKey(getAccountsData),
      queryFn: async (): Promise<AccountData[]> => {
        const accountDatas = await this._accountService.getAccounts(getAccountsData);
        accountDatas.forEach(this.setAccountQueryData.bind(this));
        return accountDatas;
      }
    });
  }

  public useUpdateAccount(updateAccountData: UpdateAccountData): ReturnType<typeof useMutation<AccountData>> {
    return useMutation({
      mutationFn: (): Promise<AccountData> => this._accountService.updateAccount(updateAccountData),
      onSuccess: this.setAccountQueryData.bind(this)
    });
  }

  private getAccountQueryKey(accountId: string): unknown[] {
    return [ 'account', accountId ];
  }

  private setAccountQueryData(accountData: AccountData): void {
    this._queryClientManager.queryClient.setQueryData(
      this.getAccountQueryKey(accountData.id),
      accountData
    );
  }

  private getAccountsQueryKey(getAccountsData: GetAccountsData): unknown[] {
    return [ 'accounts', getAccountsData ];
  }

  private async onFetch(ids: string[]): Promise<Map<string, AccountData>> {
    const getAccountsData = await GetAccountsSchema.parseAsync({ ids });
    const accountDatas = await this._accountService.getAccounts(getAccountsData);
    const accountEntries = accountDatas.map((accountData: AccountData): [string, AccountData] => [ accountData.id, accountData ]);
    return new Map(accountEntries);
  }

}

export default AccountStore;