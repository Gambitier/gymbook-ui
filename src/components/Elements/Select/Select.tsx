import {
  Select as MUISelect,
  SelectProps as MUISelectProps,
} from '@mui/material';

export type SelectProps = MUISelectProps & {
  // Add any additional props specific to CustomTypography
};

export const Select = ({ children, ...props }: SelectProps) => {
  return <MUISelect {...props}>{children}</MUISelect>;
};
