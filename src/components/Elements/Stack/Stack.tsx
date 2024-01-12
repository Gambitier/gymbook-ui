import {
    Stack as MUIStack,
    StackProps as MUIStackProps,
  } from '@mui/material';
  
  export type StackProps = MUIStackProps & {
    // Add any additional props specific to CustomTypography
  };
  
  export const Stack = ({ children, ...props }: StackProps) => {
    return <MUIStack {...props}>{children}</MUIStack>;
  };
  