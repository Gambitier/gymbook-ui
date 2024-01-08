import { Box, Button, TextField, Typography } from '@/components/Elements';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Modal } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const schema: yup.ObjectSchema<PlanValues> = yup.object().shape({
  name: yup.string().required('Name is required'),
  price: yup.number().required('Price is required'),
  durationInMoths: yup.string().required('Duration in Months is required'),
});

type PlanValues = {
  name: string;
  price: number;
  durationInMoths: number;
};

const Plan: React.FC<PlanValues> = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PlanValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: PlanValues) => {
    console.log(data);
  };
  return (
    <div>
      <Grid container>
        <Grid item>
          <Typography component="h1" variant="h6" sx={{ ml: 32 }}>
            Add Plan
          </Typography>
        </Grid>
        <Grid item sx={{ ml: 100 }}>
          <Button variant="contained" onClick={handleOpen}>
            Add Plan
          </Button>
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              fullWidth
              {...register('name')}
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ''}
              sx={{ mb: 2 }}
            />

            <TextField
              label="Price"
              type="price"
              variant="outlined"
              fullWidth
              {...register('price')}
              error={!!errors.price}
              helperText={errors.price ? errors.price.message : ''}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Duration in Months"
              type="durationInMoths"
              variant="outlined"
              fullWidth
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
              fullWidth
              sx={{ mb: 2 }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Plan;
