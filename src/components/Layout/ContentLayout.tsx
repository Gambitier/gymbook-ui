import React from 'react';

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>{title}</h1>
        </div>
        <div className="description">{children}</div>
      </div>
    </>
  );
};

export default ContentLayout;
