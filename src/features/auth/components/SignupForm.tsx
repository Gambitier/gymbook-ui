import { useRegister } from '@/lib/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@/components/Elements';

enum GenderEnum {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
  UNSPECIFIED = 'UNSPECIFIED',
}

enum UserPrefix {
  MR = 'MR',
  MRS = 'MRS',
  MISS = 'MISS',
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
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <FormControl variant="standard" fullWidth>
          <InputLabel id="demo-simple-select-label">Prefix</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Prefix"
            {...register('prefix')}
          >
            <MenuItem value={UserPrefix.MR}>MR</MenuItem>
            <MenuItem value={UserPrefix.MRS}>MRS</MenuItem>
            <MenuItem value={UserPrefix.MISS}>MISS</MenuItem>
          </Select>
          {errors.prefix && (
            <FormHelperText>{errors.prefix.message}</FormHelperText>
          )}
        </FormControl>
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
