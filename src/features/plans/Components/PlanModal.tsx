import React from 'react';
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
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
  price: yup.string().required('Price is required'),
  durationInMonths: yup.string().required('Duration in Months is required'),
});

export type PlanValues = {
  name: string;
  price: string;
  durationInMonths: string;
};

interface PlanModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: PlanValues) => void;
}

const PlanModal: React.FC<PlanModalProps> = ({ open, onClose, onSubmit }) => {
  const form = useForm<PlanValues>({
    defaultValues: {
      name: '',
      price: '',
      durationInMonths: '',
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, reset, formState } = form;
  const { errors, isDirty, isValid } = formState;

  const handleFormSubmit = (data: PlanValues) => {
    // console.log(data);
    reset();
    onSubmit(data);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
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
              variant="outlined"
              {...register('price')}
              error={!!errors.price}
              helperText={errors.price ? errors.price.message : ''}
              sx={{ mb: 2 }}
            />

            <TextField
              label="Duration in Months"
              variant="outlined"
              {...register('durationInMonths')}
              error={!!errors.durationInMonths}
              helperText={
                errors.durationInMonths ? errors.durationInMonths.message : ''
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
      </Box>
    </Modal>
  );
};

export default PlanModal;
