import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import clsx from 'clsx';
import * as React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectFieldProps = FieldWrapperPassThroughProps & {
  options: Option[];
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  registration: Partial<UseFormRegisterReturn>;
  onChange?: (event: SelectChangeEvent, child: React.ReactNode) => void;
};

export const SelectField = (props: SelectFieldProps) => {
  const {
    label,
    options,
    error,
    className,
    defaultValue,
    registration,
    placeholder,
    onChange,
  } = props;

  return (
    <FieldWrapper label={label} error={error}>
      <Select
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...registration}
        className={clsx(className)}
        onChange={onChange}
        fullWidth
      >
        {options.map(({ label, value }: Option) => (
          <MenuItem key={label?.toString()} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FieldWrapper>
  );
};
