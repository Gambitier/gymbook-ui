import { Box, Button, Modal } from '@/components/Elements';
import { Grid } from '@mui/material';
import * as React from 'react';

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

type FormModalProps = {
  children: React.ReactNode;
  triggerButton: React.ReactElement;
  submitButton: React.ReactElement;
};

export const FormModal = ({
  children,
  triggerButton,
  submitButton,
}: FormModalProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {React.cloneElement(triggerButton, { onClick: handleOpen })}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        renderFooter={() => (
          <Grid
            id="footer-Buttons"
            container
            spacing={1}
            justifyContent="flex-end"
          >
            <Grid item>
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
            </Grid>
            <Grid item>{submitButton}</Grid>
          </Grid>
        )}
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};
