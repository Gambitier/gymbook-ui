import { Route, Routes } from 'react-router-dom';
import Plans from './Plans';

export const PlansRoute = () => {
  return (
    <Routes>
      <Route path="" element={<Plans />} />
    </Routes>
  );
};
