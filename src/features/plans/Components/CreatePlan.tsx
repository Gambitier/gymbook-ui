import { Button, TextField, Typography } from '@/components/Elements';
import { ModalForm } from '@/components/Form/Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema: yup.ObjectSchema<PlanValues> = yup.object().shape({
  name: yup.string().required('Name is required'),
  price: yup.number().required('Price is required'),
  durationInMoths: yup.number().required('Duration in Months is required'),
});
type PlanValues = {
  name: string;
  price: number;
  durationInMoths: number;
};
export const CreatePlan: React.FC<PlanValues> = () => {
  const form = useForm<PlanValues>({
    defaultValues: {
      name: '',
      price: 0,
      durationInMoths: 0,
    },
    resolver: yupResolver(schema),
  });
  const {
    register,
    handleSubmit,
    formState,
    reset,
  } = form;

  const { errors,isDirty,isValid } =formState
  const onSubmit = (data: PlanValues) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <Typography component="h1" variant="h6" sx={{ ml: 32 }}>
        Add Plan
      </Typography>
      <ModalForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              sx={{ mb: 2 }}
            >
              Add Plan
            </Typography>
            <TextField
              label="Plan Name"
              variant="outlined"
              {...register('name')}
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ''}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Price"
              type="number"
              variant="outlined"
              {...register('price')}
              error={!!errors.price}
              helperText={errors.price ? errors.price.message : ''}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Duration in Months"
              type="number"
              variant="outlined"
              {...register('durationInMoths')}
              error={!!errors.durationInMoths}
              helperText={
                errors.durationInMoths ? errors.durationInMoths.message : ''
              }
              sx={{ mb: 2 }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mb: 2 }}
              disabled={!isDirty || !isValid}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </ModalForm>
    </div>
  );
};
