import { Box, Typography } from '@/components/Elements';
import React from 'react';

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Box>
        <Box>
          <Typography variant="h4">{title}</Typography>
        </Box>
        <Box>{children}</Box>
      </Box>
    </>
  );
};
