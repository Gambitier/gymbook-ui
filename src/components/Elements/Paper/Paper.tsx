import { Paper as MUIPaper, PaperProps as MUIPaperProps } from '@mui/material';

type PaperProps = MUIPaperProps & {
  // Add any additional props specific to CustomPaper
};

export const Paper = ({ children, ...props }: PaperProps) => {
  return <MUIPaper {...props}>{children}</MUIPaper>;
};
