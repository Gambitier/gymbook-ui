import AppDrawer from '@/components/Elements/Drawer/AppDrawer';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <AppDrawer />
      <main>{children}</main>
    </div>
  );
};
