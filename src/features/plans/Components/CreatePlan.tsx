import { Button, Stack, TextField, Typography } from '@/components/Elements';
import { FormModal } from '@/components/Form/FormModal';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useCreatePlan } from '../api/createPlan';

const schema: yup.ObjectSchema<PlanValues> = yup.object().shape({
  name: yup.string().required('Name is required'),
  price: yup.number().required('Price is required'),
  durationInMoths: yup
    .number()
    .required('Duration in Months is required')
    .min(1, 'Duration must be at least 1')
    .max(12, 'Duration must be at most 12'),
});

type PlanValues = {
  name: string;
  price: number;
  durationInMoths: number;
};

export const CreatePlan: React.FC = () => {
  const form = useForm<PlanValues>({
    defaultValues: {
      name: '',
      price: 0,
      durationInMoths: 0,
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState, reset } = form;

  const { errors, isDirty, isValid } = formState;
  const gymId = 'b6ef37ab-1095-44e2-8b73-eaa1555d4df5';
  const createPlanMutation = useCreatePlan();
  const onSubmit = async (data: PlanValues) => {
    console.log(data);
    await createPlanMutation.mutateAsync({ gymId, data });
    reset();
  };

  return (
    <FormModal
      submitButton={
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mb: 2 }}
          disabled={!isDirty || !isValid}
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      }
      triggerButton={
        <Button variant="contained" sx={{ ml: 150 }}>
          Add New Plan
        </Button>
      }
    >
      <form>
        <Stack spacing={2}>
          <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
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
            inputProps={{
              min: 0,
            }}
            variant="outlined"
            {...register('price')}
            error={!!errors.price}
            helperText={errors.price ? errors.price.message : ''}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Duration in Months"
            type="number"
            inputProps={{
              min: 1,
              max: 12,
            }}
            variant="outlined"
            {...register('durationInMoths')}
            error={!!errors.durationInMoths}
            helperText={
              errors.durationInMoths ? errors.durationInMoths.message : ''
            }
            sx={{ mb: 2 }}
          />
        </Stack>
      </form>
    </FormModal>
  );
};
