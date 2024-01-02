import logo from '@/assets/logo.svg';
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Link,
  Typography,
} from '@/components/Elements';
import { Head } from '@/components/head';
import { useUser } from '@/lib/auth';
import { useNavigate } from 'react-router-dom'; // Assuming you have a router set up

export const Landing = () => {
  const navigate = useNavigate();
  const { data: userData } = useUser();

  const handleGetStartedClick = () => {
    if (userData) {
      navigate('/app');
    } else {
      navigate('/auth/login');
    }
  };

  const handleGithubProfileClick = () => {
    window.open(
      'https://github.com/gambitier',
      '_blank',
      'noopener noreferrer',
    );
  };

  return (
    <>
      <Head title="Landing Page" />
      <CssBaseline />
      <Container component="main" maxWidth="xs" style={{ marginTop: '100px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 8,
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Link to="/">
              <img
                src={logo}
                alt="Workflow"
                style={{ height: 100, width: 'auto' }}
              />
            </Link>
          </Box>
          <Typography variant="h2" gutterBottom align="center">
            Gym Book
          </Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleGetStartedClick}
            >
              Get Started
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginLeft: '10px' }}
              onClick={handleGithubProfileClick}
            >
              Github Profile
            </Button>
          </div>
        </Box>
      </Container>
    </>
  );
};
