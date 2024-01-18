import {
  CircularProgress,
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from '@mui/material';
import { green } from '@mui/material/colors';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

type ButtonProps = MUIButtonProps & {
  // Add any additional props specific to CustomButton
  isLoading?: boolean;
};

export const Button = ({
  className,
  children,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef<number>();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <>
      <MUIButton
        className={clsx(className)}
        {...props}
        variant="contained"
        sx={buttonSx}
        disabled={loading}
        onClick={handleButtonClick}
      >
        {children}
      </MUIButton>
      {loading && (
        <CircularProgress
          size={24}
          sx={{
            color: green[500],
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-12px',
            marginLeft: '-12px',
          }}
        />
      )}
    </>
  );
};
