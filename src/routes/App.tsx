import { MainLayout } from '@/components/Layout';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
