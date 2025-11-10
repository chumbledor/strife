'use client'

import { Typography, type TypographyProps } from '@mui/material';
import React from 'react';

export interface LogoProps extends TypographyProps {}

export default function Logo({ ...typographyProps }: LogoProps): React.JSX.Element {
  return <Typography component='a' href='/' variant="h2" align="center" fontWeight={700} {...typographyProps}>strife</Typography>;
}
