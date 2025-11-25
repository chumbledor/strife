import di from '@/DependencyInjection';
import { AuthenticationServiceServiceId } from '@/di/services/AuthenticationServiceInjector';
import { UserServiceId } from '@/di/UserInjector';
import AccountAvatar from '@components/account/AccountAvatar';
import Logo from '@components/Logo';
import { AppBar, Box, Button, Divider, IconButton, Menu, MenuItem, Toolbar, type AppBarProps } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

export interface PrimaryAppBarProps extends AppBarProps {}

export default function PrimaryAppBar({ children, ...appBarProps }: PrimaryAppBarProps): React.JSX.Element {
  const user = di.get(UserServiceId);
  const authenticationService = di.get(AuthenticationServiceServiceId);
  const router = useRouter();
  const [ isUserMenuOpen, setIsUserMenuOpen ] = React.useState(false);
  const userMenuAchorRef = React.useRef<HTMLButtonElement | null>(null);

  return <AppBar position='static' {...appBarProps}>
    <Toolbar>
      <Logo align='left' variant='h6' />
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
      {
        user && user.accountData
          ? <React.Fragment>
              <IconButton ref={userMenuAchorRef} onClick={onClickOpenUserMenu}>
                <AccountAvatar accountData={user.accountData} />
              </IconButton>
              <Menu anchorEl={userMenuAchorRef.current} open={isUserMenuOpen} onClose={onCloseUserMenu}>
                <MenuItem onClick={onClickLogout}>Logout</MenuItem>
                <Divider />
                <MenuItem onClick={onClickRefreshAccessToken}>Refresh Access Token</MenuItem>
                <MenuItem onClick={onClickClearLocalStorage}>Clear Local Storage</MenuItem>
              </Menu>
            </React.Fragment>
          : <Button color='inherit' href='/login'>Login</Button>
      }
    </Toolbar>
  </AppBar>;

  function onClickOpenUserMenu(): void {
    setIsUserMenuOpen(true);
  }

  function onCloseUserMenu(): void {
    setIsUserMenuOpen(false);
  }

  async function onClickLogout(): Promise<void> {
    try {
      await authenticationService.logout();
    } finally {
      router.refresh();
    }
  }

  async function onClickRefreshAccessToken(): Promise<void> {
    const accountData = await authenticationService.refresh();
  }

  function onClickClearLocalStorage(): void {
    localStorage.clear();
  }
}
