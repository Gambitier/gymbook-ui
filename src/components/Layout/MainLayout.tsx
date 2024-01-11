import Drawer from '../Elements/Drawer/Drawer';
// import { Sidebar } from './Sidebar';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Drawer/>
        {/* <Sidebar /> */}
        <main>{children}</main>
      {/* </Drawer> */}
    </div>
  );
};

export default MainLayout;
