// TODO: why this is not allowed?
// import { AuthRoutes } from '@/features/auth/routes';
import { AuthRoutes } from '../features/auth/routes';

export const publicRoutes = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
];
