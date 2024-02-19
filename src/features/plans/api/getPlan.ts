import { GetPlanResponseDTO } from '@/features/plans';
import { axios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export const getPlan = (gymId: string): Promise<GetPlanResponseDTO[]> => {
  return axios.get(`/v1/gyms/${gymId}/plans`);
};

export const usePlan = () => {
  return useQuery({
    queryKey: ['plans'],
    queryFn: () => getPlan('b6ef37ab-1095-44e2-8b73-eaa1555d4df5'),
  });
};
