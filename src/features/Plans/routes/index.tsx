import { Route, Routes } from 'react-router-dom';
import Plans from './Plans';

const PlansRoute = () => {
  return (
    <Routes>
      <Route path='/plan' element={<Plans/>} />
    </Routes>
  )
}

export default PlansRoute