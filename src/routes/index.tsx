import { publicRoutes } from './public';
import { useRoutes } from 'react-router-dom';

export const AppRoutes = () => {
  const routes = publicRoutes;

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
