import {
  Modal as MUIModal,
  ModalProps as MUIModalProps,
  Typography,
} from '@mui/material';
import { Box } from '../Box';

type ModalProps = MUIModalProps & {
  // Add any additional props specific to CustomTypography
  renderFooter: () => React.ReactNode;
  title: string;
};

export const Modal = ({
  children,
  title,
  renderFooter,
  ...props
}: ModalProps) => {
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
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          {title}
        </Typography>
        {children}
        {renderFooter()}
      </Box>
    </MUIModal>
  );
};
