import {
  CssBaseline as MUICssBaseline,
  CssBaselineProps as MUICssBaselineProps,
} from '@mui/material';

type CssBaselineProps = MUICssBaselineProps & {
  // Add any additional props specific to CustomCssBaseline
};

export const CssBaseline = (props: CssBaselineProps) => {
  return <MUICssBaseline {...props} />;
};
