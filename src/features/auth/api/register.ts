import { LoginResponseDTO } from '@/features/auth';
import { axios } from '@/lib/axios';

// TODO: fix props in this type
export type SignUpRequestDTO = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const registerWithEmailAndPassword = (
  data: SignUpRequestDTO,
): Promise<LoginResponseDTO> => {
  return axios.post('/auth/register', data); // TODO: fix endpoint
};
