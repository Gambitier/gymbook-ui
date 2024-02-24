import { Button, Stack, TextField } from '@/components/Elements';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
type UpdatePlanProps = {
  planId: string;
  gymId: string;
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

export const UpdatePlan = (props: UpdatePlanProps) => {
  const { planId, gymId } = props;
  const form = useFormWithValidation();
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isDirty, isValid } = formState;
  const formId = 'create-plan';

  const onSubmit = async (data: UpdatePlanFormValues) => {
    console.log(data, planId, gymId);

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
    >
      Submit
    </Button>
  );

  return { SubmitButton, Form };
};

// export const UpdatePlan: React.FC = () => {
//   const { SubmitButton, Form, isSuccess } = UpdatePlan();
//   const TriggerButton = (
//     <Grid container justifyContent="flex-end">
//       <Button variant="contained">Add New Plan</Button>
//     </Grid>
//   );

//   return (
//     <FormModal
//       submitButton={SubmitButton}
//       triggerButton={TriggerButton}
//       title="Add Plan"
//       isDone={isSuccess}
//     >
//       {Form}
//     </FormModal>
//   );
// };
