import {
  FormControl as MUIFormControl,
  FormControlProps as MUIFormControlProps,
} from '@mui/material';

export type FormControlProps = MUIFormControlProps & {
  // Add any additional props specific to CustomTypography
};

export const FormControl = ({ children, ...props }: FormControlProps) => {
  return <MUIFormControl {...props}>{children}</MUIFormControl>;
};
