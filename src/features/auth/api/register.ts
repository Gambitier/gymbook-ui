import { GenderEnum, LoginResponseDTO, UserPrefix } from '@/features/auth';
import { axios } from '@/lib/axios';

export type SignUpRequestDTO = {
  prefix: UserPrefix;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: GenderEnum;
  password: string;
  dateOfBirth: string;
  middleName: string;
};

export const registerWithEmailAndPassword = (
  data: SignUpRequestDTO,
): Promise<LoginResponseDTO> => {
  return axios.post('/auth/signup', data); // TODO: fix endpoint
};
