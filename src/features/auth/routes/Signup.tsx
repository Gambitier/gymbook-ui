import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import SignupForm from '../components/SignupForm';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <Layout title="Sign up to your account">
      <SignupForm onSuccess={() => navigate('/plans')} />
    </Layout>
  );
};

export default Signup;
