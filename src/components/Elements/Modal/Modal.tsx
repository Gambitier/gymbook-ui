import { Modal as MUIModal, ModalProps as MUIModalProps } from '@mui/material';
import { Box } from '../Box';

type ModalProps = MUIModalProps & {
  // Add any additional props specific to CustomTypography
  renderFooter: () => React.ReactNode;
};

export const Modal = ({ children, renderFooter, ...props }: ModalProps) => {
  return (
    <MUIModal {...props}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          p: 5,
          boxShadow: 24,
          border: '2px solid #000',
        }}
      >
        {children}
        {renderFooter()}
      </Box>
    </MUIModal>
  );
};
