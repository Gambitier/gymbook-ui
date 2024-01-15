import { Box as MUIBox, BoxProps as MUIBoxProps } from '@mui/material';
import React from 'react';

type BoxProps = MUIBoxProps & {
  // Add any additional props specific to CustomTypography
};

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => {
    return (
      <MUIBox {...props} ref={ref}>
        {children}
      </MUIBox>
    );
  },
);
