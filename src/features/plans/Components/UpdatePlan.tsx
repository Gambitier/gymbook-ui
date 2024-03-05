import { Button, Stack, TextField } from '@/components/Elements';
import { FormModal } from '@/components/Form/FormModal';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { usePlan } from '../api/getPlan';
import { useUpdatePlan } from '../api/updatePlan';
import storage from '@/utils/storage';
type UpdatePlanProps = {
  planId: string;
};

type UpdatePlanFormValues = {
  name: string;
  price: number;
  durationInMoths: number;
};

const schema: yup.ObjectSchema<UpdatePlanFormValues> = yup.object().shape({
  name: yup.string().required('Name is required'),
  price: yup.number().required('Price is required'),
  durationInMoths: yup
    .number()
    .required('Duration in Months is required')
    .min(1, 'Duration must be at least 1')
    .max(12, 'Duration must be at most 12'),
});

const useFormWithValidation = () => {
  const form = useForm<UpdatePlanFormValues>({
    defaultValues: {
      name: '',
      price: 0,
      durationInMoths: 0,
    },
    resolver: yupResolver(schema),
  });

  return form;
};

export const UpdatePlanForm = (props: UpdatePlanProps) => {
  const { planId } = props;
  const form = useFormWithValidation();
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isDirty, isValid } = formState;
  const formId = 'update-plan';

  const planQuery = usePlan({ planId });

  useEffect(() => {
    if (planQuery.data) {
      reset({
        name: planQuery.data.data.name,
        price: planQuery.data.data.price,
        durationInMoths: planQuery.data.data.durationInMoths,
      });
    }
  }, [planQuery.data, reset]);

  const updateplanMutation = useUpdatePlan();

  const onSubmit = async (data: UpdatePlanFormValues) => {
    const gymId = storage.getCurrentGymId();
    await updateplanMutation.mutateAsync({ gymId, planId, data });
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
      disabled={!isDirty || !isValid}
      form={formId}
      isLoading={updateplanMutation.isPending}
    >
      Update Plan
    </Button>
  );
  const isSuccess = updateplanMutation.isSuccess;

  return { SubmitButton, Form, isSuccess };
};

export const UpdatePlan: React.FC<{ planId: string }> = ({ planId }) => {
  const { SubmitButton, Form, isSuccess } = UpdatePlanForm({ planId });
  const TriggerButton = (
    <Grid container justifyContent="flex-end">
      <Button variant="contained">Update Plan</Button>
    </Grid>
  );

  return (
    <FormModal
      submitButton={SubmitButton}
      triggerButton={TriggerButton}
      title="Update Plan"
      isDone={isSuccess}
    >
      {Form}
    </FormModal>
  );
};
