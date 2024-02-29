import { CreateGymResponseDTO } from '@/features/createGym';
import { axios } from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';

type CreateGymRequestDTO = {
  name: string;
};
export const createGym = (
  data: CreateGymRequestDTO,
): Promise<CreateGymResponseDTO> => {
  return axios.post(`/v1/gyms`, data);
};

export const useCreateGym = () => {
  return useMutation({
    mutationFn: (input: { data: CreateGymRequestDTO }) => {
      const { data } = input;
      return createGym(data);
    },
  });
};
