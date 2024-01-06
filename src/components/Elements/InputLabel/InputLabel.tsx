import {
  InputLabel as MUIInputLabel,
  InputLabelProps as MUIInputLabelProps,
} from '@mui/material';

export type InputLabelProps = MUIInputLabelProps & {
  // Add any additional props specific to CustomTypography
};

export const InputLabel = ({ children, ...props }: InputLabelProps) => {
  return <MUIInputLabel {...props}>{children}</MUIInputLabel>;
};
