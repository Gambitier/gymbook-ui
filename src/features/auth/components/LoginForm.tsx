import { useLogin } from '@/lib/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema: yup.ObjectSchema<LoginValues> = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password should have at least 6 characters'),
});

/*
 * LoginValues type represents form data (so we dont need to export it to other modules)
 * and api/LoginRequestDTO represent api request type
 * sometimes these two might be same but they represent different things
 */
type LoginValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSuccess: () => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const { mutateAsync } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginValues> = async (data: LoginValues) => {
    await mutateAsync(data);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          label="Password"
          type="password"
          variant="outlined"
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ''}
        />
      </div>

      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
      
    </form>
  );
};

export default LoginForm;
