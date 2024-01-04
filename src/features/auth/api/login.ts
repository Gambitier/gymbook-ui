import { LoginResponseDTO } from '@/features/auth';
import { axios } from '@/lib/axios';

export type LoginRequestDTO = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = (
  data: LoginRequestDTO,
): Promise<LoginResponseDTO> => {
  return axios.post('/v1/auth/login', data);
};
