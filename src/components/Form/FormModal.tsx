import { Button, Modal } from '@/components/Elements';
import { Grid } from '@mui/material';
import * as React from 'react';

type FormModalProps = {
  children: React.ReactNode;
  triggerButton: React.ReactElement;
  submitButton: React.ReactElement;
  title: string;
};

export const FormModal = ({
  children,
  triggerButton,
  submitButton,
  title,
}: FormModalProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {React.cloneElement(triggerButton, { onClick: handleOpen })}
      <Modal
        title={title}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        renderFooter={() => (
          <Grid container sx={{ mt: 1 }} spacing={1} justifyContent="center">
            <Grid item>
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
            </Grid>
            <Grid item>{submitButton}</Grid>
          </Grid>
        )}
      >
        <>{children}</>
      </Modal>
    </div>
  );
};
