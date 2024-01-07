import { NavLink } from 'react-router-dom';

type SideNavigationItem = {
  name: string;
  to: string;
};

const SidebarNavigation = () => {
  const navigation = [{ name: 'Plan', to: 'plans' }].filter(
    Boolean,
  ) as SideNavigationItem[];
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

const Sidebar = () => {
  return (
    <div className="container">
      <div className="container_sidenav">
        <SidebarNavigation />
      </div>
    </div>
  );
};

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Sidebar />

      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
