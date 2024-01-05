import { Box, Button, TextField, Typography } from '@/components/Elements';
import { useLogin } from '@/lib/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '300px',
          margin: 'auto',
        }}
      >
        <TextField
          label="Email"
          variant="outlined"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ''}
          sx={{ mb: 2 }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mb: 2 }}
        >
          Login
        </Button>

        <Typography variant="body1">
          Create a new account? <Link to="../signup">Sign up</Link>
        </Typography>
      </Box>
    </form>
  );
};

export default LoginForm;
