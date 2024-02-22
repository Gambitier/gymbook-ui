import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React from 'react';
import { Button } from '../Button';

type ConfirmationDialogProp = {
  triggerButton: React.ReactElement;
  confirmButton: React.ReactElement;
  title: string;
  body: string;
};

const ConfirmationDialogue = (props: ConfirmationDialogProp) => {
  const { title, body, confirmButton, triggerButton } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {triggerButton}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {confirmButton}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmationDialogue;
