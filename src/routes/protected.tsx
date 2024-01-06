import MainLayout from '@/components/Layout/MainLayout';
import PlansRoute from '@/features/Plans/routes';
const App = () => {
  return <MainLayout />;
};

const protectedRoutes = [
   {
    path:'/app',
    element:<App/>,
    children:[
        {path:'/plans', element: <PlansRoute/>  }
    ]
   }
]

export default protectedRoutes;
