import { Landing } from '@/features/misc';
import { publicRoutes } from '@/routes/public';
import { useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protected';

export const AppRoutes = () => {
  const commonRoutes = [
    {
      path: '/',
      element: <Landing />,
    },
  ];

  const element = useRoutes([
    ...publicRoutes,
    ...protectedRoutes,
    ...commonRoutes,
  ]);

  return <>{element}</>;
};
