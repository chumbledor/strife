import { Box, type BoxProps } from '@mui/material';
import React from 'react';

export interface WidgetProps extends BoxProps {}

export default function Widget({ children, ...boxProps }: WidgetProps): React.JSX.Element {
  return <Box width='100%' height='100%' {...boxProps}>
    {children}
  </Box>;
}