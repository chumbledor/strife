'use client'

import di from '@/DependencyInjection';
import { AccountServiceServiceId } from '@/di/services/AccountServiceInjector';
import { AuthenticationServiceServiceId } from '@/di/services/AuthenticationServiceInjector';
import '@/services/AccountService';
import '@/services/AuthenticationService';
import Window from '@components/layout/Window';
import Logo from '@components/Logo';
import Page from '@components/page/Page';
import { Alert, Box, Button, FormControl, FormHelperText, Input, InputLabel, Link } from '@mui/material';
import { validateEmail, validatePassword, validateUsername } from '@strife/common';
import { useRouter } from 'next/navigation';
import { ChangeEvent, Fragment, JSX, useState } from 'react';

const DefaultRedirect = '/';

export default function RegisterPage(): JSX.Element {
  const accountService = di.get(AccountServiceServiceId);
  const authenticationService = di.get(AuthenticationServiceServiceId);
  const router = useRouter();
  const [ email, setEmail ] = useState('');
  const [ emailError, setEmailError ] = useState<string | undefined>();
  const [ username, setUsername ] = useState('');
  const [ usernameError, setUsernameError ] = useState<string | undefined>();
  const [ password, setPassword ] = useState('');
  const [ passwordError, setPasswordError ] = useState<string | undefined>();
  const [ error, setError ] = useState<string | undefined>();

  return <Page>
    <Window>
      <Box display='flex' flexDirection='column' gap='32px' paddingX='32px' paddingY='64px'>
        <Logo />
        <Box display='flex' flexDirection='column' gap='16px'>
          {
            error == undefined
              ? <Fragment />
              : <Alert variant='filled' severity='error'>{error}</Alert>
          }
          <Box id='register-form' component='form' display='flex' flexDirection='column' gap='16px' paddingY='16px' onSubmit={onSubmitRegister}>
            <FormControl>
              <InputLabel htmlFor='email'>Email</InputLabel>
              <Input id='email' name='email' type='email' value={email} onChange={onChangeEmail} error={emailError != undefined} placeholder='email' />
              <FormHelperText error={true}>{emailError}</FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor='username'>Username</InputLabel>
              <Input id='username' name='username' type='text' value={username} onChange={onChangeUsername} error={usernameError != undefined} placeholder='username' />
              <FormHelperText error={true}>{usernameError}</FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor='password'>Password</InputLabel>
              <Input id='password' name='password' type='password' value={password} onChange={onChangePassword} error={passwordError != undefined} placeholder='password' />
              <FormHelperText error={true}>{passwordError}</FormHelperText>
            </FormControl>
          </Box>
          <Button type='submit' form='register-form' variant='contained'>Register</Button>
          <Link href='/login' className='text-center' fontSize='small'>Already have an account?</Link>
        </Box>
      </Box>
    </Window>
  </Page>;

  function onChangeEmail(event: ChangeEvent<HTMLInputElement>): void {
    const email = event.target.value;
    setEmail(email)
    const error = email.length == 0 
      ? undefined
      : validateEmail(email);
    setEmailError(error ? error.message : undefined);
  }

  function onChangeUsername(event: ChangeEvent<HTMLInputElement>): void {
    const username = event.target.value;
    setUsername(username)
    const error = username.length == 0
      ? undefined
      : validateUsername(username);
    setUsernameError(error ? error.message : undefined);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>): void {
    const password = event.target.value;
    setPassword(password);
    const error = password.length == 0
      ? undefined
      : validatePassword(password);
    setPasswordError(error ? error.message : undefined);
  }

  async function onSubmitRegister(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (emailError || usernameError || passwordError)
      return;

    try {
      const accountData = await accountService.createAccount({ email, username, password });
      onRegisterSuccess();
    } catch (error: any) {
      console.log(error);
      setError(error);
    }
  }

  async function onRegisterSuccess(): Promise<void> {
      await authenticationService.login({ email, password });

      setError(undefined);
      setEmail('');
      setEmailError(undefined);
      setUsername('');
      setUsernameError(undefined);
      setPassword('');
      setPasswordError(undefined);

    if (window && window.location && window.location.search) {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const href = urlSearchParams.get('redirect');
      router.push(href ?? DefaultRedirect);
    }

    router.push(DefaultRedirect);
  }
}
