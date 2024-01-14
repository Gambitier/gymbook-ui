import {
  Typography as MUITypography,
  TypographyProps as MUITypographyProps,
} from '@mui/material';

type TypographyProps = MUITypographyProps & {
  // Add any additional props specific to CustomTypography
};

export const Typography = ({ children, ...props }: TypographyProps) => {
  return <MUITypography {...props}>{children}</MUITypography>;
};
