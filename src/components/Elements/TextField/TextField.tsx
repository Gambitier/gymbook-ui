import {
    TextField as MUITextField,
    TextFieldProps as MUITextFieldProps,
  } from '@mui/material';
  
  export type TextFieldProps = MUITextFieldProps & {
    // Add any additional props specific to CustomTypography
  };
  
  export const TextField = ({ children, ...props }: TextFieldProps) => {
    return <MUITextField {...props}>{children}</MUITextField>;
  };
  