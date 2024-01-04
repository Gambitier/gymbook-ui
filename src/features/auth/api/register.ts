import { LoginResponseDTO } from '@/features/auth';
import { axios } from '@/lib/axios';

// TODO: fix props in this type
export type SignUpRequestDTO = {
  prefix: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  password: string;
  dateOfBirth: string;
  middleName: string;
};

export const registerWithEmailAndPassword = (
  data: SignUpRequestDTO,
): Promise<LoginResponseDTO> => {
  return axios.post('/auth/signup', data); // TODO: fix endpoint
};
