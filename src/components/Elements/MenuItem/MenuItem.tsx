import {
  MenuItem as MUIMenuItem,
  MenuItemProps as MUIMenuItemProps,
} from '@mui/material';

export type MenuItemProps = MUIMenuItemProps & {
  // Add any additional props specific to CustomTypography
};

export const MenuItem = ({ children, ...props }: MenuItemProps) => {
  return <MUIMenuItem {...props}>{children}</MUIMenuItem>;
};
