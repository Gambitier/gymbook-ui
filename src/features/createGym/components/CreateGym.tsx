import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@/components/Elements';
import { yupResolver } from '@hookform/resolvers/yup';
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

export const CreateGym = () => {
  const form = useFormWithValidation();
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;
  const formId = 'create-gym';
  const createGymMutation = useCreateGym();

  const onSubmit = async (data: CreateGymProps) => {
    console.log(data);
    await createGymMutation.mutateAsync({ data });
    reset();
  };
  return (
    <form id={formId} onSubmit={handleSubmit(onSubmit)}>
      <Container component="form" maxWidth="sm">
        <Paper
          elevation={1}
          sx={{
            mt: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 2,
          }}
        >
          <Typography component="h1" variant="h4" sx={{ p: 2 }}>
            Enter Gym Name
          </Typography>
          <TextField
            label="Gym Name"
            variant="standard"
            {...register('name')}
            fullWidth
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ''}
          />
          <Button
            variant="contained"
            sx={{ mt: 4 }}
            form={formId}
            fullWidth
            type="submit"
          >
            Submit
          </Button>
        </Paper>
      </Container>
    </form>
  );
};
