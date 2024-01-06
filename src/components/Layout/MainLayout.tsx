import { NavLink } from 'react-router-dom';

type SideNavigationItem = {
  name: string;
  to: string;
};
const MainLayout = () => {
  const navigation: SideNavigationItem[] = [{name: 'Plan', to: './plan' }];
  return (
    <div>
      {navigation.map((item, index) => (
        <NavLink end={index === 0} key={item.name} to={item.to}>
            <item.name/>
        </NavLink>
      ))}
    </div>
  );
};

export default MainLayout;
