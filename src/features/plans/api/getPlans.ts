import { GetPlanResponseDTO } from '@/features/plans';
import { axios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export const getPlans = (gymId: string): Promise<GetPlanResponseDTO> => {
  return axios.get(`/v1/gyms/${gymId}/plans`);
};

const planResponse: GetPlanResponseDTO = {
  status: 'Suceess',
  message: '',
  data: [
    {
      id: '13425465gdfsaf456',
      name: 'Plan Name',
      price: 100,
      durationInMoths: 12,
      createdAt: '2022-02-20T12:00:00Z',
      updatedAt: '2022-02-20T12:00:00Z',
      deleted: null,
      gymId: 'lhresuhhsoi34839879',
    },
  ],
};

export const usePlans = () => {
  console.log(planResponse);
  return useQuery({
    queryKey: ['plans'],
    queryFn: () => getPlans('b6ef37ab-1095-44e2-8b73-eaa1555d4df5'),
  });
};
