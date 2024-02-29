import { Route, Routes } from 'react-router-dom';
import Gym from './Gym';
export const CreateGymRoute = () => {
  return (
    <Routes>
      <Route path="" element={<Gym />} />
    </Routes>
  );
};
