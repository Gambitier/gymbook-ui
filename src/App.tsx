import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <AppRoutes />
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
