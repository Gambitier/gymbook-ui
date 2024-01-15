import { Modal as MUIModal, ModalProps as MUIModalProps } from '@mui/material';

type ModalProps = MUIModalProps & {
  // Add any additional props specific to CustomTypography
  renderFooter: () => React.ReactNode;
};

export const Modal = ({ children, renderFooter, ...props }: ModalProps) => {
  return (
    <MUIModal {...props}>
      <>
        {children}
        {renderFooter()}
      </>
    </MUIModal>
  );
};
