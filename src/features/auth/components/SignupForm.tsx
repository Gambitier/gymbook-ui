import { Button, TextField, Typography } from '@/components/Elements';
import { SelectField } from '@/components/Form';
import { useRegister } from '@/lib/auth';
import { getEnumKeys } from '@/utils/enum';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { GenderEnum, UserPrefix } from '../types/user';

enum UserPrefixDisplayValueEnum {
  'Mr.' = UserPrefix.MR,
  'Mrs.' = UserPrefix.MRS,
  'Miss.' = UserPrefix.MISS,
}

const schema: yup.ObjectSchema<SignupValues> = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  middleName: yup.string().required('Middle Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password should have at least 6 characters'),
  prefix: yup
    .string()
    .oneOf([UserPrefix.MR, UserPrefix.MRS, UserPrefix.MISS] as const)
    .required('Prefix is required'),
  dateOfBirth: yup.string().required('Date of Birth is required'),
  gender: yup
    .string()
    .oneOf([
      GenderEnum.MALE,
      GenderEnum.FEMALE,
      GenderEnum.OTHER,
      GenderEnum.UNSPECIFIED,
    ] as const)
    .required('Gender is required'),
});

type SignupValues = {
  prefix: UserPrefix.MR | UserPrefix.MRS | UserPrefix.MISS;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender:
    | GenderEnum.MALE
    | GenderEnum.FEMALE
    | GenderEnum.OTHER
    | GenderEnum.UNSPECIFIED;
  password: string;
  dateOfBirth: string;
  middleName: string;
};

type SignupFormProps = {
  onSuccess: () => void;
};

const SignupForm: React.FC<SignupFormProps> = ({ onSuccess }) => {
  const { mutateAsync } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SignupValues> = async (data: SignupValues) => {
    await mutateAsync(data);
    onSuccess();
  };

  const prefixKeys = getEnumKeys(UserPrefixDisplayValueEnum);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <SelectField
          label="Prefix"
          error={errors.prefix}
          registration={register('prefix')}
          options={prefixKeys.map((key) => ({
            label: key,
            value: UserPrefixDisplayValueEnum[key],
          }))}
        />
      </div>
      <div>
        <TextField
          label="First Name"
          variant="outlined"
          {...register('firstName')}
          error={!!errors.firstName}
          helperText={errors.firstName ? errors.firstName.message : ''}
        />
      </div>
      <div>
        <TextField
          label="Middle Name"
          variant="outlined"
          {...register('middleName')}
          error={!!errors.middleName}
          helperText={errors.middleName ? errors.middleName.message : ''}
        />
      </div>
      <div>
        <TextField
          label="Last Name"
          variant="outlined"
          {...register('lastName')}
          error={!!errors.lastName}
          helperText={errors.lastName ? errors.lastName.message : ''}
        />
      </div>
      <div>
        <TextField
          label="Email"
          variant="outlined"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
        />
      </div>
      <div>
        <TextField
          label="Phone"
          variant="outlined"
          {...register('phone')}
          error={!!errors.phone}
          helperText={errors.phone ? errors.phone.message : ''}
        />
      </div>
      <div>
        <TextField
          label="Date of Birth"
          variant="outlined"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          {...register('dateOfBirth')}
          error={!!errors.dateOfBirth}
          helperText={errors.dateOfBirth ? errors.dateOfBirth.message : ''}
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Signup
      </Button>
      <Typography component="p" sx={{ fontSize: '15px', mt: 3 }} variant="h6">
        Already have an account? <Link to="../login">Log In</Link>
      </Typography>
    </form>
  );
};

export default SignupForm;
