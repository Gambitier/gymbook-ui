import { Landing } from '@/features/misc';
import ProtectedRoutes from '@/routes/protected';
import { publicRoutes } from '@/routes/public';
import { useRoutes } from 'react-router-dom';

export const AppRoutes = () => {
  const commonRoutes = [
    {
      path: '/',
      element: <Landing />,
    },
  ];

  const element = useRoutes([
    ...publicRoutes,
    ...ProtectedRoutes,
    ...commonRoutes,
  ]);

  return <>{element}</>;
};
