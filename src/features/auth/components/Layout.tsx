import logo from '@/assets/logo.svg';
import {
  Box,
  Container,
  CssBaseline,
  Link,
  Paper,
  Typography,
} from '@/components/Elements';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Container component="main" maxWidth="xs">
          <Paper
            elevation={0}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              py: 8,
            }}
          >
            <Box sx={{ mb: 4 }}>
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  style={{ height: 100, width: 'auto' }}
                />
              </Link>
            </Box>
            <Typography component="h2" variant="h4" mb={3}>
              {title}
            </Typography>
            <Paper
              elevation={0}
              sx={{ py: 4, px: 2, width: '100%', maxWidth: 'md', mt: 2 }}
            >
              {children}
            </Paper>
          </Paper>
        </Container>
      </Box>
    </>
  );
};
