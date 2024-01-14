import { Drawer } from '@/components/Elements';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Drawer />
      <main>{children}</main>
    </div>
  );
};
