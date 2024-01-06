import { PlansRoute } from '@/features/Plans';
import { App } from './App';

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [{ path: '/app/plans', element: <PlansRoute /> }],
  },
];
