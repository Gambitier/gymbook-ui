import {
  FormHelperText as MUIFormHelperText,
  FormHelperTextProps as MUIFormHelperTextProps,
} from '@mui/material';

export type FormHelperTextProps = MUIFormHelperTextProps & {
  // Add any additional props specific to CustomTypography
};

export const FormHelperText = ({ children, ...props }: FormHelperTextProps) => {
  return <MUIFormHelperText {...props}>{children}</MUIFormHelperText>;
};
