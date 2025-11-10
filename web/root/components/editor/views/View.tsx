import { Box, type BoxProps } from '@mui/material';
import React from 'react';

export interface ViewProps extends BoxProps {}

export default function View({ children, ...boxProps }: ViewProps): React.JSX.Element {
  return <Box width='100%' height='100%' {...boxProps}>
    {children}
  </Box>;
}