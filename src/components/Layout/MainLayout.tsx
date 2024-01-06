import { NavLink } from 'react-router-dom';

type SideNavigationItem = {
  name: string;
  to: string;
};

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const navigation: SideNavigationItem[] = [{ name: 'Plan', to: './plan' }];
  return (
    <div>
      {navigation.map((item, index) => (
        <NavLink end={index === 0} key={item.name} to={item.to}></NavLink>
      ))}
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
