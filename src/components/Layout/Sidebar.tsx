import { NavLink } from 'react-router-dom';

type SideNavigationItem = {
  name: string;
  to: string;
};
const SidebarNavigation = () => {
  const navigation: SideNavigationItem[] = [{ name: 'Plan', to: 'plans' }];
  return (
    <>
      {navigation.map((item, index) => (
        <NavLink end={index === 0} key={item.name} to={item.to}>
          {item.name}
        </NavLink>
      ))}
    </>
  );
};
export const Sidebar = () => {
  return (
    <div className="container">
      <div className="container_sidenav">
        <SidebarNavigation />
      </div>
    </div>
  );
};
