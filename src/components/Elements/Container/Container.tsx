import {
  Container as MUIContainer,
  ContainerProps as MUIContainerProps,
} from '@mui/material';

type ContainerProps = MUIContainerProps & {
  // Add any additional props specific to CustomContainer
};

export const Container = ({ children, ...props }: ContainerProps) => {
  return <MUIContainer {...props}>{children}</MUIContainer>;
};
