'use client'

import di from '@/DependencyInjection';
import { UserServiceId } from '@/di/UserInjector';
import Page, { PageProps } from '@components/page/Page';
import UserContextProvider from '@components/user/UserContextProvider';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export interface AuthenticatedPageProps extends PageProps {}

export default function AuthenticatedPage({ children, ...pageProps }: AuthenticatedPageProps): React.JSX.Element {
  const user = di.get(UserServiceId);
  if (!user.accountData) {
    const router = useRouter();
    const pathname = usePathname();
    router.replace(`/login?redirect=${pathname}`);
    return <React.Fragment />;
  }

  return <Page {...pageProps}>
    <UserContextProvider>
      {children}
    </UserContextProvider>
  </Page>;
}
