import { useRegister } from '@/lib/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = (yup.ObjectSchema<SignupValues> = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  middleName: yup.string().required('Middle Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone is required'),
  password: yup.string().required('Password is required'),
}));

type SignupValues = {
  prefix: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  password: string;
  dateOfBirth: string;
  middleName: string;
};
type SignupFormProps = {
  onSuccess: () => void;
};
const SignupForm: React.FC<SignupFormProps> = ({ onSuccess }) => {
  const { mutateAsync } = useRegister;
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
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          {...register('dateOfBirth')}
          error={!!errors.dateOfBirth}
          helperText={errors.dateOfBirth ? errors.dateOfBirth.message : ''}
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Signup
      </Button>
    </form>
  );
};

export default SignupForm;
