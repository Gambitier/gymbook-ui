import clsx from 'clsx';
import { LinkProps, Link as RouterLink } from 'react-router-dom';

export const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <RouterLink className={clsx(className)} {...props}>
      {children}
    </RouterLink>
  );
};
