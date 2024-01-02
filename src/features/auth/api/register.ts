import { axios } from '@/lib/axios';

import { UserResponse } from '../types';

// TODO: fix props in this type
export type RegisterCredentialsDTO = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const registerWithEmailAndPassword = (
  data: RegisterCredentialsDTO,
): Promise<UserResponse> => {
  return axios.post('/auth/register', data); // TODO: fix endpoint
};
