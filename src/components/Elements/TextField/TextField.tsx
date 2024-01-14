import {
  TextField as MUITextField,
  TextFieldProps as MUITextFieldProps,
} from '@mui/material';
import React from 'react';

type TextFieldProps = MUITextFieldProps & {
  // Add any additional props specific to CustomTypography
};

export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  ({ children, ...props }, ref) => {
    return (
      <MUITextField {...props} ref={ref}>
        {children}
      </MUITextField>
    );
  },
);
