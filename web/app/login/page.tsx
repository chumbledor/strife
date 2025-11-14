'use client'

import di from '@/DependencyInjection';
import { AuthenticationServiceServiceId } from '@/di/services/AuthenticationServiceInjector';
import Window from '@components/layout/Window';
import Logo from '@components/Logo';
import { Alert, Box, Button, FormControl, FormHelperText, Input, InputLabel, Link } from '@mui/material';
import Page from '@root/components/page/Page';
import { validateEmail, validatePassword } from '@strife/common';
import { useRouter } from 'next/navigation';
import { ChangeEvent, Fragment, JSX, useState } from 'react';

const DefaultRedirect = '/';

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const [ email, setEmail ] = useState('');
  const [ emailError, setEmailError ] = useState<string | undefined>();
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
          <Box id='login-form' component='form' display='flex' flexDirection='column' gap='16px' paddingY='16px' onSubmit={onSubmitLogin}>
            <FormControl>
              <InputLabel htmlFor='email'>Email</InputLabel>
              <Input id='email' name='email' type='email' value={email} onChange={onChangeEmail} error={emailError != undefined} placeholder='email' />
              <FormHelperText error={true}>{emailError}</FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor='password'>Password</InputLabel>
              <Input id='password' name='password' type='password' value={password} onChange={onChangePassword} error={passwordError != undefined} placeholder='password' />
              <FormHelperText error={true}>{passwordError}</FormHelperText>
            </FormControl>
          </Box>
          <Button type='submit' form='login-form' variant='contained'>Login</Button>
          <Link href='/register' className='text-center' fontSize='small'>Don't have an account yet?</Link>
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

  function onChangePassword(event: ChangeEvent<HTMLInputElement>): void {
    const password = event.target.value;
    setPassword(password);
    const error = password.length == 0
      ? undefined
      : validatePassword(password);
    setPasswordError(error ? error.message : undefined);
  }

  async function onSubmitLogin(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (emailError || passwordError)
      return;

    const authenticationService = await di.getAsync(AuthenticationServiceServiceId);

    try {
      const accountData = await authenticationService.login({ email, password });
      onLoginSuccess();
    } catch (error: any) {
      console.log(error);
      setError(error);
    }
  }

  async function onLoginSuccess(): Promise<void> {
    setError(undefined);
    setEmail('');
    setEmailError(undefined);
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
