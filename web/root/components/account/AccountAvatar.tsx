import { Person as PersonIcon } from '@mui/icons-material';
import { Avatar, type AvatarProps } from '@mui/material';
import { type AccountData } from '@strife/common';
import React from 'react';

export interface AccountAvatarProps extends AvatarProps {
  accountData: AccountData
}

export function AccountAvatar({ accountData, ...avatarProps }: AccountAvatarProps): React.JSX.Element {
  return <Avatar {...avatarProps}>
    <PersonIcon />
  </Avatar>;
}

export default AccountAvatar;