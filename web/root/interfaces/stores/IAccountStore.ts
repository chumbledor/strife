import { type AccountData, type CreateAccountData, type GetAccountsData, type UpdateAccountData } from '@strife/common';
import { type useMutation, type useQuery } from '@tanstack/react-query';

export interface IAccountStore {
  useCreateAccount(createAccountData: CreateAccountData): ReturnType<typeof useMutation<AccountData>>;
  useDeleteAccount(): ReturnType<typeof useMutation>;
  useGetAccount(accountId: string): ReturnType<typeof useQuery<AccountData>>;
  useGetAccounts(getAccountsData: GetAccountsData): ReturnType<typeof useQuery<AccountData[]>>;
  useUpdateAccount(updateAccountData: UpdateAccountData): ReturnType<typeof useMutation<AccountData>>;
}