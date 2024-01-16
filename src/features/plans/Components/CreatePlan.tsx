import { Button, Stack, TextField } from '@/components/Elements';
import { FormModal } from '@/components/Form/FormModal';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useCreatePlan } from '../api/createPlan';

type CreatePlanFormValues = {
  name: string;
  price: number;
  durationInMoths: number;
};

const schema: yup.ObjectSchema<CreatePlanFormValues> = yup.object().shape({
  name: yup.string().required('Name is required'),
  price: yup.number().required('Price is required'),
  durationInMoths: yup
    .number()
    .required('Duration in Months is required')
    .min(1, 'Duration must be at least 1')
    .max(12, 'Duration must be at most 12'),
});

const useFormWithValidation = () => {
  const form = useForm<CreatePlanFormValues>({
    defaultValues: {
      name: '',
      price: 0,
      durationInMoths: 0,
    },
    resolver: yupResolver(schema),
  });

  return form;
};

const CreatePlanForm = () => {
  const form = useFormWithValidation();
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isDirty, isValid } = formState;
  const formId = 'create-plan';

  const createPlanMutation = useCreatePlan();
  const onSubmit = async (data: CreatePlanFormValues) => {
    const gymId = 'b6ef37ab-1095-44e2-8b73-eaa1555d4df5';
    await createPlanMutation.mutateAsync({ gymId, data });
    reset();
  };

  const Form = (
    <form id={formId} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField
          label="Plan Name"
          variant="outlined"
          {...register('name')}
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ''}
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
        />
      </Stack>
    </form>
  );

  const SubmitButton = (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      disabled={!isDirty || !isValid}
      form={formId}
    >
      Submit
    </Button>
  );

  return { SubmitButton, Form };
};

export const CreatePlan: React.FC = () => {
  const { SubmitButton, Form } = CreatePlanForm();

  const TriggerButton = (
    <Grid container justifyContent="flex-end">
      <Button variant="contained">Add New Plan</Button>
    </Grid>
  );

  return (
    <FormModal
      submitButton={SubmitButton}
      triggerButton={TriggerButton}
      title="Add Plan"
    >
      {Form}
    </FormModal>
  );
};
