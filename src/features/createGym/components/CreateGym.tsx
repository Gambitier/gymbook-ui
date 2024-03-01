import { Button, TextField } from '@/components/Elements';
import { FormModal } from '@/components/Form/FormModal';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useCreateGym } from '../api/createGym';

type CreateGymProps = {
  name: string;
};

const schema: yup.ObjectSchema<CreateGymProps> = yup.object().shape({
  name: yup.string().required('Name is required'),
});

const useFormWithValidation = () => {
  const form = useForm<CreateGymProps>({
    defaultValues: {
      name: '',
    },
    resolver: yupResolver(schema),
  });

  return form;
};

const CreateGymForm = () => {
  const form = useFormWithValidation();
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isDirty, isValid } = formState;
  const formId = 'create-gym';
  const createGymMutation = useCreateGym();

  const onSubmit = async (data: CreateGymProps) => {
    console.log(data);
    await createGymMutation.mutateAsync({ data });
    reset();
  };
  const Form = (
    <form id={formId} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField
          label="Gym Name"
          variant="standard"
          {...register('name')}
          fullWidth
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ''}
        />
      </Stack>
    </form>
  );
  const SubmitButton = (
    <Button
      type="submit"
      variant="contained"
      disabled={!isDirty || !isValid || createGymMutation.isPending}
      form={formId}
      isLoading={createGymMutation.isPending}
    >
      Submit
    </Button>
  );
  const isSuccess = createGymMutation.isSuccess;
  return { SubmitButton, Form, isSuccess };
};
export const CreateGym = () => {
  const { SubmitButton, Form, isSuccess } = CreateGymForm();
  const TriggerButton = (
    <Grid container justifyContent="flex-end">
      <Button variant="contained">Create New Gym</Button>
    </Grid>
  );

  return (
    <FormModal
      submitButton={SubmitButton}
      triggerButton={TriggerButton}
      title="Enter Gym Name"
      isDone={isSuccess}
    >
      {Form}
    </FormModal>
  );
};
