import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { LoginCredentialsDTO } from '../api/login';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password should have at least 6 characters'),
});

type LoginFormProps = {
  onSuccess: () => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentialsDTO>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginCredentialsDTO> = () => {
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
