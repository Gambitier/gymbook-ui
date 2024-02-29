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
  const onSubmit = (data: CreateGymProps) => {
    console.log(data);

    reset();
  };
  return (
    <form id={formId} onSubmit={handleSubmit(onSubmit)}>
      <Container component="form" maxWidth="sm">
        <Typography component="h1" variant="h3" align="center">
          Create Gym
        </Typography>
        <Paper
          elevation={12}
          sx={{
            mt: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 2,
          }}
        >
          <Typography component="h1" variant="h4">
            Add Gym
          </Typography>
          <TextField
            label="Gym Name"
            variant="outlined"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ''}
          />
          <Button variant="contained" sx={{ mt: 4 }} fullWidth type="submit">
            Submit
          </Button>
        </Paper>
      </Container>
    </form>
  );
};
