import { Route, Routes } from 'react-router-dom';
import Plans from './Plans';
import Gym from '../../createGym/routes/Gym';

export const PlansRoute = () => {
  return (
    <Routes>
      <Route path="" element={<Plans />} />
      <Route path="/gym" element={<Gym />} />
    </Routes>
  );
};
