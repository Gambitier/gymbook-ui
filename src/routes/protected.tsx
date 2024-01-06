import { PlansRoute } from '@/features/Plans';
import { App } from './App';

const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [{ path: '/app/plans', element: <PlansRoute /> }],
  },
];

export default protectedRoutes;
