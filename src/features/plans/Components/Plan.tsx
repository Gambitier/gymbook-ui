import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import PlanModal, { PlanValues } from './PlanModal';

const Plan: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const handleFormSubmit = (data: PlanValues) => {
    console.log('Form submitted:', data);
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

      <PlanModal
        open={isModalOpen}
        onClose={handleClose}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Plan;
