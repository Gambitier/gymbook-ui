import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from '@mui/material';
import clsx from 'clsx';

export type ButtonProps = MUIButtonProps & {
  // Add any additional props specific to CustomButton
};

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <MUIButton className={clsx(className)} {...props}>
      {children}
    </MUIButton>
  );
};
