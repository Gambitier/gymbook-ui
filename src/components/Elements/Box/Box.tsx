import { Box as MUIBox, BoxProps as MUIBoxProps } from '@mui/material';

type BoxProps = MUIBoxProps & {
  // Add any additional props specific to CustomTypography
};

export const Box = ({ children, ...props }: BoxProps) => {
  return <MUIBox {...props}>{children}</MUIBox>;
};
