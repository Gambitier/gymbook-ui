import { PlansRoute } from '@/features/Plans';
import { RouteObject } from 'react-router-dom';
import { App } from './App';

export const protectedRoutes: RouteObject[] = [
  {
    path: '/app',
    element: <App />,
    children: [{ path: '/app/plans', element: <PlansRoute /> }],
  },
];
