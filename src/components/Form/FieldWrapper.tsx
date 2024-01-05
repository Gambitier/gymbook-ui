import { FormHelperText, InputLabel } from '@mui/material';
import clsx from 'clsx';
import * as React from 'react';
import { FieldError } from 'react-hook-form';

type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
  description?: string;
};

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'className' | 'children'
>;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, className, error, children } = props;

  return (
    <div>
      {label && <InputLabel className={clsx(className)}>{label}</InputLabel>}
      {children}
      {error?.message && <FormHelperText error>{error.message}</FormHelperText>}
    </div>
  );
};
