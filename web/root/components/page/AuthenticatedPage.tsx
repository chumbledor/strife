'use client'

import di from '@/DependencyInjection';
import { UserServiceId } from '@/di/UserInjector';
import '@/User';
import Page, { PageProps } from '@components/page/Page';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export interface AuthenticatedPageProps extends PageProps {}

export default function AuthenticatedPage({ ...pageProps }: AuthenticatedPageProps): React.JSX.Element {
  const user = di.get(UserServiceId);
  if (!user.account) {
    const router = useRouter();
    const pathname = usePathname();
    router.replace(`/login?redirect=${pathname}`);
    return <React.Fragment />;
  }

  return <Page {...pageProps} />;
}
