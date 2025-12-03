import { Person as PersonIcon } from '@mui/icons-material';
import { Avatar, type AvatarProps } from '@mui/material';
import { Account } from '@strife/common';
import React from 'react';

export interface AccountAvatarProps extends AvatarProps {
  accountData: Account.Data
}

export function AccountAvatar({ accountData, ...avatarProps }: AccountAvatarProps): React.JSX.Element {
  return <Avatar {...avatarProps}>
    <PersonIcon />
  </Avatar>;
}

export default AccountAvatar;