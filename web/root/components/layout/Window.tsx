'use client'

import { Box, Paper } from '@mui/material';
import React from 'react';

export interface WindowProps {
  children?: React.ReactNode
}

export default function Window({ children }: WindowProps): React.JSX.Element {
  return <Box width='100%' height='100%' display='flex' flexDirection='column' alignItems='center' justifyContent={{ xs: 'start', sm: 'center' }}>
    <Box width={{ xs: '100%', sm: '512px' }} padding={{ xs: '16px', sm: undefined }} display='flex' flexDirection='column' justifyContent={{ xs: 'start', sm: 'center' }}>
      <Paper elevation={4}>
        {children}
      </Paper>
    </Box>
  </Box>
}
