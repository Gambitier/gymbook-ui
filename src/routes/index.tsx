import { Landing } from '@/features/misc';
import { publicRoutes } from '@/routes/public';
import { useRoutes } from 'react-router-dom';

export const AppRoutes = () => {
  
  const commonRoutes = [
    {
      path: '/',
      element: <Landing />,
    },
  ];

  const element = useRoutes([...publicRoutes, ...commonRoutes]);

  return <>{element}</>;
};
