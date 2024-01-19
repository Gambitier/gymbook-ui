import {
  CircularProgress,
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from '@mui/material';
import clsx from 'clsx';

type ButtonProps = MUIButtonProps & {
  // Add any additional props specific to CustomButton
  loading?: boolean;
};

export const Button = ({
  className,
  children,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <MUIButton className={clsx(className)} {...props} disabled={loading}>
      {loading ? <CircularProgress size={24} color="inherit" /> : children}
    </MUIButton>
  );
};
