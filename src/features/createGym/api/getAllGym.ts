import { GetGymResponseDTO } from '@/features/createGym';
import { axios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export const getAllGyms = (): Promise<GetGymResponseDTO> => {
  return axios.get(`/v1/gyms`);
};

const gymResponse: GetGymResponseDTO = {
  status: 'Suceess',
  message: '',
  data: [
    {
      id: '13425465gdfsaf456',
      name: 'Plan Name',
      userId: 'kjdfhkugh842910kjef',
      createdAt: '2022-02-20T12:00:00Z',
      updatedAt: '2022-02-20T12:00:00Z',
      deleted: null,
    },
  ],
};

export const useAllGym = () => {
  console.log(gymResponse);
  return useQuery({
    queryKey: ['gym'],
    queryFn: () => getAllGyms(),
  });
};
