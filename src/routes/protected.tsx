import MainLayout from '@/components/Layout/MainLayout';
import { PlansRoute } from '@/features/Plans';

const App = () => {
  return <MainLayout />;
};

const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [{ path: '/app/plans', element: <PlansRoute /> }],
  },
];

export default protectedRoutes;
