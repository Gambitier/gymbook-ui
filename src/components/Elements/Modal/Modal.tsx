import { Modal as MUIModal, ModalProps as MUIModalProps } from '@mui/material';

type ModalProps = MUIModalProps & {
  // Add any additional props specific to CustomTypography
};

export const Modal = ({ children, ...props }: ModalProps) => {
  return <MUIModal {...props}>{children}</MUIModal>;
};
